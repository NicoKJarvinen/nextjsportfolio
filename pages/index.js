import React, { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justfy-center items-center">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center w-4/6 mt-4 mb-16 md:mt-24 lg:mt-12">
        <div className="">
          <h1 className="mt-24 text-left text-gray-900 text-5xl my-6 font-semibold sm:text-4xl lg:text-7xl">
            Second year
            <span className="text-blue-600"> software</span>
            <br />
            engineering student.
          </h1>
          <p className="text-gray-500">Web development is my passion.</p>
          <a href="#contact">
            <button className="mt-8 bg-blue-600 rounded-lg p-4 shadow-md text-white hover:bg-blue-900 rounded p-4 shadow-md text-white focus:rounded p-4 text-white">
              Contact me <span>&rarr;</span>
            </button>
          </a>
        </div>
        <div className=" items-center mt-32 ml-12 hidden md:flex">
          <img className="" src="/static/images/profileDraw.svg" alt="/" />
        </div>
      </div>

      <div id="about" className="mt-44 mb-12"></div>

      <div className="flex flex-col space-x-4 mt-32 md:my-0 sm:flex-row md:flex-row md:justify-between sm:justify-center w-4/6">
        <div className="sm:w-1/2 xl:w-1/2">
          <h1 className="max-w-2xl text-5xl lg: md:text-6xl font-semibold max-w-xs mt-12">
            About me
          </h1>
          <img
            className="mt-16 w-11/12"
            src="/static/images/aboutDraw.svg"
            alt="/"
          />
        </div>

        <div className="sm:w-1/2 xl:w-1/2">
          <div>
            <p className="mt-12 leading-relaxed">
              {" "}
              <span className="text-xl"> Hi!</span>
            </p>
            <p className="mt-4 leading-relaxed">
              My name is <span className="font-bold">Nico Järvinen</span> and
              I'm a second-year Software development student at Metropolia UAS.
              Originally I'm from Kotka but since then I have settled down to
              Espoo. My passion for programming and machines started when I was
              very young.
            </p>
            <p className="mt-4 leading-relaxed">
              Ever since my family got us our first computer I have been
              captivated by them. When I first learned about coding it was in my
              last studies through Taitaja competitions. We were introduced to
              embedded systems and C. This is when I got really sucked in and
              would do crazy hours to get better, almost totaling fourteen hours
              a day. After that, I would get on with my conscription where I
              decided that programming is the road for me. I got accepted by
              Metropolia and started my studies.
            </p>
            <p className="mt-4 leading-relaxed">
              In my studies, I have been able to do cool projects and hone my
              learning skills. On the side, I got into tutoring and carried on
              with it making me now the Head tutor of our campus. People I have
              met through this journey have been amazing and it would have been
              impossible to get here without them.
            </p>
          </div>
        </div>
      </div>

      <div id="work" className="mt-24 w-4/6">
        <div className="m-auto text-5xl mt-24 font-semibold">
          <h1 className="max-w-2xl text-5xl lg: md:text-6xl font-semibold max-w-xs mt-12">
            My Projects
          </h1>
        </div>
        <div className="mt-12 flex flex-row flex-wrap justify-center">
          <Card
            title="Memoable"
            text="Agile JavaFx project"
            git="https://gitlab.metropolia.fi/nicoja/ohjelmistotuotantoprojekti-1"
            link=""
            demo="about"
            img="/static/images/memoable.png"
          ></Card>
          <Card
            title="Recar"
            text="Web app with MERN stack"
            git="https://github.com/NicoKJarvinen/webkehitysprojekti"
            link="https://recar.netlify.app/"
            demo="demo"
            img="/static/images/recarLogo.png"
          ></Card>
          <Card
            title="Distrobat"
            text="Endless fighting arena game"
            git="https://gitlab.metropolia.fi/nicoja/pelikehitys-projekti"
            link="https://gitlab.metropolia.fi/nicoja/pelikehitys-projekti"
            demo="about"
            img="/static/images/distrobatLogo.png"
          ></Card>
          <Card
            title="Waterpie"
            text="Android project for watertracking"
            git="https://gitlab.metropolia.fi/nicoja/waterpie-vedenjuontiappi"
            link="https://gitlab.metropolia.fi/nicoja/waterpie-vedenjuontiappi"
            demo="about"
            img="/static/images/waterpieLogo.png"
          ></Card>
          <Card
            title="Travel reviews"
            text="Web application with NodeJS backend"
            git="https://gitlab.metropolia.fi/nicoja/webtekniikat-projekti"
            link="https://webtekniikka-projekti.herokuapp.com"
            demo="demo"
            img="/static/images/travelLogo.png"
          ></Card>
        </div>
      </div>

      <div id="contact" className="mb-4"></div>

      <div className="flex flex-col justify-between md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-blue-600 w-full max-w-4xl p-8 my-24 rounded-xl shadow-lg text-white">
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact me</h1>
            <p className="pt-2 text-blue-100 text-md">
              Feel free to contact me in any matter.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className=" inline-flex space-x-2 items-center">
              <p className="text-blue-100 text-md">
                <span className="text-blue-300 text-md"> Phone number: </span>
                (+358) 442026803
              </p>
            </div>
            <div>
              <p className="text-blue-100 text-md">
                <span className="text-blue-300 text-md">Email:</span>{" "}
                nico.jarvinen2@metropolia.fi
              </p>
            </div>
            <div>
              <p className="text-blue-100 text-md">
                <span className="text-blue-300 text-md">Located:</span> Espoo,
                Finland
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://drive.google.com/file/d/1FsDx61lNfs1yDRIrsChPY-2deO-2vTfU/view?usp=sharing"
              target="_blank"
            >
              <button className="inline-block self-end bg-blue-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-blue-900">
                Download My CV
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="flex flex-col space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="ring-1
                  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                  focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block self-end bg-blue-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-blue-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between w-full shadow-lg bg-blue-600 text-gray-100">
        <div className="ml-4 py-4">
          <p>Copyright &copy; 2021 Nico Järvinen</p>
        </div>
        <div className="mr-4 py-4">
          <a href="#contact">
            <p className="">Contact me</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
