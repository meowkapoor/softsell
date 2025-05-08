'use client'
import { WordRotate } from "@/components/ui/word-rotate";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useState } from 'react';
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  return (
    <>
      <main className="font-sans bg-GradBlue text-gray-800">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-GradBlue to-GradSkyBlue text-white text-center px-6">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 wrap-normal">Turn Unused Software Licenses Into</h1>
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

        <HowItWorks />
        

        {/* Why Choose Us */}
        <section className="bg-GradWhite py-20 px-6">
          <h2 className="text-5xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Instant Valuation", "Trusted by 500+ Clients", "Transparent Pricing", "Secure Payouts"].map((benefit, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded shadow-2xl text-center font-medium">
                ✅ {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 text-center bg-GradWhite">
          <h2 className="text-5xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow-2xl">
              <p>“Fastest resale experience I’ve had. Super easy and transparent.”</p>
              <p className="mt-2 font-semibold">Jane D., IT Manager, TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded shadow-2xl">
              <p>“Got a better price than I expected. Highly recommend SoftSell.”</p>
              <p className="mt-2 font-semibold">Rahul M., Freelancer</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-GradWhite to-GradSkyBlue">
          <h2 className="text-5xl font-bold text-center mb-10">Get in Touch</h2>
          <form className="max-w-2xl mx-auto grid grid-cols-1 gap-3 bg-white px-5 py-5 rounded-2xl">

            <label className="block font-medium">Enter your name:</label>
            <input type="text" placeholder="Name" className="border p-3 rounded" required />

            <label className="block font-medium">Enter your email:</label>
            <input type="email" placeholder="Email" className="border p-3 rounded" required />

            <label className="block font-medium">Enter the license company:</label>
            <input type="text" placeholder="Company" className="border p-3 rounded" />

            <label className="block font-medium">Enter license type:</label>
            <select className="border p-3 rounded" required>
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Other">Other</option>
            </select>

            <label className="block font-medium">Upload License (PDF, TXT, PNG)</label>
            <input
            type="file"
            accept=".pdf,.txt,.png"
            className="border p-3 rounded w-full"
            required
            />

            <label className="block font-medium">Enter any message</label>
            <textarea placeholder="Message" className="border p-3 rounded" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700">Get My Quote</button>
          </form>
        </section>
      </main>
    </>
  );
}
