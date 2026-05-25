"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Users,
  Headset,
  ArrowRight,
  CheckCircle2,
  Play,
  Star,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Excellent Location",
    description: "Conveniently located along Ayala Avenue, the central business district of Makati City.",
  },
  {
    icon: Users,
    title: "Full Support System",
    description: "Japanese-speaking staff ready to assist with all your business needs and concerns.",
  },
  {
    icon: Building2,
    title: "Comfortable Office Space",
    description: "Ample shared space and well-equipped offices to help start your business.",
  },
  {
    icon: Headset,
    title: "Professional Support",
    description: "Comprehensive business support for Japanese companies operating in the Philippines.",
  },
];

const services = [
  {
    title: "Serviced Offices",
    description: "Fully furnished private offices with modern amenities and flexible lease terms.",
    image: "/office-1.jpg",
    price: "From ₱25,000/month",
  },
  {
    title: "Virtual Offices",
    description: "Professional business address and call handling services for remote businesses.",
    image: "/virtual-office.jpg",
    price: "From ₱8,000/month",
  },
  {
    title: "Conference Rooms",
    description: "State-of-the-art meeting rooms equipped with video conferencing capabilities.",
    image: "/conference.jpg",
    price: "From ₱1,500/hour",
  },
];

const testimonials = [
  {
    name: "Takeshi Yamamoto",
    company: "TechStart Japan Co.",
    content: "Hero Serviced Office made our expansion to the Philippines seamless. The Japanese-speaking staff is incredibly helpful.",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    company: "Global Trade Solutions",
    content: "The location on Ayala Avenue is perfect for our business. Professional environment with excellent facilities.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Gateway to Business Success in the{" "}
                <span className="text-[#8FA8D6]">Philippines</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Premium serviced offices in the heart of Makati City. Perfect for
                Japanese companies expanding into the Philippines market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/virtual-tour"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B3A8C] rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Take Virtual Tour
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3B5EA6] text-white rounded-full font-semibold hover:bg-[#5C7ABF] transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-gray-400">Companies Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1B3A8C]/30 to-[#3B5EA6]/30 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-white/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    Tower 6789, Ayala Avenue, Makati City
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-[#F5F5F3] rounded-2xl hover:bg-[#C5D2EC]/30 transition-colors"
              >
                <div className="w-14 h-14 bg-[#1B3A8C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Flexible office solutions tailored to your business needs
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#1B3A8C] font-semibold hover:text-[#3B5EA6]"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-[#C5D2EC]/50 to-[#8FA8D6]/30 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-[#1B3A8C]/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1B3A8C] font-semibold">
                      {service.price}
                    </span>
                    <Link
                      href="/reservation"
                      className="text-sm font-medium text-gray-900 hover:text-[#1B3A8C] transition-colors"
                    >
                      Reserve Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our offices come fully equipped with modern facilities and amenities
                to ensure your business operates smoothly from day one.
              </p>
              <ul className="space-y-4">
                {[
                  "High-speed internet and WiFi connectivity",
                  "24/7 security and access control",
                  "Professional reception and mail handling",
                  "Meeting rooms with video conferencing",
                  "Cafe and lounge areas",
                  "Japanese-speaking support staff",
                  "Printing and copying facilities",
                  "Cleaning and maintenance services",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1B3A8C] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#C5D2EC]/30 to-[#8FA8D6]/20 rounded-2xl flex items-center justify-center">
                <Building2 className="w-48 h-48 text-[#1B3A8C]/10" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#1B3A8C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ready to Use</div>
                    <div className="text-sm text-gray-600">Move in immediately</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400">
              Trusted by Japanese companies expanding into the Philippines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#8FA8D6] fill-[#8FA8D6]"
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B3A8C] to-[#3B5EA6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Business in the Philippines?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a personalized tour and discover the perfect office
            solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B3A8C] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Make a Reservation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
