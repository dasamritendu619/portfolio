import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "B.Tech in CSE",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg font-normal mb-8">
            I have completed my B.Tech Degree in Computer Science & Engineering from College of Engineering & Management, Kolaghat under MAKAUT, WB in 2025.
            <br />
            I got 8.19 CGPA in my B.Tech Degree.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
      title: "Higher Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs xl:text-lg  md:text-sm font-normal mb-8">
            I have completed my Higher Secondary from Tamluk Hamilton High School in 2021 under WBCHSE.
            <br />
            I got 88.6% in my Higher Secondary.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
    {
      title: "Secondary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm xl:text-lg  font-normal mb-4">
            I have completed my Secondary from Tamluk Hamilton High School in 2019 under WBBSE.
            <br />
            I got 88.46% in my Secondary.
          </p>
          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },

  ];
  return (
    <div className="w-full" id="education">
      <Timeline data={data} />
    </div>
  );
}
