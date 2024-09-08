"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ font: [] }],
    ["clean"],
    [{ align: [] }],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const ReactQuillWrapper = dynamic(() => import("react-quill"), { 
  ssr: false,
  loading: () => <p>Loading...</p>
});

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuillWrapper
        theme="snow"
        value={value}
        onChange={onChange}
        className="h-[65vh] mb-6 whitespace-pre-wrap"
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
