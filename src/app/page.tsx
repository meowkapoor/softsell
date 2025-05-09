'use client'

import { useState } from 'react';
import { HowItWorks } from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  return (
      <main className="font-sans bg-GradBlue text-gray-800">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
  );
}
