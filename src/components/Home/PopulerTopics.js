import React from "react";
import {
  FaArtstation,
  FaDatabase,
  FaGit,
  FaHtml5,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";

const PopulerTopics = () => {
  return (
    <div>
      <div className="relative ">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Start Exploring
        </p>
        <h2 className="mb-8  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Populer Topicss Topics To Learn
        </h2>
      </div>
      <div className="bg-gray-100">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"></div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaJava className="text-orange-600 text-xl"></FaJava>
                </div>
                <p className="mb-2 font-bold">Java</p>
                <p className="text-sm leading-5 text-gray-900">
                  Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaPython className="text-blue-600 text-xl"></FaPython>
                </div>
                <p className="mb-2 font-bold">Python</p>
                <p className="text-sm leading-5 text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaArtstation className="text-red-600 text-xl"></FaArtstation>
                </div>
                <p className="mb-2 font-bold">Design</p>
                <p className="text-sm leading-5 text-gray-900">
                  A slice of heaven. O for awesome, this chocka full cuzzie is
                  as rip-off as a cracker.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaDatabase className="text-pink-600 text-xl"></FaDatabase>
                </div>
                <p className="mb-2 font-bold">DataBase</p>
                <p className="text-sm leading-5 text-gray-900">
                  Meanwhile, in behind the bicycle shed, Hercules Morse, as big
                  as a horse.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaReact className="text-sky-600 text-xl"></FaReact>
                </div>
                <p className="mb-2 font-bold">React</p>
                <p className="text-sm leading-5 text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaHtml5 className="text-violet-600 text-xl"></FaHtml5>
                </div>
                <p className="mb-2 font-bold">Html</p>
                <p className="text-sm leading-5 text-gray-900">
                  A business big enough that it could be listed on the NASDAQ
                  goes belly up.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaGit className="text-xl"></FaGit>
                </div>
                <p className="mb-2 font-bold">Git</p>
                <p className="text-sm leading-5 text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down clap of thunder.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <FaNode className="text-green-600 text-xl"></FaNode>
                </div>
                <p className="mb-2 font-bold">Node</p>
                <p className="text-sm leading-5 text-gray-900">
                  Webtwo ipsum orkut reddit meebo skype vimeo jajah spock
                  empressr zimbra, mobly napster.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerTopics;
