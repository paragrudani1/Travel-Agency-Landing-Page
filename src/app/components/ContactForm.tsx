"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 relative overflow-hidden"
      noValidate
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-red)] text-transparent bg-clip-text">
          Tell Us About Your Dream Journey
        </h3>
        <p className="text-gray-600">
          Fill in the details below, and we'll craft the perfect Indian
          adventure for you
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50,5 C70,5 85,20 85,40 C85,60 70,75 50,75 C30,75 15,60 15,40 C15,20 30,5 50,5 Z"
            fill="var(--primary-orange)"
          />
        </svg>
      </div>

      <div className="space-y-6 relative z-10">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What should we call you?"
            className={`w-full px-4 py-2 border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] transition-all duration-300 ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 hover:border-[var(--primary-orange)]"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Where can we reach you?"
            className={`w-full px-4 py-2 border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] transition-all duration-300 ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 hover:border-[var(--primary-orange)]"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type of Journey
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Cultural, Adventure, Wildlife, or something else?"
            className={`w-full px-4 py-2 border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] transition-all duration-300 ${
              errors.subject
                ? "border-red-500"
                : "border-gray-300 hover:border-[var(--primary-orange)]"
            }`}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Travel Dreams
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your ideal Indian adventure. Which destinations interest you? How long would you like to travel? Any specific experiences you're seeking?"
            className={`w-full px-4 py-2 border rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] transition-all duration-300 ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 hover:border-[var(--primary-orange)]"
            }`}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Begin Your Journey"}
          </button>
        </div>

        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center p-4 rounded-lg ${
              submitStatus === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
            role="alert"
          >
            {submitStatus === "success"
              ? "Thank you for reaching out! We're excited to help plan your Indian adventure. Our team will get back to you within 24 hours."
              : "There was an error sending your message. Please try again or contact us directly by phone."}
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
