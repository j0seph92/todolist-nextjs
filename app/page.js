"use client";
import { useState } from "react";

import React from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    // console.log(title);
    // console.log(desc);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <h2 className="font-bold text-center text-black">No Task Added</h2>
  );
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex justify-between items-center mb-2 relative pl-3 before:content[' '] text-black before:absolute before:hidden md:before:block before:left-0 before:top-0 before:bottom-0 before:h-[3px] before:w-2 before:m-auto before:bg-[#cf69a5] ">
          <h4 className="italic font-bold">{t.title}</h4>
          <h5 className="text-gray-700">{t.desc}</h5>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="px-1 py-2 text-white bg-red-500"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <section>
        <div className="p-10 bg-black">
          <h1 className="text-3xl font-bold text-center text-white">
            To do List
          </h1>
        </div>
        <div className="flex justify-center p-10">
          <form onSubmit={submitHandler}>
            <div className="w-full my-3">
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  autoComplete="given-name"
                  placeholder="Enter Task Here"
                  className="p-4 h-11 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
            <div className="w-full my-3">
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={desc}
                  onChange={(e) => {
                    setdesc(e.target.value);
                  }}
                  autoComplete="given-name"
                  placeholder="Enter Description Here"
                  className="p-4 h-11 block w-full rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              <button
                type="submit"
                name="send"
                className={`bg-[#f5931e]  mt-2 text-white w-auto px-6 h-10 rounded-sm hover:bg-[#fff] border-[1px]  border-[#f5931e] hover:border-[#fff] hover:text-[#13100d] capitalize shadow-md shadow-gray-500`}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
        <hr></hr>
        <div className="p-20 bg-slate-300">
          <ul className="text-white list-item">{renderTask}</ul>
        </div>
      </section>
    </>
  );
};

export default page;
