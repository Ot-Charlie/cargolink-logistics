"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/typography.module.css";

export default function TrackingForm() {
  const [mode, setMode] = useState<"track" | "schedule">("track");

  return (
    <div className="w-full max-w-105 bg-background/20 backdrop-blur-md border border-background/20 rounded-[20px] p-4 flex flex-col gap-4 mt-4 lg:mt-0">
      {/* Track/Schedule Toggle */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setMode("track")}
          className={`cursor-pointer w-34 h-9.75 rounded-[42px] font-inter font-normal transition-all ${
            mode === "track"
              ? "bg-background text-text-primary"
              : `bg-background/20 backdrop-blur-md border border-background/70 text-background ${styles.glassBtn}`
          }`}
        >
          Track
        </button>
        <button
          type="button"
          onClick={() => setMode("schedule")}
          className={`cursor-pointer w-34 h-9.75 rounded-[42px] font-inter font-normal transition-all ${
            mode === "schedule"
              ? "bg-background text-text-primary"
              : `bg-background/20 backdrop-blur-md border border-background/70 text-background ${styles.glassBtn}`
          }`}
        >
          Schedule
        </button>
      </div>

      {/* Track Mode */}
      {mode === "track" && (
        <>
          {/* Tracking ID Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="tracking-id"
              className="font-inter font-medium text-background/60 text-sm"
            >
              TRACKING ID
            </label>
            <input
              id="tracking-id"
              type="text"
              placeholder="e.g. CLK-2024-8842"
              className="w-full h-12 rounded-[10px] bg-background/20 backdrop-blur-md border border-background/50 px-4 font-inter text-background placeholder:text-background/60 outline-none"
            />
          </div>

          {/* Shipment Info Card */}
          <div className="w-full bg-background/20 backdrop-blur-md border border-background/20 rounded-[15px] p-3 flex flex-col gap-3">
            {/* From / Truck / To */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-inter text-background/50 text-xs">
                  FROM
                </span>
                <span className="font-inter text-background font-medium text-sm">
                  LAGOS, NG
                </span>
              </div>
              <Image
                src="/truck.svg"
                alt="truck"
                width={85}
                height={40}
                loading="eager"
                className="h-auto"
              />
              <div className="flex flex-col">
                <span className="font-inter text-background/50 text-xs">
                  TO
                </span>
                <span className="font-inter text-background font-medium text-sm">
                  LONDON, UK
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-background/20 rounded-full">
              <div className="h-full w-2/3 bg-accent rounded-full"></div>
            </div>

            {/* Status Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-dot"></span>
                <span
                  className={`font-inter text-text-medium ${styles.statusText}`}
                >
                  In transit
                </span>
              </div>
              <span
                className={`font-inter text-background/50 ${styles.statusText}`}
              >
                ETA 3 days
              </span>
            </div>
          </div>

          {/* Track Button */}
          <button
            type="button"
            className={`cursor-pointer w-full h-10 bg-accent text-background font-inter font-semibold rounded-[10px] hover:bg-dark-accent transition-all ${styles.trackBtn}`}
          >
            Track Shipment →
          </button>
        </>
      )}

      {/* Schedule Mode */}
      {mode === "schedule" && (
        <>
          {/* Pickup Date */}
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-2">
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="pickup-date"
                className="font-inter font-medium text-background/60 text-sm"
              >
                PICKUP DATE
              </label>
              <input
                id="pickup-date"
                type="date"
                className="w-full h-12 rounded-[10px] bg-background/20 backdrop-blur-md border border-background/50 px-4 font-inter text-background outline-none scheme-dark cursor-pointer"
              />
            </div>

            {/* Delivery Date */}
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="delivery-date"
                className="font-inter font-medium text-background/60 text-sm"
              >
                DELIVERY DATE
              </label>
              <input
                id="delivery-date"
                type="date"
                className="w-full h-12 rounded-[10px] bg-background/20 backdrop-blur-md border border-background/50 px-4 font-inter text-background outline-none scheme-dark cursor-pointer"
              />
            </div>
          </div>

          {/* Transport Mode */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="transport-mode"
              className="font-inter font-medium text-background/60 text-sm"
            >
              TRANSPORT MODE
            </label>
            <select
              id="transport-mode"
              title="Transport Mode"
              defaultValue=""
              className="w-full h-12 rounded-[10px] bg-background/20 backdrop-blur-md border border-background/50 px-4 font-inter text-background outline-none scheme-dark cursor-pointer"
            >
              <option value="" disabled className="text-text-primary">
                Select mode
              </option>
              <option value="air" className="text-text-primary">
                Air
              </option>
              <option value="sea" className="text-text-primary">
                Sea
              </option>
              <option value="road" className="text-text-primary">
                Road
              </option>
            </select>
          </div>

          {/* Destination */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="destination"
              className="font-inter font-medium text-background/60 text-sm"
            >
              DESTINATION
            </label>
            <input
              id="destination"
              type="text"
              placeholder="e.g. London, UK"
              className="w-full h-12 rounded-[10px] bg-background/20 backdrop-blur-md border border-background/50 px-4 font-inter text-background placeholder:text-background/60 outline-none"
            />
          </div>

          {/* Schedule Button */}
          <button
            type="button"
            className={`cursor-pointer w-full h-10 bg-accent text-background font-inter font-semibold rounded-[10px] hover:bg-dark-accent transition-all ${styles.trackBtn}`}
          >
            Schedule Shipment →
          </button>
        </>
      )}
    </div>
  );
}
