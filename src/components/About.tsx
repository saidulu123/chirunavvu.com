import React from 'react';
import { Target, Eye, Heart, Shield, Leaf, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We place our clients\' needs at the heart of everything we do.'
    },
    {
      icon: Shield,
      title: 'Quality & Excellence',
      description: 'We uphold the highest standards in service delivery.'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We adopt eco-friendly practices for a greener future.'
    },
    {
      icon: Heart,
      title: 'Care & Respect',
      description: 'We treat every space as our own, with respect and attention to detail.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace modern tools and methods to provide smarter cleaning solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About CleanPro Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional cleaning solutions that transform spaces into healthier, 
            happier environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To deliver reliable, hygienic, and eco-friendly cleaning solutions that enhance the comfort, 
              health, and productivity of homes and workplaces. We are committed to exceeding customer 
              expectations with professionalism, transparency, and care.
            </p>
            
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the most trusted and preferred cleaning services provider, recognized for transforming 
              spaces into cleaner, healthier, and happier environments across communities and businesses.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Professional cleaning team" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;