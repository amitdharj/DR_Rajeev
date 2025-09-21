import React from 'react';

export default function AutismBookAd() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Video Testimonials Section */}
  <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Left Video */}
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 text-white text-center py-2 text-sm font-bold">
            DR. RAJEEV'S CURE
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop" 
              alt="Doctor consultation"
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 md:px-3 py-1 text-xs md:text-sm rounded">
              ▶ 42:21
            </div>
          </div>
          <div className="p-3">
            <div className="text-sm font-semibold text-gray-800">RASHMI</div>
            <div className="text-xs text-gray-600">Patient Testimonial</div>
          </div>
        </div>

        {/* Right Video */}
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 text-white text-center py-2 text-sm font-bold">
            SUCCESS STORY
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop" 
              alt="Mother with child"
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 md:px-3 py-1 text-xs md:text-sm rounded">
              ▶ 15:43
            </div>
          </div>
          <div className="p-3">
            <div className="text-sm font-semibold text-gray-800">SAACHI CLINIC</div>
            <div className="text-xs text-gray-600">Treatment Success</div>
          </div>
        </div>
      </div>

        {/* Main Book Advertisement */}
  <div className="bg-white rounded-lg shadow-lg px-6 py-8 max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl md:text-6xl font-bold text-red-600 mr-2">1</span>
            <div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">st</span>
              <span className="text-2xl md:text-3xl font-bold text-black">Homeopathic Book In</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-black">India For </span>
            <span className="text-4xl font-bold text-red-600">Autism</span>
          </div>
          <div className="mt-4 text-base md:text-lg font-semibold text-gray-700">
            ACCEPTING & UNDERSTANDING AND<br />
            TREATING THE INNOCENT SOULS MIND
          </div>
        </div>

        {/* Content Section */}
  <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Hindi Quote */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
              "अगर आपका बच्चा आपसे<br />
              बात करते वक्त नज़रें चुराता<br />
              है, और आपकी बातों को<br />
              अनसुना करता है।"
            </div>
            
            <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block">
              <div className="text-sm">Written and</div>
              <div className="text-lg font-bold">DR. RAJEEV KUMAR</div>
              <div className="text-xs">B.H.M.S, M.D (HOM)</div>
            </div>
          </div>

          {/* Right Side - Book Image and CTA */}
          <div className="flex-1 text-center">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop" 
                alt="Autism Book Cover"
                className="mx-auto rounded-lg shadow-lg w-48 sm:w-64 h-60 sm:h-80 object-cover"
              />
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-center">
                HOMEOPATHY<br />
                <span className="text-[10px] sm:text-xs">GET THE SAFE CARE FOR</span><br />
                <span className="text-[10px] sm:text-xs">TREATING AUTISM</span>
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white px-2 py-1 rounded shadow text-xs sm:text-sm font-bold">
                AUTISM BOOK
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              It's Available On Amazon/Flipkart
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-transform duration-200 flex items-center justify-center mx-auto gap-2">
              BUY NOW
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}