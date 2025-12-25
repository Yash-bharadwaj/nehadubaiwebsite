"use client";

import { useScroll, useTransform } from "motion/react";

import { useRef } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({

  images,

  className,

}: {

  images: string[];

  className?: string;

}) => {

  const gridRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({

    container: gridRef, // remove this if your container is not fixed height

    offset: ["start start", "end start"], // remove this if your container is not fixed height

  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);

  const secondPart = images.slice(third, 2 * third);

  const thirdPart = images.slice(2 * third);

  return (

    <div

      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}

      ref={gridRef}

    >

      <div

        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10"

      >

        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8">

          {firstPart.map((el, idx) => (

            <motion.div

              style={{ y: translateFirst }} // Apply the translateY motion value here

              key={"grid-1" + idx}

              className="group"

            >

              <img

                src={el}

                className="h-64 sm:h-72 md:h-80 lg:h-96 w-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] !m-0 !p-0 bg-stone-100 dark:bg-stone-900"

                height="400"

                width="400"

                alt="Celebrity hosted by Neha Dixit"

              />

            </motion.div>

          ))}

        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8">

          {secondPart.map((el, idx) => (

            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx} className="group">

              <img

                src={el}

                className="h-64 sm:h-72 md:h-80 lg:h-96 w-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] !m-0 !p-0 bg-stone-100 dark:bg-stone-900"

                height="400"

                width="400"

                alt="Celebrity hosted by Neha Dixit"

              />

            </motion.div>

          ))}

        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8">

          {thirdPart.map((el, idx) => (

            <motion.div style={{ y: translateThird }} key={"grid-3" + idx} className="group">

              <img

                src={el}

                className="h-64 sm:h-72 md:h-80 lg:h-96 w-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] !m-0 !p-0 bg-stone-100 dark:bg-stone-900"

                height="400"

                width="400"

                alt="Celebrity hosted by Neha Dixit"

              />

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );

};

