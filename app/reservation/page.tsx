"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Building2,
  CreditCard,
  Upload,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  User,
  Briefcase,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../../components/LanguageProvider";

export default function ReservationPage() {
  const { t } = useLanguage();

  const spaceTypes = [
    { id: "serviced-office", name: t("reservation.spaceTypes.servicedOffice") as string, icon: Building2 },
    { id: "meeting-room", name: t("reservation.spaceTypes.meetingRoom") as string, icon: Users },
    { id: "virtual-office", name: t("reservation.spaceTypes.virtualOffice") as string, icon: Briefcase },
  ];

  const officePlans = [
    { id: "starter", name: t("reservation.plans.starter") as string, price: "₱25,000/month" },
    { id: "professional", name: t("reservation.plans.professional") as string, price: "₱45,000/month" },
    { id: "enterprise", name: t("reservation.plans.enterprise") as string, price: "₱75,000/month" },
  ];

  const meetingRooms = [
    { id: "small", name: t("reservation.meetingRooms.small") as string, price: "₱1,500/hour" },
    { id: "large", name: t("reservation.meetingRooms.large") as string, price: "₱3,000/hour" },
  ];

  const virtualPlans = [
    { id: "basic", name: t("reservation.virtualPlans.basic") as string, price: "₱8,000/month" },
    { id: "premium", name: t("reservation.virtualPlans.premium") as string, price: "₱15,000/month" },
  ];

  const paymentMethods = [
    { id: "bank-transfer", name: t("reservation.paymentMethods.bankTransfer") as string, description: t("reservation.paymentMethods.bankTransferDesc") as string },
    { id: "check", name: t("reservation.paymentMethods.check") as string, description: t("reservation.paymentMethods.checkDesc") as string },
    { id: "cash", name: t("reservation.paymentMethods.cash") as string, description: t("reservation.paymentMethods.cashDesc") as string },
  ];
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spaceType: "",
    plan: "",
    date: "",
    time: "",
    duration: "1",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    paymentMethod: "",
    paymentProof: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, paymentProof: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getPlanOptions = () => {
    switch (formData.spaceType) {
      case "serviced-office":
        return officePlans;
      case "meeting-room":
        return meetingRooms;
      case "virtual-office":
        return virtualPlans;
      default:
        return [];
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t("reservation.success.title") as string}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("reservation.success.subtitle") as string}
            </p>
            <div className="bg-[#C5D2EC]/30 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">{t("reservation.success.nextStepsTitle") as string}</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#1B3A8C] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                    1
                  </span>
                  <span>{t("reservation.success.step1") as string}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#1B3A8C] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                    2
                  </span>
                  <span>{t("reservation.success.step2") as string}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#1B3A8C] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                    3
                  </span>
                  <span>{t("reservation.success.step3") as string}</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-3 bg-[#1B3A8C] text-white rounded-full font-semibold hover:bg-[#3B5EA6] transition-colors"
              >
                {t("reservation.success.backHome") as string}
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                {t("reservation.success.contactSupport") as string}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("reservation.hero.title") as string}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t("reservation.hero.subtitle") as string}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      s <= step
                        ? "bg-[#1B3A8C] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-2 ${
                        s < step ? "bg-[#1B3A8C]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span className="w-10 text-center">{t("reservation.steps.space") as string}</span>
              <span className="w-10 text-center">{t("reservation.steps.schedule") as string}</span>
              <span className="w-10 text-center">{t("reservation.steps.details") as string}</span>
              <span className="w-10 text-center">{t("reservation.steps.payment") as string}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Space Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("reservation.step1.title") as string}
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {spaceTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, spaceType: type.id, plan: "" }))
                      }
                      className={`p-6 rounded-xl border-2 text-center transition-colors ${
                        formData.spaceType === type.id
                          ? "border-[#1B3A8C] bg-[#C5D2EC]/30"
                          : "border-gray-200 hover:border-[#8FA8D6]"
                      }`}
                    >
                      <type.icon
                        className={`w-10 h-10 mx-auto mb-3 ${
                          formData.spaceType === type.id ? "text-[#1B3A8C]" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          formData.spaceType === type.id ? "text-[#1B3A8C]" : "text-gray-700"
                        }`}
                      >
                        {type.name}
                      </span>
                    </button>
                  ))}
                </div>

                {formData.spaceType && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">{t("reservation.step1.selectPlan") as string}</h3>
                    <div className="space-y-3">
                      {getPlanOptions().map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, plan: plan.id }))
                          }
                          className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-colors ${
                            formData.plan === plan.id
                              ? "border-[#1B3A8C] bg-[#C5D2EC]/30"
                              : "border-gray-200 hover:border-[#8FA8D6]"
                          }`}
                        >
                          <span
                            className={`font-semibold ${
                              formData.plan === plan.id ? "text-[#1B3A8C]" : "text-gray-700"
                            }`}
                          >
                            {plan.name}
                          </span>
                          <span className="text-gray-600">{plan.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.spaceType || !formData.plan}
                    className="px-6 py-3 bg-[#1B3A8C] text-white rounded-full font-semibold hover:bg-[#3B5EA6] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Schedule */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("reservation.step2.title") as string}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {t("reservation.step2.preferredDate") as string}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {t("reservation.step2.preferredTime") as string}
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      required
                    >
                      <option value="">{t("reservation.step2.selectTime") as string}</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                {formData.spaceType === "meeting-room" && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("reservation.step2.duration") as string}
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                    >
                      <option value="1">{t("reservation.step2.1hour") as string}</option>
                      <option value="2">{t("reservation.step2.2hours") as string}</option>
                      <option value="3">{t("reservation.step2.3hours") as string}</option>
                      <option value="4">{t("reservation.step2.halfDay") as string}</option>
                      <option value="8">{t("reservation.step2.fullDay") as string}</option>
                    </select>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t("reservation.back") as string}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                    className="px-6 py-3 bg-[#1B3A8C] text-white rounded-full font-semibold hover:bg-[#3B5EA6] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("reservation.step3.title") as string}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      {t("reservation.step3.fullName") as string} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 inline mr-2" />
                      {t("reservation.step3.companyName") as string}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      {t("reservation.step3.emailAddress") as string} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      {t("reservation.step3.phoneNumber") as string} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                      placeholder="+63 XXX XXX XXXX"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("reservation.step3.additionalMessage") as string}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3A8C] focus:border-transparent"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t("reservation.back") as string}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="px-6 py-3 bg-[#1B3A8C] text-white rounded-full font-semibold hover:bg-[#3B5EA6] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("reservation.step4.title") as string}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("reservation.step4.subtitle") as string}
                </p>

                {/* Bank Details */}
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    {t("reservation.step4.bankDetails") as string}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t("reservation.step4.bankName") as string}:</span>
                      <span className="font-medium">{t("reservation.step4.bankNameValue") as string}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t("reservation.step4.accountName") as string}:</span>
                      <span className="font-medium">{t("reservation.step4.accountNameValue") as string}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-medium">1234-5678-9012-3456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Branch:</span>
                      <span className="font-medium">Ayala Avenue, Makati</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t("reservation.step4.selectPaymentMethod") as string}
                  </label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, paymentMethod: method.id }))
                        }
                        className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                          formData.paymentMethod === method.id
                            ? "border-[#1B3A8C] bg-[#C5D2EC]/30"
                            : "border-gray-200 hover:border-[#8FA8D6]"
                        }`}
                      >
                        <div
                          className={`font-semibold ${
                            formData.paymentMethod === method.id
                              ? "text-[#1B3A8C]"
                              : "text-gray-700"
                          }`}
                        >
                          {method.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {method.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Upload className="w-4 h-4 inline mr-2" />
                    {t("reservation.step4.uploadPaymentProof") as string} *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="payment-proof"
                      required
                    />
                    <label
                      htmlFor="payment-proof"
                      className="cursor-pointer block"
                    >
                      {formData.paymentProof ? (
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{formData.paymentProof.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600">
                            {t("reservation.step4.uploadInstructions") as string}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {t("reservation.step4.supports") as string}
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-6 p-4 bg-yellow-50 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    <strong>{t("reservation.step4.noteLabel") as string}:</strong> {t("reservation.step4.noteText") as string}
                  </p>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t("reservation.back") as string}
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.paymentMethod || !formData.paymentProof
                    }
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        {t("reservation.step4.submitting") as string}
                      </>
                    ) : (
                      <>
                        {t("reservation.step4.completeReservation") as string}
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">{t("reservation.support.needHelp") as string}</p>
              <p className="text-gray-600 text-sm">+63 2 8801-3417</p>
            </div>
            <div className="p-4">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">{t("reservation.support.emailUs") as string}</p>
              <p className="text-gray-600 text-sm">sales@heroph.net</p>
            </div>
            <div className="p-4">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">{t("reservation.support.visitUs") as string}</p>
              <p className="text-gray-600 text-sm">Tower 6789, Ayala Avenue</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
