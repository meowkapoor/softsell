import React from 'react'

function Testimonials() {
  return (
    <section id='testimonials' className="py-20 px-6 text-center bg-GradWhite">
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
  )
}

export default Testimonials