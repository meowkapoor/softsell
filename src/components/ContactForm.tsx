import React from 'react'

function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-GradWhite to-GradSkyBlue">
          <h2 className="text-5xl font-bold text-center mb-10">Get in Touch</h2>
          <form className="max-w-2xl mx-auto grid grid-cols-1 gap-3 bg-white px-5 py-5 rounded-2xl shadow-2xl">

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
  )
}

export default ContactForm