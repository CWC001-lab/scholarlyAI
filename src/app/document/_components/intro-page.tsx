/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

import Navbar from '@/components/navbar';
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function IntroPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">

      <Navbar />

      {/* the home screen starts here */}
      <div className="home">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    Empower Your Academic Journey
  </h1>
  <div className="flex items-center justify-center">
    <p className="max-w-[600px] text-muted-foreground md:text-xl">
      Elevate Your Achievements with Personalised Assistance and
      Advanced Tools Tailored for Academic Excellence.
    </p>
  </div>
</div>
                <div className="flex flex-row gap-2">
<Link
  href="#"
  className="inline-flex h-10 items-center justify-center rounded-md bg-[#f9f9f9] px-8 text-sm font-medium text-primary shadow-lg transition-colors hover:bg-[#f0f0f0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  prefetch={false}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  Demo
</Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <SignInButton>Sign up</SignInButton>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] max-h-[500px] lg:order-last lg:aspect-square">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <Image
                      src="/hero.gif"
                      alt="Hero"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        {/* IntroPage content */}
      </div>




{/* the features starts here */}
      <div className="features py-12 sm:py-24 lg:py-32 bg-gray-100">
  <div className="container px-4 md:px-6">
<div className="space-y-4 text-center">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl inline-block">
    Experience Excellence with Premium Benefits
  </h2>
  <p className="max-w-[600px] text-muted-foreground md:text-xl inline-block">
    Elevate Your Academic Endeavours Through Cutting-Edge AI Features Designed
    for Success.
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">



  <div className="bg-white p-8 rounded-lg shadow-lg relative flex flex-col items-center">
    
    <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">AI-Powered Research Analytics</h3>
    <p className="text-gray-600">
      Dive deep into your research with advanced analytics, uncovering insights and trends effortlessly.
    </p>
  </div>



      <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
      <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
        <h3 className="text-xl font-bold mb-2">Personalised Learning Pathways</h3>
        <p className="text-gray-600">
          Tailor your learning journey with AI-driven recommendations, ensuring a personalised and efficient experience.
        </p>
      </div>



      <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
      <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
        <h3 className="text-xl font-bold mb-2">Enhanced Writing Assistance</h3>
        <p className="text-gray-600">
          Elevate your writing with advanced grammar checks, plagiarism detection, and style optimization.
        </p>
      </div>




      <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
      <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
        <h3 className="text-xl font-bold mb-2">Collaborative AI Tools</h3>
        <p className="text-gray-600">
          Seamlessly collaborate on projects with AI-enhanced tools, fostering efficiency and innovation.
        </p>
      </div>



      <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
      <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
        <h3 className="text-xl font-bold mb-2">Exclusive Content Access</h3>
        <p className="text-gray-600">
          Access premium resources, tutorials, and databases not available to free users, expanding your academic horizons.
        </p>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center">
      <div className="border-2 border-black rounded-md mb-4 p-3 flex justify-center items-center">
      <i className="bi bi-lightning-fill text-black text-2xl"></i>
    </div>
        <h3 className="text-xl font-bold mb-2">Advanced Project Automation</h3>
        <p className="text-gray-600">
          Streamline your project workflow with AI-driven automation. Supercharge tasks and free up time for deeper thinking.
        </p>
      </div>
    </div>
  </div>
</div>



{/* the pricing starts here */}
<div className="pricing-plans">
  <div className="container mx-auto py-7 sm:py-15 lg:py-19 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl">
        Pricing plans that scale
      </h2>
      <p className="max-w-[500px] text-muted-foreground sm:text-lg">
        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-20">
  <div className="bg-white p-9 rounded-lg shadow-lg relative flex items-center">
    <div>
      <h3 className="text-xl font-bold mb-2">Basic plan</h3>
      <p className="text-4xl font-bold mb-4">$10/mth</p>
      <p className="text-gray-600 mb-4">Billed annually.</p>
      <ul className="space-y-2 mb-6">
        <li>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </li>
        {/* Add more features here */}
      </ul>
      <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50">
        Get started
      </button>
    </div>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-lg relative flex items-center">
    <div>
      <h3 className="text-xl font-bold mb-2">Plus plan</h3>
      <p className="text-4xl font-bold mb-4">$20/mth</p>
      <p className="text-gray-600 mb-4">Billed annually.</p>
      <ul className="space-y-2 mb-6">
        <li>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </li>
        {/* Add more features here */}
      </ul>
      <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50">
        Get started
      </button>
    </div>
  </div>
</div>
      </div>
      </div>



{/* the guide page starts here */}
    <div className="guide">
      <div className="container mx-auto py-12 sm:py-24 lg:py-32">


      <div className='my-20'>
            <h2 className="text-2xl font-300 tracking-tighter sm:text-3xl xl:text-4xl">
              A Guided Tour of Powerful Features
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Navigate through the Dashboard&apos;s Rich Features and Enhance Your Productivity.
            </p>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>


              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>


              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>


              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed quis utricies purus fermentum. Tellus
                  effend id in nunc. Amet lacus. Lorem ipsum dolor sit amet consectetur. Sed quis

                </p>
