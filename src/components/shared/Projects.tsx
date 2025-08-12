'use client';
import React from 'react'
import HyperText from "@/components/magicui/hyper-text";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Image from 'next/image';
import { IconBrandGithub } from '@tabler/icons-react';

const projects = [
  {
    title: "Share Learner",
    description: "A online learning platform where students can share their knowledge.",
    image: "/Screenshot (15).png",
    link: "https://sharelearner.vercel.app/",
    github: "https://sharelearner.vercel.app/"
  },
  {
    title: "Connectify",
    description: "A online learning platform where students can share their knowledge.",
    image: "/Screenshot (18).png",
    link: "https://github.com/dasamritendu619",
    github: "https://connectify-client-steel.vercel.app/about-us"
  },
  {
    title: "Form Validation",
    description: "To ensures that user input is accurate, complete and meets specific requirements before submission.",
    image: "/form.jpg",
    link: "https://github.com/dasamritendu619",
    github: "https://github.com/dasamritendu619"
  },
  {
    title: "Online Calculator",
    description: "Developing a Calculator after learning basic of HTML, CSS, JavaScript to understand the core concept and implement it to make something useful.",
    image: "/calculator.jpg",
    link: "https://github.com/dasamritendu619",
    github: "https://github.com/dasamritendu619"
  }
];

export default function Projects() {
  return (
    <div className='w-full py-8' id='projects'>
      <h1 className='flex justify-center mb-8'>
        <HyperText
          className="text-2xl sm:text-4xl md:text-5xl text-center font-bold text-black dark:text-white"
          text="My Projects"
        />
      </h1>


      <div className='w-hull flex flex-wrap justify-center'>
        {
          projects.map((project, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-3 py-6 min-[500px]:p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="600"
                    width="1000"
                    className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-12">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Visit now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.github}
                    target="__blank"
                    className="px-4 py-2 flex flex-nowrap items-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <IconBrandGithub /><span className='ml-1'>Github</span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
    </div>
  )
}
