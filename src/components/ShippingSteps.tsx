"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/typography.module.css";

const steps = [
  {
    number: "01",
    h3: "Create Your Shipment",
    p: "Enter your shipment details in minutes. Where it's going, how fast it needs to get there, and what matters most.",
    image: "/create.png",
    textAlign: "right" as const,
    reverse: false,
  },
  {
    number: "02",
    h3: "We Take Over",
    p: "From pickup to handoffs, we manage every movement across air, sea, or road — with verified partners only.",
    image: "/take-over.png",
    textAlign: "left" as const,
    reverse: true,
  },
  {
    number: "03",
    h3: "Track Everything",
    p: "See your shipment in real time. Live updates, clear statuses, and instant alerts when anything changes.",
    image: "/track.png",
    textAlign: "right" as const,
    reverse: false,
  },
  {
    number: "04",
    h3: "Delivered, Accounted For",
    p: "Your cargo arrives on time, intact, and fully documented — with proof, not promises.",
    image: "/delivered.png",
    textAlign: "left" as const,
    reverse: true,
  },
];

export default function ShippingSteps() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el) => {
      if (!el) return;
      const img = el.querySelector("[data-step-image]") as HTMLElement;
      if (!img) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            img.classList.add("in-view");
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative flex flex-col w-full mt-12 px-6 lg:max-w-4xl lg:mx-auto">
  
  {/* Single continuous vertical line — desktop only */}
  <div className="tapered-line hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full" />

  {steps.map((step, index) => (
    <div
      key={index}
      ref={(el) => { itemRefs.current[index] = el; }}
      className={`flex flex-col items-center gap-0 lg:flex-row lg:items-stretch lg:gap-0 ${
        step.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Box — no more border */}
      <div
        className={`relative flex flex-col gap-3 lg:w-1/2 lg:py-10 ${
          step.textAlign === "right"
            ? "items-center lg:items-end lg:pr-10"
            : "items-center lg:items-start lg:pl-10"
        }`}
      >
            {/* Number — desktop only */}
            <span
              className={`hidden lg:block absolute -top-8 font-urbanist font-bold text-[120px] text-black/5 leading-none select-none ${
                step.textAlign === "right" ? "right-0" : "left-0"
              }`}
            >
              {step.number}
            </span>

            <h3
              className={`font-inter font-semibold text-black relative z-10 lg:mt-3 text-center ${
                step.textAlign === "right" ? "lg:text-right" : "lg:text-left"
              } ${styles.stepHeading}`}
            >
              {step.h3}
            </h3>
            <p
              className={`font-inter font-normal text-text-subtle relative z-10 text-center max-w-sm ${
                step.textAlign === "right" ? "lg:text-right" : "lg:text-left"
              } ${styles.stepText}`}
            >
              {step.p}
            </p>
          </div>

          {/* Image */}
          <div data-step-image className="lg:w-1/2 flex justify-center lg:px-10">
            <Image
              src={step.image}
              alt={step.h3}
              width={322}
              height={271}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}