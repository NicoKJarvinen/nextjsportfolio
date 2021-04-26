import React, { useState } from "react";

export default function Card(props) {
  return (
    <div className="block m-8">
      <div className="bg-white rounded-xl shadow-lg text-gray-600 h-auto w-64 md:w-64">
        <div className="h-64 w-64">
          <img className="rounded-t-xl h-64 w-64" src={props.img} alt="" />
        </div>
        <div className="p-8">
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div className="flex flex-col justify-center space-x-0 px-4 md:space-x-4 pb-6 space-y-4 md:space-y-0 items-center md:flex-row md:justify-between">
          <a href={props.git} target="_blank">
            <button className="flex items-center bg-gray-800 text-white font-bold rounded-lg px-5 py-0 uppercase text-sm hover:bg-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              <span>GitHub</span>
            </button>
          </a>
          <a href={props.link} target="_blank">
            <button className="bg-blue-600 text-white font-bold rounded-lg px-6 py-3 uppercase text-sm hover:bg-blue-900">
              <span>{props.demo}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
