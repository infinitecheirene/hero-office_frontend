"use client";

import { motion } from "framer-motion";
import {
  Play,
  MapPin,
  Expand,
  Rotate3D,
  MousePointer2,
  Info,
  ArrowRight,
  Building2,
  Users,
  Wifi,
  Coffee,
  Video,
  Shield,
  CheckCircle2,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamic import for the PanoramaViewer to avoid SSR issues
const PanoramaViewer = dynamic(() => import("../../components/PanoramaViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] lg:h-[700px] bg-gray-900 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
        <p className="text-white">Loading 360° Viewer...</p>
      </div>
    </div>
  ),
});

const tourLocations = [
  {
    id: "lobby",
    title: "Main Lobby",
    description: "Professional reception with concierge services",
    features: ["24/7 Front Desk", "Bilingual Staff", "Secure Access"],
  },
  {
    id: "office-premium",
    title: "Premium Office Suite",
    description: "Private office with panoramic city views",
    features: ["Ergonomic Furniture", "High-Speed Internet", "City View"],
  },
  {
    id: "meeting-large",
    title: "Executive Boardroom",
    description: "Conference room for up to 20 people",
    features: ["4K Video Wall", "Video Conferencing", "Whiteboard Wall"],
  },
  {
    id: "lounge",
    title: "Business Lounge",
    description: "Relaxing space for informal meetings",
    features: ["Premium Coffee", "Comfortable Seating", "Newspapers"],
  },
  {
    id: "cafe",
    title: "Cafe Area",
    description: "Modern cafeteria with daily meal options",
    features: ["Hot Meals", "30-Seat Capacity", "24/7 Vending"],
  },
];

const features = [
  {
    icon: Rotate3D,
    title: "360° View",
    description: "Drag to look around the entire space",
  },
  {
    icon: MousePointer2,
    title: "Interactive Hotspots",
    description: "Click highlighted areas for details",
  },
  {
    icon: Expand,
    title: "Fullscreen Mode",
    description: "Immersive full-screen experience",
  },
  {
    icon: MapPin,
    title: "Multi-Room Tour",
    description: "Navigate between different spaces",
  },
];

const amenities = [
  { icon: Wifi, title: "High-Speed Internet", description: "Fiber optic connection" },
  { icon: Video, title: "Video Conferencing", description: "4K displays & cameras" },
  { icon: Coffee, title: "Coffee & Refreshments", description: "Complimentary bar" },
  { icon: Shield, title: "24/7 Security", description: "CCTV & access control" },
  { icon: Users, title: "Meeting Rooms", description: "Various sizes available" },
  { icon: Building2, title: "Prime Location", description: "Ayala Avenue, Makati" },
];

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <Rotate3D className="w-4 h-4" />
              360° Interactive Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Virtual Tour
            </h1>
            <p className="text-xl text-gray-300">
              Explore our facilities in immersive 360°. Drag to look around,
              click hotspots for information, and navigate between rooms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main 360° Viewer */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PanoramaViewer />
          </motion.div>

          {/* Quick Instructions */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: MousePointer2, text: "Drag to look around" },
              { icon: MapPin, text: "Click hotspots for info" },
              { icon: Expand, text: "Fullscreen mode" },
              { icon: Rotate3D, text: "Auto-rotation" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3">
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Spaces
            </h2>
            <p className="text-lg text-gray-600">
              Navigate through different areas of our facility
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-[#C5D2EC]/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center group-hover:bg-[#1B3A8C] transition-colors">
                    <Play className="w-5 h-5 text-[#1B3A8C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{location.title}</h3>
                    <p className="text-sm text-gray-600">{location.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {location.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a productive workday
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-[#1B3A8C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tour Features
            </h2>
            <p className="text-lg text-gray-600">
              Designed for the best virtual viewing experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-[#C5D2EC]/30 transition-colors"
              >
                <div className="w-14 h-14 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#1B3A8C]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Navigate</h2>
            <p className="text-gray-400">
              Get the most out of your virtual tour experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Drag to Look Around",
                description: "Click and drag with your mouse (or touch and drag on mobile) to view the entire 360° space.",
              },
              {
                step: "2",
                title: "Click Hotspots",
                description: "Look for pulsing white dots and blue arrows. Click them to see details or navigate to other rooms.",
              },
              {
                step: "3",
                title: "Use Controls",
                description: "Use the bottom navigation to switch between rooms. Click the compass for auto-rotation.",
              },
              {
                step: "4",
                title: "Fullscreen Mode",
                description: "Click the expand button for an immersive full-screen experience of our facilities.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
                <div className="w-10 h-10 bg-[#1B3A8C] rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B3A8C] to-[#3B5EA6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See It in Person?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a physical tour and experience our facilities firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B3A8C] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Physical Tour
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
