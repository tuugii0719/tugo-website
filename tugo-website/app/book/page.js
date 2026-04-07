"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function BookPage() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    groupSize: "solo",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showWaiver, setShowWaiver] = useState(false);
  const [waiverData, setWaiverData] = useState({
    name: "",
    email: "",
    tour: "",
    reason: "",
  });
  const [waiverSubmitted, setWaiverSubmitted] = useState(false);

  const expeditions = [
    {
      id: "north",
      month: "June 2026",
      name: "North & Central Mongolia",
      days: "12 Days",
      price: "$1,500",
      brief: "Forests, lakes, mountains and nomadic culture",
    },
    {
      id: "south",
      month: "July 2026",
      name: "South & Central Mongolia",
      days: "12 Days",
      price: "$1,500",
      brief: "Gobi desert, sand dunes and dramatic landscapes",
    },
    {
      id: "central",
      month: "August 2026",
      name: "Central Mongolia",
      days: "7 Days",
      price: "$900",
      brief: "Steppe riding and nomadic life",
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWaiverChange = (e) => {
    const { name, value } = e.target;
    setWaiverData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWaiverSubmit = (e) => {
    e.preventDefault();
    setWaiverSubmitted(true);
  };

  const resetForm = () => {
    setSelectedTour(null);
    setFormData({
      name: "",
      email: "",
      country: "",
      groupSize: "solo",
      message: "",
    });
    setSubmitted(false);
  };

  const resetWaiver = () => {
    setShowWaiver(false);
    setWaiverData({
      name: "",
      email: "",
      tour: "",
      reason: "",
    });
    setWaiverSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] items-center justify-center text-center">
        <Image
          src="/images/home/hero1.jpg"
          alt="Book Your Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/40 to-night-950" />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-400">
            BOOK YOUR ADVENTURE
          </p>
          <h1 className="font-display text-4xl text-white md:text-6xl">
            Join the Expedition
          </h1>
        </motion.div>
      </section>

      {/* Expedition Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-400">
              2026 EXPEDITIONS
            </p>
            <h2 className="font-display text-3xl text-sand-100 md:text-4xl">
              Choose Your Expedition
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1 top-0 bottom-0 w-px bg-sand-900/30" />

            {/* Expedition Entries */}
            <div className="space-y-2">
              {expeditions.map((expedition) => (
                <div
                  key={expedition.id}
                  onClick={() => setSelectedTour(expedition.id)}
                  className={`relative cursor-pointer pl-8 pb-10 transition-all ${
                    selectedTour === expedition.id
                      ? "bg-night-900/50 rounded-lg p-4 -m-4 border border-sand-900/20"
                      : "hover:bg-night-900/50 hover:rounded-lg hover:p-4 hover:-m-4"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-2 w-3 h-3 rounded-full transition-all ${
                      selectedTour === expedition.id
                        ? "bg-sand-400 ring-4 ring-sand-400/20"
                        : "bg-sand-400/60"
                    }`}
                  />

                  {/* Month */}
                  <p className="text-xs uppercase tracking-wider text-sand-500">
                    {expedition.month}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl text-sand-100">
                    {expedition.name}
                  </h3>

                  {/* Meta */}
                  <p className="text-sm text-sand-400">
                    {expedition.days} · Starting from {expedition.price}
                  </p>

                  {/* Brief */}
                  <p className="text-sm text-sand-500">{expedition.brief}</p>

                  {/* Status */}
                  <div className="mt-2 flex items-center">
                    <div className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-sand-500">Spots Available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Registration Form */}
        <AnimatePresence>
          {selectedTour && !submitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 pt-12 border-t border-sand-900/20"
            >
              <FadeIn>
                <div>
                  <h3 className="mb-6 font-display text-2xl text-sand-100">
                    Register for{" "}
                    {expeditions.find((e) => e.id === selectedTour)?.name}
                  </h3>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* First Row - Name and Email */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleFormChange}
                        className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                        required
                      />
                    </div>

                    {/* Selected Tour */}
                    <div>
                      <input
                        type="text"
                        disabled
                        value={
                          expeditions.find((e) => e.id === selectedTour)?.name ||
                          ""
                        }
                        className="w-full bg-night-900/30 border border-sand-900/20 px-4 py-3 text-sm text-sand-500 cursor-not-allowed"
                      />
                    </div>

                    {/* Group Size */}
                    <div>
                      <p className="mb-3 text-sm text-sand-400">Group Size</p>
                      <div className="flex gap-3">
                        {[
                          { value: "solo", label: "Just Me" },
                          { value: "2", label: "2 Travelers" },
                          { value: "3+", label: "3+ Travelers" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                groupSize: option.value,
                              }))
                            }
                            className={`flex-1 border px-4 py-2 text-sm uppercase tracking-wider transition ${
                              formData.groupSize === option.value
                                ? "border-sand-400/50 bg-sand-400/10 text-sand-200"
                                : "border-sand-900/30 text-sand-500 hover:border-sand-400/30"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell me about your adventure dreams..."
                        value={formData.message}
                        onChange={handleFormChange}
                        rows="4"
                        className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="bg-sand-400 px-8 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
                      >
                        Send Request
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="border border-sand-900/30 px-8 py-3 text-sm uppercase tracking-wider text-sand-500 transition hover:border-sand-400/50 hover:text-sand-200"
                      >
                        Clear
                      </button>
                    </div>

                    {/* Note */}
                    <p className="mt-4 text-xs italic text-sand-500">
                      I&apos;ll personally respond within 24 hours to discuss your
                      adventure.
                    </p>
                  </form>
                </div>
              </FadeIn>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-12 pt-12 border-t border-sand-900/20 text-center"
          >
            <FadeIn>
              <div>
                <h3 className="mb-2 font-display text-2xl text-sand-100">
                  Thank you! Your request has been sent.
                </h3>
                <p className="mb-6 text-sand-400">
                  I&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="inline-block border border-sand-400/40 px-6 py-2 text-sm uppercase tracking-wider text-sand-200 transition hover:bg-sand-400/10"
                >
                  Back to expeditions
                </button>
              </div>
            </FadeIn>
          </motion.div>
        )}
      </section>

      {/* Fee Waiver Section */}
      <section className="border-t border-sand-900/20 py-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-4 font-display text-2xl text-sand-100">
              Fee Waiver Program
            </h2>
            <p className="mb-6 leading-relaxed text-sand-300">
              The main goal of TUGO isn&apos;t to make money — it&apos;s to share Mongolia
              with amazing people. A limited number of fee waiver spots are
              available for each expedition. If budget is a barrier, don&apos;t let
              it stop you.
            </p>

            {!showWaiver && !waiverSubmitted && (
              <button
                onClick={() => setShowWaiver(true)}
                className="border border-sand-400/40 px-6 py-2 text-sm uppercase tracking-wider text-sand-200 transition hover:bg-sand-400/10"
              >
                Request Fee Waiver
              </button>
            )}

            {/* Waiver Form */}
            <AnimatePresence>
              {showWaiver && !waiverSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8"
                >
                  <FadeIn>
                    <form onSubmit={handleWaiverSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={waiverData.name}
                            onChange={handleWaiverChange}
                            className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={waiverData.email}
                            onChange={handleWaiverChange}
                            className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <select
                          name="tour"
                          value={waiverData.tour}
                          onChange={handleWaiverChange}
                          className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                          required
                        >
                          <option value="">Which expedition interests you?</option>
                          {expeditions.map((exp) => (
                            <option key={exp.id} value={exp.name}>
                              {exp.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="reason"
                          placeholder="Why would you like a fee waiver?"
                          value={waiverData.reason}
                          onChange={handleWaiverChange}
                          rows="4"
                          className="w-full bg-night-900/60 border border-sand-900/20 px-4 py-3 text-sm text-sand-100 placeholder:text-sand-600 focus:border-sand-400/50 focus:outline-none"
                          required
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          className="bg-sand-400 px-8 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
                        >
                          Submit Waiver Request
                        </button>
                        <button
                          type="button"
                          onClick={resetWaiver}
                          className="border border-sand-900/30 px-8 py-3 text-sm uppercase tracking-wider text-sand-500 transition hover:border-sand-400/50 hover:text-sand-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </FadeIn>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Waiver Success */}
            {waiverSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8"
              >
                <FadeIn>
                  <div className="rounded-lg bg-night-900/50 border border-sand-900/20 p-6 text-center">
                    <p className="text-sand-100">
                      Your waiver request has been received. I&apos;ll review it
                      personally.
                    </p>
                    <button
                      onClick={resetWaiver}
                      className="mt-4 border border-sand-400/40 px-6 py-2 text-sm uppercase tracking-wider text-sand-200 transition hover:bg-sand-400/10"
                    >
                      Back to expeditions
                    </button>
                  </div>
                </FadeIn>
              </motion.div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Private Tours Section */}
      <section className="py-16 text-center border-t border-sand-900/20">
        <FadeIn>
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="mb-3 font-display text-xl text-sand-100">
              Looking for something custom?
            </h2>
            <p className="mb-6 text-sm text-sand-400">
              Private tours can be arranged for groups of any size. Tell me what
              you&apos;re dreaming of and we&apos;ll make it happen.
            </p>
            <a
              href="mailto:hello@tugo.mn"
              className="inline-block border border-sand-400/40 px-6 py-2 text-sm uppercase tracking-wider text-sand-200 transition hover:bg-sand-400/10"
            >
              Request Private Tour
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