<a href="#" className="text-blue-600 hover:underline flex items-center">
  Learn more
  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
  </svg>
</a>
              </div>
            </div>


          </div>



         
          <div className="relative h-20 w-full sm:h-[350px] md:h-[450px] lg:h-[420px]">
  <img
    src="/hero.gif"
    alt="hero"
    className="h-full w-full rounded-lg shadow-lg object-cover"
  />
</div>




        </div>
      </div>
    </div>






{/* the FAQ starts here */}
    <div className="bg-gray-100 rounded-lg p-6 w-full h-[500px] md:h-[600px] lg:h-[500px] mx-auto flex justify-center">

    <div className="bg-white-100 shadow-2xl rounded-lg p-6 lg:w-[60%] mx-auto">

      <div className=' flex flex-col items-center justify-center'>
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      <p className="text-gray-600 mb-6">Everything you need to know about the platform and billing.</p>
      </div>

      <div className="space-y-4">
        <div>
          <button
            className="w-full flex justify-between items-center font-bold text-lg text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={() => toggleAccordion(0)}
          >
            <span>How can AI Academia enhance my academic performance?</span>
            <span className={`transition-transform duration-300 ${activeIndex === 0 ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {activeIndex === 0 && (
            <div className="mt-4 text-gray-700">
              <p>AI Academia is designed to elevate your learning and project management experience. Through AI-driven tools, personalized assistance, and collaborative features, you'll navigate your academic journey with efficiency and excellence.</p>
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full flex justify-between items-center font-bold text-lg text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            <span>What makes the Premium Plan worth it?</span>
            <span className={`transition-transform duration-300 ${activeIndex === 1 ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {activeIndex === 1 && (
            <div className="mt-4 text-gray-700">
              <p>The Premium Plan provides enhanced features and benefits that elevate your academic experience. Explore the details to determine if it's the right fit for your needs.</p>
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full flex justify-between items-center font-bold text-lg text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            <span>How does AI Academia ensure academic integrity?</span>
            <span className={`transition-transform duration-300 ${activeIndex === 2 ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {activeIndex === 2 && (
            <div className="mt-4 text-gray-700">
              <p>AI Academia has robust measures in place to maintain academic integrity. Learn more about our approach to ensure your work meets the highest standards.</p>
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full flex justify-between items-center font-bold text-lg text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={() => toggleAccordion(3)}
          >
            <span>Where can I find more detailed help resources?</span>
            <span className={`transition-transform duration-300 ${activeIndex === 3 ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {activeIndex === 3 && (
            <div className="mt-4 text-gray-700">
              <p>Explore our comprehensive help resources, including detailed guides, tutorials, and support channels, to get the answers you need.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>






<div>

<div className="w-full h-[600px] md:h-[700px] lg:h-[500px] flex flex-col justify-center items-center">
  
  <div className="bg-blue-200 rounded-lg shadow-lg p-6 lg:w-[75%] h-[200px] md:h-[350px] lg:h-[250px] mx-auto">
  <div className="text-center">


  <div className="relative h-20 w-full sm:h-[350px] md:h-[450px] lg:h-[80px] flex justify-center items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle h-full w-20% rounded-lg shadow-lg" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>
</div>


  <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
  <p className="text-gray-600 mb-6">
    Can't find the answer you're looking for? Please chat to our friendly team.
  </p>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Get in touch
  </button>
</div>

  </div>




<div className="mt-14 bg-gray-100 w-full lg:h-[30%] flex flex-row justify-center items-center gap-60 ">

  <div>
  <h3 className="text-xl font-bold mb-2">Sign up for our newsletter</h3>
  <p className='text-m mb-4'>Be the first to know about releases and research news and insights</p>
  </div>

 
 <div>
  <div className="flex items-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="bg-blue-500 hover:bg-blue-600 text-white ml-3 font-bold py-2 px-4 rounded-r-lg">
      Subscribe
    </button>
  </div>
  <p className="text-gray-500 text-sm mt-2">
    We care about your data in our privacy policy.
  </p>
 </div>

</div>
</div>

</div>




<footer className="bg-black text-white px-4 py-8 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">Scholarly</span>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            Support
          </a>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            Privacy
          </a>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            <img
              src="https://img.freepik.com/premium-vector/appstore-icon-printed-paper-appstore-is-online-social-networking-service_773275-3092.jpg?ga=GA1.1.219372836.1696558306&semt=ais_hybrid"
              alt="App Store"
              className="h-8 w-auto"
            />
          </a>
          <a
            href="#"
            className="mr-4 hover:text-gray-400 transition-colors duration-300"
          >
            <img
              src="https://img.freepik.com/premium-photo/chiang-rai-thailand-april-25-2023-3d-render-logo-google-play-store-application-online-store-operating-system-android_640106-1035.jpg?size=626&ext=jpg&ga=GA1.1.219372836.1696558306&semt=ais_hybrid"
              alt="Google Play"
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>

    </div>
  );
}


// Global CSS for the scrollbar
const globalStyles = `
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
  }

  .scrollbar-thin::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export { globalStyles };