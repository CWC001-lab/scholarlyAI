"use client";

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Overview: React.FC = () => {
  const [stats, setStats] = useState({ projects: 0, ongoing: 0, completed: 0, overdue: 0 });
  const [chartData, setChartData] = useState([['Task', 'Count'], ['Completed', 0], ['Ongoing', 0], ['Overdue', 0]]);
  const [events, setEvents] = useState([]);
  const [urgentProjects, setUrgentProjects] = useState<UrgentProject[]>([]);

  useEffect(() => {
    fetchStats();
    fetchChartData();
    fetchEvents();
    fetchUrgentProjects();
  }, []);

  const fetchStats = async () => {
    const response = await fetch('/api/project-stats');
    const data = await response.json();
    setStats(data);
  };

  const fetchChartData = async () => {
    const response = await fetch('/api/project-activity');
    const data = await response.json();
    setChartData([
      ['Task', 'Count'],
      ['Completed', data.completed],
      ['Ongoing', data.ongoing],
      ['Overdue', data.overdue],
    ]);
  };

  const fetchEvents = async () => {
    const response = await fetch('/api/project-deadlines');
    const data = await response.json();
    setEvents(data.map((project: { projectType: string; projectDeadline: string }) => ({
      title: project.projectType,
      start: new Date(project.projectDeadline),
      end: new Date(project.projectDeadline),
    })));
  };

  const fetchUrgentProjects = async () => {
    const response = await fetch('/api/urgent-projects');
    const data = await response.json();
    setUrgentProjects(data);
  };

  const options = {
    pieHole: 0.4,
    pieSliceText: 'label',
    legend: 'none',
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold capitalize">{key}</h2>
            <p className="text-2xl">{value}</p>
            <span className="text-gray-500">{key === 'projects' ? 'Project count' : 'Task count'}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-[5%]">
        <div className="w-[30%] bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">All Project Activity</h2>
          <div className="h-80">
            <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="w-[60%] bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
          <div style={{ height: '500px' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow w-full">
        <h2 className="text-lg font-semibold mb-4">Projects with High Urgency</h2>
        <div className="flex flex-row gap-4 overflow-x-auto">
          {urgentProjects.map((project: UrgentProject, index) => (
            <div key={index} className="bg-blue-100 p-6 rounded-lg shadow w-[32%] flex-shrink-0">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-lg">{project.projectType}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {moment(project.projectDeadline).format('MMM DD')}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface UrgentProject {
  projectType: string;
  projectDeadline: string;
  progress: number;
}

export default Overview;
