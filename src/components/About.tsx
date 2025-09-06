import { motion } from 'framer-motion';
import { Users, Globe, Award, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Events Hosted' },
    { icon: Globe, value: '2', label: 'Languages' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Meet <span className="font-bold">Tran Thinh</span>
              </h2>
              <div className="w-16 h-px bg-black mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over a decade of experience as a Master of Ceremonies, I specialize in creating 
                unforgettable moments for weddings, corporate events, and cultural celebrations across Vietnam.
              </p>
              
              <p>
                Born and raised in Hue, I understand the rich cultural heritage of Vietnam while being 
                fluent in both Vietnamese and English. This unique combination allows me to serve 
                international couples, corporate clients, and local families with equal expertise.
              </p>
              
              <p>
                My approach is personal, professional, and passionate. I believe every event tells a story, 
                and my role is to ensure that story unfolds beautifully, creating memories that last a lifetime.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">TT</span>
                  </div>
                  <p className="text-gray-600 text-lg">Professional Headshot</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-light text-center text-gray-900 mb-12">
            What Makes Me Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Bilingual Excellence</h4>
              <p className="text-gray-600">
                Seamlessly switching between Vietnamese and English to ensure every guest feels included and understood.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎭</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Cultural Sensitivity</h4>
              <p className="text-gray-600">
                Deep understanding of Vietnamese traditions and international customs for authentic celebrations.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Personal Touch</h4>
              <p className="text-gray-600">
                Every event is unique. I take time to understand your vision and bring it to life with passion and precision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
