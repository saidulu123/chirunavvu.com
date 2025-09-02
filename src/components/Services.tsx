import React from 'react';
import { Home, Building2, Sparkles, Car, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning.',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Kitchen & Bathroom Deep Clean', 'Dusting & Vacuuming', 'Floor Mopping & Sanitizing']
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a productive and healthy work environment.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Office Spaces', 'Retail Stores', 'Medical Facilities']
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that reaches every corner, perfect for seasonal cleaning or special occasions.',
      image: 'https://res.cloudinary.com/dk3zwqnsq/image/upload/v1756795718/deep_cleaning_rachpi.jpg',
      features: ['Detailed Surface Cleaning', 'Appliance Interior Cleaning', 'Grout & Tile Restoration']
    },
    {
  icon: Car,
  title: 'Post-Construction Cleanup',
  description: 'Specialized cleaning for newly constructed or renovated spaces, removing dust, debris, and construction residue.',
  image: 'https://res.cloudinary.com/dk3zwqnsq/image/upload/v1756795718/post_construction_lunuiz.jpg',  // ✅ correct
  features: ['Dust & Debris Removal', 'Window Cleaning', 'Final Touch-ups']
}
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to meet your specific needs with 
            professional excellence and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;