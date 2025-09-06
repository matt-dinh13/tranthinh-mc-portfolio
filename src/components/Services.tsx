import { motion } from 'framer-motion';
import { services } from '@/lib/data';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            My <span className="font-bold">Services</span>
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From intimate weddings to grand corporate events, I provide professional MC services 
            that make every occasion truly special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-4xl mb-6">{service.icon}</div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1 h-1 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-light mb-4">
              Ready to Make Your Event Unforgettable?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your event and how I can help create magical moments that you and your guests will cherish forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-medium text-lg rounded-full hover:bg-white/90 transition-all duration-300">
                Get a Quote
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all duration-300">
                View My Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
