"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users,
  Briefcase,
  MapPin,
  Phone,
  Wifi,
  Coffee,
  Printer,
  Clock,
  CheckCircle2,
  ArrowRight,
  Mail,
  Car,
  Snowflake,
  FileText,
  BadgeCheck,
  DoorOpen,
  Shield,
  Globe,
} from "lucide-react";

const officeTypes = [
  {
    id: "private-room",
    name: "Private Room Space",
    icon: Building2,
    description: "Fully equipped private offices for your team",
    details: [
      "49 private rooms available",
      "Accommodates up to 17 people",
      "Complete with desks, chairs, cabinets",
      "Internet access included",
    ],
    note: "Prices vary depending on layout. Initial costs include contract fee, security deposit, first month usage fee, common service fee, security card fee, and tax.",
  },
  {
    id: "shared-office",
    name: "Shared Office",
    icon: Users,
    description: "Flexible booth-type desks for individuals",
    details: [
      "6 booth-type desks available",
      "Single person workstations",
      "Desks, chairs, and Wi-Fi included",
      "Perfect for freelancers and remote workers",
    ],
    note: "Please contact us for pricing details.",
  },
  {
    id: "coworking",
    name: "Co-Working Space",
    icon: Coffee,
    description: "Collaborative space in cafe and lounge areas",
    details: [
      "Work in cafe area and lounge",
      "Share space with other tenants",
      "Desks, chairs, and Wi-Fi provided",
      "Network with other professionals",
    ],
    note: "Please contact us for pricing details.",
  },
  {
    id: "virtual-office",
    name: "Virtual Office",
    icon: Briefcase,
    description: "Prime Makati address for corporate registration",
    details: [
      "Makati City address for registration",
      "Prime location in business district",
      "Mail forwarding service included",
      "Professional business address",
    ],
    note: "Initial costs include contract fee, security deposit, first month usage fee, common service fee, security card fee, and tax.",
  },
];

const facilities = [
  {
    icon: DoorOpen,
    title: "Reception",
    description: "Japanese-speaking staff available weekdays 9:00-18:00",
  },
  {
    icon: Users,
    title: "Meeting Space",
    description: "2 shared meeting rooms for up to 10 people (paid, weekdays 9:00-18:00)",
  },
  {
    icon: Coffee,
    title: "Cafe Area",
    description: "Spacious area for casual meetings. Available 24/7, 365 days",
  },
  {
    icon: Printer,
    title: "MFP Space",
    description: "Multifunction machines with copy, print, and scan functions",
  },
];

const amenities = [
  { icon: Clock, title: "24/7 Access", description: "Card key lock system for complete security" },
  { icon: Wifi, title: "Wired LAN", description: "Major Japanese company line, same speed as Japan" },
  { icon: Snowflake, title: "Air Conditioning", description: "Operating weekdays 8:00-20:00" },
  { icon: Phone, title: "Telephone Line", description: "Fixed phone line for fixed monthly payment" },
  { icon: Mail, title: "Mail Forwarding", description: "Mail forwarding for virtual office users" },
  { icon: Car, title: "Parking", description: "Parking available at TOWER6789" },
  { icon: Coffee, title: "Unlimited Coffee", description: "Free coffee and mineral water in cafe area" },
  { icon: FileText, title: "Fixtures Included", description: "Desks, chairs, cabinets all provided" },
];

const highlights = [
  { icon: Building2, title: "23rd Floor", description: "Premium location in Tower 6789" },
  { icon: Shield, title: "PEZA Certified", description: "Tax incentives for foreign investors" },
  { icon: Clock, title: "Weekday A/C", description: "Air conditioning 8:00-20:00 weekdays" },
];

export default function Tower6789Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B3A8C] via-[#3B5EA6] to-[#1A1A2E] text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5C7ABF]/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <BadgeCheck className="w-4 h-4" />
              PEZA Certified Building
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tower 6789 Makati
            </h1>
            <p className="text-xl text-gray-300">
              23rd Floor, 6789 Ayala Avenue, Makati City
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#1B3A8C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Base Overview */}
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
                Base Overview
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5D2EC]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B3A8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">23rd Floor, Tower 6789</p>
                    <p className="text-gray-600">6789 Ayala Avenue</p>
                    <p className="text-gray-600">Makati City, Metro Manila, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5D2EC]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#1B3A8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Total Rooms</p>
                    <p className="text-gray-600">49 private rooms in total</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C5D2EC]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#1B3A8C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Capacity</p>
                    <p className="text-gray-600">Up to 17 people in private rooms</p>
                  </div>
                </div>
              </div>

              {/* PEZA Badge */}
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">PEZA Certified Building</h3>
                    <p className="text-green-700 text-sm">
                      The building where our service office is located is PEZA certified.
                      Foreign investment companies can receive preferential treatment such as
                      exemption from corporate income tax, customs duty, and value added tax.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#C5D2EC]/30 to-[#8FA8D6]/30 rounded-2xl flex items-center justify-center">
                <Building2 className="w-32 h-32 text-[#1B3A8C]/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1B3A8C] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">49 Private Rooms</p>
                    <p className="text-sm text-gray-600">23rd Floor, Tower 6789</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Floor Layout & Office Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect workspace solution for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {officeTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center">
                    <type.icon className="w-7 h-7 text-[#1B3A8C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {type.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-yellow-50 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> {type.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Facilities & Services
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a productive work environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-[#C5D2EC]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-xl flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-[#1B3A8C]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Included Amenities
            </h2>
            <p className="text-lg text-gray-400">
              Premium features for all tenants
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl"
              >
                <amenity.icon className="w-8 h-8 text-[#8FA8D6] mb-4" />
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-400 text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C5D2EC]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Service Office Inquiry
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to learn more about our office spaces at Tower 6789
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+63288013417"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#1B3A8C]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-2xl font-bold text-[#1B3A8C]">+63 2 8801-3417</p>
                <p className="text-sm text-gray-500">Mon-Fri 9:00-18:00 (PH Time)</p>
              </div>
            </a>

            <a
              href="mailto:sales@heroph.net"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#C5D2EC]/50 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#1B3A8C]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-xl font-bold text-[#1B3A8C]">sales@heroph.net</p>
                <p className="text-sm text-gray-500">We reply within 24 hours</p>
              </div>
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B3A8C] text-white rounded-full font-semibold hover:bg-[#3B5EA6] transition-colors"
          >
            Send Inquiry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B3A8C] to-[#3B5EA6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take a virtual tour or schedule a visit to see our facilities in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B3A8C] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Take Virtual Tour
            </Link>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
