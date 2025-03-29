/* eslint-disable react/no-unescaped-entities */
"use client";
import memojiImage from "@/assets/images/memoji-zul.png";
import Image from "next/image";
import ArrowDwon from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="h-[100px] w-[74px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 boder border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-full mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            {/* Empowering Ideas With Technology */}
            Hi, I'm{" "}
            <ReactTyped
              strings={[" Naza Zulfiqi", " Software Engineer"]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg max-w-lg mx-auto">
            My mission is to bring impactful ideas to life through modern,
            scalable, and user-friendly applications.
            {/* Empowering Ideas With Technology to Build Innovative and Scalable
            Solutions. */}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            href={"#projects"}
            style={{ scrollBehavior: "smooth" }}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10"
          >
            <span className="font-semibold">See My Projects</span>
            <ArrowDwon className="size-4" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nazazulfiqi/"}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-600 px-6 h-12 rounded-xl cursor-pointer z-10"
          >
            <motion.span
              className="text-xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
            <span className="font-semibold">Let's Connect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
