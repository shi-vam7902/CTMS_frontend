import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
        <div>
          <h1 className="text-4xl font-semibold text-center my-7 text-blue-600">
            About Me
          </h1>
          <div className="text-md text-gray-700 flex flex-col gap-6">
            <p>
              Hello! I'm Shivam Shah, a passionate software developer with a
              keen interest in creating dynamic and scalable web applications.
              With a solid foundation in backend development and a growing
              expertise in frontend technologies, I enjoy bringing innovative
              ideas to life through code.
            </p>
            <p>
              My journey into the world of programming started with a curiosity
              for understanding how things work behind the scenes on the
              internet. This curiosity quickly turned into a passion, and I have
              since dedicated myself to mastering the art of coding. I am
              proficient in various technologies including Node.js, Express,
              MongoDB, and React.
            </p>
            <p>
              I am constantly seeking to improve my skills and keep up with the
              latest trends in the tech industry. I believe in continuous
              learning and the power of collaboration. When I am not coding, you
              can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer
              community.
            </p>
            <p>
              Feel free to check out my projects and contributions on my{" "}
              <a
                href="https://github.com/shi-vam7902"
                className="text-blue-500 underline"
              >
                GitHub profile
              </a>
              . I am always open to discussing new ideas, collaborations, or any
              interesting opportunities. Let's connect and create something
              amazing together!
            </p>
            <p className="font-semibold text-gray-900">
              Contact Me: shivamshah.glsbca20@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
