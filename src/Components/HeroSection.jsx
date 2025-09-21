import React, { useState, useEffect } from 'react';
import { Play, MessageCircle, Calendar, MapPin, Phone, Mail, Star } from 'lucide-react';

export default function DrRajeevClinic() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Placeholder images for the gallery
  const galleryImages = [
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1582750433359-12e2f0b7e014?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop'
  ];

  const locations = ['DELHI NCR', 'NOIDA', 'KOLKATA', 'RANCHI', 'PATNA', 'JAGTAULI'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className={`transform transition-all duration-1600 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                  <div className="text-white font-bold text-xl">Dr.</div>
                </div>
                <div>
                  <h1 className="text-2xl bg-gradient-to-bl from-orange-200 to-orange-300 bg-clip-text lg:text-3xl font-bold text-gray-800">
                    Dr. Rajeev's
                    <span className="block text-lg text-blue-600">Family Clinic</span>
                  </h1>
                  <p className="text-sm text-gray-600">Complete Care For your Family</p>
                </div>
              </div>

              {/* Main Title */}
              <div className="text-center lg:text-right">
                <h2 className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  DR. RAJEEV'S HOMOEOPATHIC CLINIC
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-end gap-2 mt-2">
                  {locations.map((location, index) => (
                    <span
                      key={location}
                      className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium transform transition-all duration-500 hover:bg-blue-100 hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leading Network Badge */}
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-3">
          <div className="container mx-auto text-center">
            <h3 className="text-xl lg:text-2xl font-bold animate-pulse">
              ONE OF LEADING HOMOEOPATHIC CLINIC NETWORK IN INDIA
            </h3>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <section className={`py-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index === currentImageIndex ? 'ring-4 ring-blue-400' : ''
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Clinic image ${index + 1}`}
                  className="w-full h-62 md:h-60 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2">
                    <div className="flex items-center text-white text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>Success Story</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className={`py-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
            {/* Autism Query Button */}
            <button className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold text-lg">Autism Query</span>
            </button>

            {/* YouTube Button */}
            <button className="group flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Play className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
              <span className="font-semibold text-lg">YouTube</span>
            </button>

            {/* Appointment Booking Button */}
            <button className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Calendar className="w-6 h-6 transition-transform duration-300 group-hover:bounce" />
              <div className="text-left">
                <div className="font-semibold">APPOINTMENT</div>
                <div className="text-sm opacity-90">BOOKING</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Main Quote Banner */}
      <section className={`py-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="relative z-10 text-center">
              <blockquote className="text-white text-2xl md:text-4xl font-bold leading-relaxed">
                "From struggle to strength — 
                <span className="block mt-2 bg-white text-blue-600 px-6 py-2 rounded-full inline-block transform hover:scale-105 transition-transform duration-300">
                  Successful Journeys With Our Care And Treatment
                </span>
                "
              </blockquote>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <footer className={`py-8 bg-gray-100 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>Call for Appointment</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>info@drrajeev.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>Multiple Locations Across India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}