import TextEditor from "@/components/organisms/textEditor/TextEditor";
import React from "react";

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full mt-40'>
      <TextEditor />
    </div>
  );
}
