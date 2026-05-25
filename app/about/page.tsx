"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Clock,
  Shield,
  MapPin,
  Navigation,
  Plane,
  Landmark,
  Store,
  Trees,
  Utensils,
  Train,
  ExternalLink,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our clients' success is our top priority.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We maintain international standards in our facilities and services.",
  },
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "500+", label: "Companies Served" },
  { number: "3", label: "Office Locations" },
  { number: "50+", label: "Team Members" },
];

const locations = [
  {
    name: "TOWER6789 MAKATI",
    address: "23F TOWER6789, Ayala Avenue 6789, Makati City 1209, Manila, Philippines",
    mapUrl: "https://www.google.com/maps/place/Leopalace21+Philippines+Inc./@14.5568556,121.0168084,16z",
  },
  {
    name: "INSULAR LIFE BUILDING MAKATI",
    address: "11th Floor, Insular Life Building, 6781 Ayala Avenue corner Paseo de Roxas Avenue, Makati City, Metro Manila, Philippines",
    mapUrl: "https://www.google.com/maps/place/Insular+Life+Building,+Ayala+Ave,+Makati,+Metro+Manila",
  },
];

const nearbyLandmarks = [
  {
    icon: Plane,
    name: "Ninoy Aquino International Airport (NAIA)",
    description: "International airport straddling Pasay City and Parañaque City in the Manila metropolitan area",
    distance: "About 6,700m from the office",
  },
  {
    icon: Landmark,
    name: "Embassy of Japan in the Philippines",
    description: "Located in Pasay City, used to apply for visas and obtain various certificates. Safety information sent by email with residence report",
    distance: "About 5,800m from the office",
  },
  {
    icon: Building2,
    name: "AIA Tower",
    description: "Office building housing JETRO (Japan External Trade Organization) and many multinational companies. Exclusive business club on rooftop",
    distance: "About 230m from the office",
  },
  {
    icon: Building2,
    name: "Trident Tower",
    description: "Houses Manila Japanese Association, Chamber of Commerce office, and Manila Japanese Association Clinic with Japanese doctor",
    distance: "About 750m from the office",
  },
  {
    icon: Store,
    name: "Greenbelt",
    description: "Huge shopping mall with first-class brand shops and popular restaurants. Popular spot for businessmen at lunch and dinner",
    distance: "About 1,000m from the office",
  },
  {
    icon: Trees,
    name: "Ayala Triangle Park",
    description: "Large park in the center of Makati CBD with popular restaurants featuring open terrace seats. Many runners jog early morning and evening",
    distance: "About 350m from the office",
  },
  {
    icon: Utensils,
    name: "Little Tokyo",
    description: "The only Japanese town in Metro Manila with Japanese restaurants and grocery stores. Enjoy Japanese food at reasonable prices",
    distance: "About 1,000m from the office",
  },
  {
    icon: Train,
    name: "Ayala Railway Station (MRT)",
    description: "Ayala Station on Manila Metrorail. Directly connected to shopping building. Main route for buses",
    distance: "About 1,500m from the office",
  },
];

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Hero Serviced Office was established in Manila to serve Japanese businesses.",
  },
  {
    year: "2012",
    title: "Expansion to Makati CBD",
    description: "Opened our flagship office in Tower 6789 on Ayala Avenue.",
  },
  {
    year: "2015",
    title: "Virtual Office Launch",
    description: "Introduced virtual office services for remote businesses.",
  },
  {
    year: "2018",
    title: "Service Enhancement",
    description: "Added 24/7 support and enhanced security systems.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Launched virtual tour and online reservation system.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About HERO Serviced Office
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner for business expansion into the Philippines since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Gateway to Philippine Business Success
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  HERO Serviced Office, Inc. has been at the forefront of providing
                  premium serviced office solutions in Manila since 2009. We specialize
                  in supporting Japanese companies expanding their operations into the
                  Philippines market.
                </p>
                <p>
                  Located in the prestigious Tower 6789 along Ayala Avenue in Makati
                  City, our offices offer the perfect blend of strategic location and
                  world-class facilities. We understand the unique challenges faced by
                  international businesses and provide comprehensive support to ensure
                  your success.
                </p>
                <p>
                  Our team of bilingual professionals, fluent in both Japanese and
                  English, ensures seamless communication and operations for your
                  business in the Philippines.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#C5D2EC] to-[#8FA8D6] rounded-2xl flex items-center justify-center">
                <Building2 className="w-32 h-32 text-[#1B3A8C]/20" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1B3A8C] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-[#C5D2EC]/30 rounded-2xl"
            >
              <div className="w-14 h-14 bg-[#1B3A8C] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading serviced office provider in the Philippines,
                empowering international businesses to thrive in the Asian market
                through world-class facilities and exceptional support services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#8FA8D6]/20 rounded-2xl"
            >
              <div className="w-14 h-14 bg-[#3B5EA6] rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide flexible, professional office solutions that enable
                businesses to focus on growth while we handle the operational
                complexities. We bridge cultural and business gaps for Japanese
                companies entering the Philippine market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C5D2EC] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#1B3A8C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Map & Surrounding Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5D2EC] rounded-full text-sm text-[#1B3A8C] mb-6">
              <MapPin className="w-4 h-4" />
              Prime Makati CBD Location
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access Map & Surrounding Environment
            </h2>
            <p className="text-lg text-gray-600">
              Conveniently located in the heart of Makati&apos;s business district
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1B3A8C] rounded-xl flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{location.address}</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#1B3A8C] text-[#1B3A8C] rounded-xl font-semibold hover:bg-[#C5D2EC]/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View on Google Maps
                </a>
              </motion.div>
            ))}
          </div>

          {/* Surrounding Environment */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Surrounding Environment
            </h3>
            <p className="text-gray-600">
              Key landmarks and facilities near our offices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyLandmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-[#C5D2EC]/30 transition-colors"
              >
                <landmark.icon className="w-8 h-8 text-[#1B3A8C] mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{landmark.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{landmark.description}</p>
                <div className="flex items-center gap-1 text-[#1B3A8C] text-sm font-medium">
                  <Navigation className="w-4 h-4" />
                  {landmark.distance}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-lg text-gray-400">
              We understand the unique needs of international businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Clock className="w-10 h-10 text-[#5C7ABF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Japanese Business Hours</h3>
              <p className="text-gray-400">
                We align our operations with Japanese business hours for seamless coordination.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Users className="w-10 h-10 text-[#5C7ABF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bilingual Support</h3>
              <p className="text-gray-400">
                Our team speaks both Japanese and English for effective communication.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Shield className="w-10 h-10 text-[#5C7ABF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Privacy</h3>
              <p className="text-gray-400">
                Secure facilities with strict confidentiality protocols for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}