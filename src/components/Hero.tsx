import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Trusted by 500+ customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional
              <span className="text-blue-600 block">Cleaning Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your space with our reliable, hygienic, and eco-friendly cleaning solutions. 
              We deliver excellence with every service.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                'Eco-friendly cleaning products',
                'Fully insured and bonded',
                '100% satisfaction guarantee',
                'Flexible scheduling options'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Call Now: 8919769488
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional cleaning service" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">24/7</p>
                <p className="text-sm">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;