import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { UploadIcon,FileCheck2Icon,IndianRupeeIcon } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
    ({ className, children }, ref) => (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-20 md:size-40 items-center justify-center rounded-full border-2 border-blue-600/50 bg-white text-black p-4 shadow-lg font-semibold text-sm md:text-base text-center",
          className
        )}
      >
        {children}
      </div>
    )
  );
  Circle.displayName = "Circle";
  
  export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
  
    return (
      <section id='how' className="py-20 bg-gradient-to-b from-GradSkyBlue to-GradWhite text-center">
        <h2 className="text-5xl font-bold mb-30">How It Works</h2>
  
        <div className="relative flex w-full max-w-4xl mx-auto justify-between px-6" ref={containerRef}>
            <Circle ref={ref1}>
                <UploadIcon className="size-14"/>
                        Upload License
            </Circle>
            <Circle ref={ref2}>
                <FileCheck2Icon className="size-14"/>
                        Upload License
            </Circle>
            <Circle ref={ref3}>
                <IndianRupeeIcon className="size-14"/>
                        Upload License
            </Circle>

          {/* Animated Beams */}
          <AnimatedBeam duration={3} containerRef={containerRef} fromRef={ref1} toRef={ref2} />
          <AnimatedBeam duration={3} containerRef={containerRef} fromRef={ref2} toRef={ref3} />
        </div>
      </section>
    );
  }