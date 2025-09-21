import React from 'react';
import { Play, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function WhyChoose() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image Section */}
           <div className="space-y-6">
            {/* Fun fact label */}
            <div className="text-amber-600 font-medium text-sm uppercase tracking-wide">
              Our Happy Customers
            </div>
            
            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Happy successful Story by, 
              <span className="block text-amber-600">
                THERE OWN WORDS
              </span>
            </h2>
            
            {/* Decorative line */}
            <div className="w-16 h-1 bg-amber-600"></div>
            
            {/* Description paragraphs */}
            <div className="space-y-4 text-2xl text-gray-600 leading-relaxed">
              <p>
                A child diagnosed with Autism showed minimal speech and social interaction.
                with dedicated therapies and homeopathic care, gradual but visible improvements
                emerged. Today, the family celebrates a joyful, communicative child
                and a journey filled with hope.
              </p>
              
            </div>
          </div>
          
          {/* Right Side - Content Section */}
          <div className="relative">
            {/* Main architectural image placeholder */}
            <img src="/rajeev2.webp" alt="image01" className="w-full h-full object-cover rounded-2xl " />
          </div>
         
        </div>

        <div className='bg-gradient-to-br from-red-500 to-red-600 mt-24 rounded-full py-6 px-6'>
          <div className='flex flex-col md:flex-row gap-6 justify-between items-center text-white'>
            <div className='flex items-center gap-4'>
              <Phone className='w-6 h-6 text-white' />
              <div className='text-left'>
                <div className='font-semibold'>Call for Appointment</div>
                <div className='text-sm opacity-90'>+91-9234400006 </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <Mail className='w-6 h-6 text-white' />
              <div className='text-left'>
                <div className='font-semibold'>info@drrajeev.com</div>
                <div className='text-sm opacity-90'>Email us for queries</div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <MapPin className='w-6 h-6 text-white' />
              <div className='text-left'>
                <div className='font-semibold'>Multiple Locations Across India</div>
                <div className='text-sm opacity-90'>Find a clinic near you</div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Scroll to top button
        <div className="fixed bottom-6 right-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber-700 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}