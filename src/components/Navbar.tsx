import React from 'react'

function Navbar() {
  return (
    <header className="bg-GradBlue shadow-sm top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

                <div className="flex-shrink-0">
                    <a href="/">
                        <img src="/img/logo.png" alt="SoftSell logo" className="h-40 w-auto" />
                     </a>
                </div>

            <nav className="hidden md:flex space-x-6 font-medium">
                <a href="#how" className="text-GradWhite hover:text-gray-800 hover:underline mt-2">How It Works</a>
                <a href="#why" className="text-GradWhite hover:text-gray-800 hover:underline mt-2">Why Choose Us</a>
                <a href="#testimonials" className="text-GradWhite hover:text-gray-800 hover:underline mt-2">Testimonials</a>
                <a href="#contact" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">Get a Quote</a>
            </nav>

      {/* (Optional) Hamburger Icon for mobile */}
      {/* You can add a mobile menu toggle here */}
    </div>
  </div>
</header>

  )
}

export default Navbar