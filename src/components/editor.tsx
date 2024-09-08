"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import React, { forwardRef } from 'react';

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

const Editor = forwardRef<any, EditorProps>(({ value, onChange }, ref) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="h-[65vh] mb-6 whitespace-pre-wrap"
        modules={modules}
        formats={formats}
        ref={ref as any}
      />
    </div>
  );
});

Editor.displayName = 'Editor';

export default Editor;
