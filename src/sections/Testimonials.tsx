/* eslint-disable react/no-unescaped-entities */
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Iwan Agus Fatahi",
    position: "Senior System Architect @ TREC Digital",
    text: "Naza is a talented and detail-oriented developer. His ability to solve complex problems and deliver high-quality solutions is truly impressive.",
    avatar: memojiAvatar5,
  },
  {
    name: "Rizki Pratama",
    position: "Frontend Lead @ M-Knows Consulting",
    text: "Naza's collaboration and teamwork skills are exceptional. He worked effectively with the team during the internship program, significantly contributing to the success of the Kampus Gratis project in the MBKM V program at PT Menara Indonesia.",
    avatar: memojiAvatar3,
  },
  {
    name: "Muhammad Haikal",
    position: "Mentor @ Skilvul",
    text: "Good job, Naza! Keep up the great work and never stop exploring new opportunities. Keep unlocking your potential. See you at the top!",
    avatar: memojiAvatar1,
  },
  {
    name: "Muthia Solikin",
    position: "Data Analyst @ Prudential Syariah",
    text: "Naza demonstrates a strong analytical mindset and a passion for continuous learning. His dedication to personal and professional growth is truly inspiring.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy People"
          title="What People Say about Me"
          description="Don't just take my word for it. See what people have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6  md:p-8 hover:-rotate-3 transition duration-300 ease-in-out"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
