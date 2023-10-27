import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Pic.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a modern web and app developer, my focus is squarely on
            harnessing the power of cutting-edge technologies to create dynamic
            and responsive digital solutions. My core proficiency lies in
            utilizing the latest tools and frameworks to craft web applications
            that offer exceptional user experiences. I specialize in leveraging
            technologies such as Next.js 14, TypeScript, PostgreSQL, JavaScript,
            Stripe, and Sanity as the backbone of my projects. This tech stack
            enables me to build high-performance web applications, ensuring
            speed, efficiency, and a seamless user interface.
          </p>
          <p className="py-2 text-gray-600">
            In addition to mastering the modern web stack, I've delved into the
            world of Python, with a particular emphasis on type casting,
            extending my capabilities to both the front-end and back-end realms.
            I've also explored the exciting domain of LLM's Langchain, further
            expanding my knowledge and staying ahead of emerging trends in the
            tech landscape. With a strong foundation in both web and app
            development, I recently completed my graduation degree from NED
            University of Engineering and Technology (UIT). This academic
            background, combined with my practical experience, equips me with a
            well-rounded skill set to tackle the most challenging and innovative
            projects. I am passionate about crafting exceptional digital
            experiences and look forward to bringing my expertise to the
            development of your next-generation web or app project.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            width={350}
            height={50}
            className="rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
