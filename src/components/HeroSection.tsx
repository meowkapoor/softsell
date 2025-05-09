import React from 'react'
import { WordRotate } from "@/components/ui/word-rotate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-GradBlue to-GradSkyBlue text-white text-center px-6">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 break-normal">Turn Unused Software Licenses Into</h1>
          <WordRotate className='text-7xl md:text-8xl font-bold mb-4' words={["CASH!!", "💸💸💸"]} />
          <p className="text-lg md:text-2xl font-semibold mb-6 max-w-2xl">
            <span className="italic text-shadow-2xs">SoftSell</span> helps you resell your old software licenses safely, quickly, and profitably.
          </p>
          <div>
            <a href="#contact" className="px-6 py-3 text-lg">
            <InteractiveHoverButton className="font-bold">Sell My Licenses</InteractiveHoverButton>
            </a>
          </div>
        </section>
  )
}

export default HeroSection