"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { Calendar, AlertCircle } from "lucide-react";
import CustomInput from "./componentsFormInput";
import CustomTextarea from "./componentsFormTextArea";

//image
import plumberClipboard from "@/assets/plumberDarkBlueSix-removebg.png";

//font
import { Tilt_Neon, Tilt_Warp } from "next/font/google";

const tiltwarp = Tilt_Warp({ subsets: ["latin"] });
const tiltneon = Tilt_Neon({ subsets: ["latin"] });

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    issue: "",
    agreeToComms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [showAppointmentError, setShowAppointmentError] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Tolong isi lengkap nama anda";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Tolong isi nomor telephone anda";
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Tolong masukan nomor telephone yang valid";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Tolong isi email anda";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Tolong masukan email yang valid";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Tolong isi lokasi anda";
    }

    if (!formData.issue.trim()) {
      newErrors.issue = "Tolong jelaskan issue anda";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!appointmentBooked) {
      setShowAppointmentError(true);
      // Hide the error after 5 seconds
      setTimeout(() => {
        setShowAppointmentError(false);
      }, 5000);
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate Dummy API call (FOR DEVELOPMENT)
      setTimeout(() => {
        console.log("Form berhasil di submit:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleBookAppointment = () => {
    // Simulate booking an appointment
    alert("Booking Appointment berhasil!");
    setAppointmentBooked(true);
    setShowAppointmentError(false);
    // This would typically open a calendar modal or redirect to a booking page
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <div className="mb-6">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <circle cx="32" cy="32" r="32" fill="#F0FDF4" />
            <path
              d="M44 24L28 40L20 32"
              stroke="#22C55E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Terima Kasih!</h2>
        <p className="text-gray-600 mb-6">
          Informasi anda berhasil di submit, Pihak kami akan segera menghubungi
          anda sebentar lagi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                location: "",
                issue: "",
                agreeToComms: false,
              });
              setIsSubmitted(false);
              setAppointmentBooked(false);
            }}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
          >
            Submit Form Lagi
          </button>
          <button
            onClick={handleBookAppointment}
            className="px-6 py-3 bg-white border border-green-500 text-green-500 font-medium rounded-full hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book jadwal kedatangan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left side with image and heading */}
        <div className="bg-white p-8 md:w-2/5 relative overflow-hidden flex flex-col items-center justify-center">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={plumberClipboard}
              alt="Background illustration"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          {/* Text overlay */}
          <div
            className={`${tiltwarp.className} text-3xl md:text-4xl font-bold text-green-600 leading-tight drop-shadow-sm`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 leading-tight drop-shadow-sm">
              {"Butuh Bantuan AC & Plumbing? Hubungi Kami Sekarang!"}
            </h1>
          </div>
        </div>

        {/* Right side with form */}
        <div className="p-8 md:w-3/5 bg-gradient-to-r from-green-500 to-green-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${tiltneon.className} block text-sm font-medium text-white mb-1`}
                >
                  Nama Lengkap
                </label>
                <CustomInput
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Input full name"
                  error={errors.fullName}
                />
              </div>

              <div>
                <label className="{`${tiltneon.className} block text-sm font-medium text-white mb-1`}">
                  Nomor Telephone
                </label>
                <CustomInput
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+628123456789"
                  error={errors.phoneNumber}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${tiltneon.className} block text-sm font-medium text-white mb-1`}
                >
                  Email
                </label>
                <CustomInput
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your_email@mail.com"
                  error={errors.email}
                />
              </div>

              <div>
                <label
                  className={`${tiltneon.className} block text-sm font-medium text-white mb-1`}
                >
                  Lokasi
                </label>
                <CustomInput
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Input your location"
                  error={errors.location}
                />
              </div>
            </div>

            <div>
              <label
                className={`${tiltneon.className} block text-sm font-medium text-white mb-1`}
              >
                Issue
              </label>
              <CustomTextarea
                name="issue"
                value={formData.issue}
                onChange={handleTextareaChange}
                placeholder="Please describe your issue in detail..."
                error={errors.issue}
              />
            </div>

            <div className="pt-4 space-y-3 relative">
              <button
                type="button"
                onClick={handleBookAppointment}
                className={`w-full ${
                  appointmentBooked
                    ? "bg-green-100 text-green-700 border-green-700"
                    : "bg-white text-green-500 border-green-500"
                } border-2 font-medium py-3 px-4 rounded-full hover:bg-green-50 transition-colors flex items-center justify-center gap-2`}
              >
                <Calendar className="h-5 w-5" />
                {appointmentBooked
                  ? "Appointment Booked ✓"
                  : "Book an Appointment"}
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-full transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {showAppointmentError && (
                <div className="absolute -bottom-16 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center shadow-lg animate-bounce">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>
                    Tolong booking tanggal kedatangan terlebih dahulu sebelum
                    submit form.
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
