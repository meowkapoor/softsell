import React from 'react'

function WhyChooseUs() {
  return (
    <section id='why' className="bg-GradWhite py-20 px-6">
          <h2 className="text-5xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Instant Valuation", "Trusted by 500+ Clients", "Transparent Pricing", "Secure Payouts"].map((benefit, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded-2xl shadow-2xl flex flex-col items-center text-center font-medium text-2xl gap-4">
                <img src={`/img/benefit${i+1}.svg`} className='w-auto h-50 mx-auto my-3' alt={benefit} />
                ✅ {benefit}
              </div>
            ))}
          </div>
    </section>
  )
}

export default WhyChooseUs