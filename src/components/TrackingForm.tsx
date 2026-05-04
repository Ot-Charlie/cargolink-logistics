"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/typography.module.css";
import dynamic from 'next/dynamic';

const SearchBox = dynamic(
  () => import('@mapbox/search-js-react').then((mod) => mod.SearchBox),
  { ssr: false }
);

interface FormErrors {
  pickupDate?: string;
  deliveryDate?: string;
  transportMode?: string;
  destination?: string;
}

interface FormData {
  pickupDate: string;
  deliveryDate: string;
  transportMode: string;
  destination: string;
}

export default function TrackingForm() {
  const router = useRouter();

  const [mode, setMode] = useState<"track" | "schedule">("track");
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    pickupDate: "",
    deliveryDate: "",
    transportMode: "",
    destination: "",
  });
  const [trackingId, setTrackingId] = useState("");
  const [trackingError, setTrackingError] = useState("");

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.pickupDate) newErrors.pickupDate = "Please enter a pickup date";
    if (!formData.deliveryDate) newErrors.deliveryDate = "Please enter a delivery date";
    if (!formData.transportMode) newErrors.transportMode = "Please select a transport mode";
    if (!formData.destination) newErrors.destination = "Please enter a destination";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSchedule = () => {
    if (validate()) {
      setSuccess(true);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({ pickupDate: "", deliveryDate: "", transportMode: "", destination: "" });
    setErrors({});
  };

  const handleTrack = () => {
    if (!trackingId) {
      setTrackingError("Please enter a tracking ID");
      return;
    }
    const format = /^CLK-\d{4}-\d{6}$/;
    if (!format.test(trackingId)) {
      setTrackingError("Invalid format. Use CLK-YYYY-XXXXXX (e.g. CLK-2026-884219)");
      return;
    }
    router.push(`/tracking?id=${trackingId}`);
  };

  return (
        <div className="w-full max-w-105 bg-background/20 backdrop-blur-md border border-background/20 rounded-[20px] p-4 flex flex-col gap-4 mt-4 lg:mt-0">

      {/* Track/Schedule Toggle — hidden on success */}
      {!success && (
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => { setMode("track"); setErrors({}); }}
            className={`cursor-pointer w-34 h-9.75 rounded-[42px] font-inter font-normal transition-all ${
              mode === "track"
                ? "bg-background text-text-primary"
                : `glass text-background ${styles.glassBtn}`
            }`}
          >
            Track
          </button>
          <button
            type="button"
            onClick={() => { setMode("schedule"); setErrors({}); }}
            className={`cursor-pointer w-34 h-9.75 rounded-[42px] font-inter font-normal transition-all ${
              mode === "schedule"
                ? "bg-background text-text-primary"
                : `glass text-background ${styles.glassBtn}`
            }`}
          >
            Schedule
          </button>
        </div>
      )}

      {/* Track Mode */}
      {mode === "track" && !success && (
        <>
          {/* Tracking ID Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tracking-id" className="font-inter font-medium text-background/60 text-sm">
              TRACKING ID
            </label>
          <input
  id="tracking-id"
  type="text"
  placeholder="e.g. CLK-2026-884219"
  value={trackingId}
  onChange={(e) => {
    setTrackingId(e.target.value);
    if (e.target.value) setTrackingError("");
  }}
  className={`w-full h-12 rounded-[10px] glass px-4 font-inter text-background placeholder:text-background/60 outline-none ${styles.glassBtn} ${
    trackingError ? "border-2 border-red-400" : "border-background/50"
  }`}
/>
{trackingError && (
  <p className="text-red-400 text-xs font-inter mt-1 ml-2">{trackingError}</p>
)}
          </div>

          {/* Shipment Info Card */}
          <div className={`w-full glass rounded-[15px] p-3 flex flex-col gap-3 ${styles.glassBtn}`}>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-inter text-background/50 text-xs">FROM</span>
                <span className="font-inter text-background font-medium text-sm">LAGOS, NG</span>
              </div>
              <Image src="/truck.svg" alt="truck" width={85} height={40} loading="eager" className="h-auto" />
              <div className="flex flex-col">
                <span className="font-inter text-background/50 text-xs">TO</span>
                <span className="font-inter text-background font-medium text-sm">LONDON, UK</span>
              </div>
            </div>

            <div className="w-full h-1.5 bg-background/20 rounded-full">
              <div className="h-full w-2/3 bg-accent rounded-full"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#05DF72]"></span>
                <span className={`font-inter text-text-medium ${styles.statusText}`}>In transit</span>
              </div>
              <span className={`font-inter text-background/50 ${styles.statusText}`}>ETA 3 days</span>
            </div>
          </div>

          {/* Track Button */}
         <button
  type="button"
  onClick={handleTrack}
  className={`cursor-pointer w-full h-10 bg-accent text-background font-inter font-semibold rounded-[10px] hover:bg-dark-accent transition-all ${styles.trackBtn}`}
>
  Track Shipment →
</button>
        </>
      )}

      {/* Schedule Mode */}
      {mode === "schedule" && !success && (
        <>
          {/* Pickup and Delivery Date */}
          <div className="overflow-hidden">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-2 min-w-0">
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <label htmlFor="pickup-date" className="font-inter font-medium text-background/60 text-sm">
                PICKUP DATE
              </label>
              <input
                id="pickup-date"
                type="date"
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                className={`w-full min-w-0 h-12 rounded-[10px] glass px-4 font-inter text-background outline-none scheme-dark cursor-pointer ${styles.glassBtn} ${
                  errors.pickupDate ? "border-2 border-red-400" : "border-background/50"
                }`}
              />
              {errors.pickupDate && (
                <p className="text-red-400 text-xs font-inter mt-1 pl-3">{errors.pickupDate}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <label htmlFor="delivery-date" className="font-inter font-medium text-background/60 text-sm">
                DELIVERY DATE
              </label>
              <input
                id="delivery-date"
                type="date"
                value={formData.deliveryDate}
                onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                className={`w-full min-w-0 h-12 rounded-[10px] glass px-4 font-inter text-background outline-none scheme-dark cursor-pointer ${styles.glassBtn} ${
                  errors.deliveryDate ? "border-2 border-red-400" : "border-background/50"
                }`}
              />
              {errors.deliveryDate && (
                <p className="text-red-400 text-xs font-inter mt-1 pl-3">{errors.deliveryDate}</p>
              )}
            </div>
          </div>
</div>
          {/* Transport Mode */}
          <div className="flex flex-col gap-1">
            <label htmlFor="transport-mode" className="font-inter font-medium text-background/60 text-sm">
              TRANSPORT MODE
            </label>
            <select
              id="transport-mode"
              title="Transport Mode"
              value={formData.transportMode}
              onChange={(e) => setFormData({ ...formData, transportMode: e.target.value })}
              className={`w-full h-12 rounded-[10px] glass px-4 font-inter text-background outline-none scheme-dark cursor-pointer ${styles.glassBtn} ${
                errors.transportMode ? "border-2 border-red-400" : "border-background/50"
              }`}
            >
              <option value="" disabled className="text-text-primary">Select mode</option>
              <option value="air" className="text-text-primary">Air</option>
              <option value="sea" className="text-text-primary">Sea</option>
              <option value="road" className="text-text-primary">Road</option>
            </select>
            {errors.transportMode && (
              <p className="text-red-400 text-xs font-inter mt-1 pl-3">{errors.transportMode}</p>
            )}
          </div>

          {/* Destination */}
<div className="flex flex-col gap-1">
  <label htmlFor="destination" className="font-inter font-medium text-background/60 text-sm">
    DESTINATION
  </label>
  <SearchBox
    accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string}
    value={formData.destination}
    onChange={(value) => {
      setFormData({ ...formData, destination: value });
      if (value) setErrors({ ...errors, destination: undefined });
    }}
    onRetrieve={(result) => {
      setFormData({ ...formData, destination: result.features[0].properties.full_address });
    }}
    options={{ language: 'en', limit: 5 }}
   theme={{
  variables: {
    fontFamily: 'Inter, sans-serif',
    colorBackground: 'rgba(255,255,255,0.15)',
    colorText: 'background',
    colorPrimary: '#ffffff',
    colorSecondary: 'rgba(255,255,255,0.6)',
    borderRadius: '10px',
  }
}}
  />
  {errors.destination && (
    <p className="text-red-400 text-xs font-inter mt-1 pl-3">{errors.destination}</p>
  )}
</div>

          {/* Schedule Button */}
          <button
            type="button"
            onClick={handleSchedule}
            className={`cursor-pointer w-full h-10 bg-accent text-background font-inter font-semibold rounded-[10px] hover:bg-dark-accent transition-all ${styles.trackBtn}`}
          >
            Schedule Shipment →
          </button>
        </>
      )}

    {/* Success Panel */}
{success && (
  <div className={`flex flex-col items-center gap-4 py-6 bg-accent/20 backdrop-blur-md border border-background/20 rounded-[15px] ${styles.glassBtn}`}>
          
          {/* Animated Circle + Tick SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="251"
              strokeDashoffset="251"
              className="animate-draw-circle"
            />
            {/* Tick */}
            <polyline
              points="28,52 42,66 72,36"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="60"
              strokeDashoffset="60"
              className="animate-draw-tick"
            />
          </svg>

          {/* Success Text */}
          <div className="flex flex-col items-center gap-1">
            <h3 className={`font-inter font-semibold text-background text-center ${styles.featureHeading}`}>
              Successfully Scheduled!
            </h3>
            <p className={`font-inter text-background/70 text-center ${styles.statusText}`}>
              Your shipment has been booked
            </p>
          </div>

          {/* Summary */}
          <div className={`w-full glass rounded-[10px] p-3 flex flex-col gap-2 ${styles.glassBtn}`}>
            <div className="flex justify-between">
              <span className={`font-inter text-background/60 ${styles.statusText}`}>Pickup</span>
              <span className={`font-inter text-background font-medium ${styles.statusText}`}>{formData.pickupDate}</span>
            </div>
            <div className="flex justify-between">
              <span className={`font-inter text-background/60 ${styles.statusText}`}>Delivery</span>
              <span className={`font-inter text-background font-medium ${styles.statusText}`}>{formData.deliveryDate}</span>
            </div>
            <div className="flex justify-between">
              <span className={`font-inter text-background/60 ${styles.statusText}`}>Mode</span>
              <span className={`font-inter text-background font-medium ${styles.statusText}`}>{formData.transportMode}</span>
            </div>
            <div className="flex justify-between">
              <span className={`font-inter text-background/60 ${styles.statusText}`}>Destination</span>
              <span className={`font-inter text-background font-medium ${styles.statusText}`}>{formData.destination}</span>
            </div>
          </div>

          {/* Reset Button */}
          <button
            type="button"
            onClick={handleReset}
            className={`cursor-pointer w-1/2 h-10 bg-background text-text-primary font-inter font-semibold rounded-[10px] hover:opacity-90 transition-all ${styles.trackBtn}`}
          >
            Schedule Another
          </button>
        </div>
      )}

    </div>
  );
}