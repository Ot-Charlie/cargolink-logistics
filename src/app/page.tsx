import styles from "@/app/typography.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
     <section className="w-full m-h-screen pt-3 pb-10 bg-[#0F2137]">
  {/* background image goes here later */}
  
   <Navbar />
   {/* Badge */}
<div className="flex items-center justify-center mt-4">
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
    {/* Orange dot */}
    <span className="w-2 h-2 rounded-full bg-accent"></span>
    {/* Text */}
    <span
     className={`text-white font-inter font-light ${styles.badgeText}`}>
      Real-Time Global Logistics
    </span>
  </div>
</div>

{/* Hero Content */}
<div className="flex flex-col items-center gap-6 mt-8 px-6">
  {/* H1 */}
  <h1
    className={`text-white font-urbanist font-bold text-center ${styles.heroHeading}`}
  >
    Never lose your shipment again
  </h1>
   {/* Paragraph */}
  <p
    className={`text-white/80 font-inter font-light text-center max-w-70 ${styles.heroSubtext}`}
  >
    Safe handling, real-time tracking, and seamless cross-border logistics connecting Africa to the world — with complete visibility from port to doorstep.
  </p>
    {/* Buttons */}
  <div className="flex flex-col gap-4 w-full items-center">
    {/* Start Shipping */}
    <button
      type="button"
      className={`bg-accent text-white font-inter font-bold rounded-[10px] w-full max-w-81 h-12 ${styles.btnText}`}
    >
      Start Shipping
    </button>
    {/* Track a Shipment */}
    <button
      type="button"
      className={`bg-white/20 backdrop-blur-md border border-white/20 text-white font-inter font-bold rounded-[10px] w-full max-w-81 h-12 ${styles.btnText}`}
    >
      Track a Shipment
    </button>
</div>
 {/* Tracking Form */}
<div className="w-full max-w-81 bg-white/20 backdrop-blur-md border border-white/20 rounded-[20px] p-4 flex flex-col gap-4 mt-4">
  
  {/* Track/Schedule Toggle */}
  <div className="flex gap-2">
    <button
      type="button"
      className="w-34 h-9.75 rounded-[42px] bg-white text-black font-inter font-normal"
    >
      Track
    </button>
    <button
      type="button"
      className={`w-34 h-9.75 rounded-[42px] bg-white/20 backdrop-blur-md border border-white/70 text-white font-inter font-normal ${styles.glassBtn}`}
    >
      Schedule
    </button>
  </div>

  {/* Tracking ID Field */}
  <div className="flex flex-col gap-2">
    <label
      className="font-inter font-medium text-[#FFFFFF99] text-sm"
    >
      TRACKING ID
    </label>
    <input
      type="text"
      placeholder="e.g. CLK-2024-8842"
      className="w-full h-12 rounded-[10px] bg-white/20 backdrop-blur-md border border-white/50 px-4 font-inter text-white placeholder:text-[#FFFFFF99] outline-none"
    />
  </div>
{/* Shipment Info Card */}
<div className="w-full bg-white/20 backdrop-blur-md border border-white/20 rounded-[15px] p-3 flex flex-col gap-3">

  {/* From / Truck / To */}
  <div className="flex items-center justify-between">
    
    {/* From */}
    <div className="flex flex-col">
      <span className="font-inter text-[#FFFFFF80] text-xs">FROM</span>
      <span className="font-inter text-white font-medium text-sm">LAGOS, NG</span>
    </div>

    {/* Truck Icon */}
    <Image src="/truck.svg" alt="truck" width={85} height={40} />

    {/* To */}
    <div className="flex flex-col">
      <span className="font-inter text-[#FFFFFF80] text-xs">TO</span>
      <span className="font-inter text-white font-medium text-sm">LONDON, UK</span>
    </div>

  </div>

  {/* Progress Bar */}
  <div className="w-full h-1.5 bg-white/20 rounded-full">
    <div className="h-full w-2/3 bg-accent rounded-full"></div>
  </div>

  {/* Status Row */}
  <div className="flex items-center justify-between">
    
    {/* In Transit */}
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-[#05DF72]"></span>
      <span className={`font-inter text-[#FFFFFF80] ${styles.statusText}`}>In transit</span>
    </div>

    {/* ETA */}
    <span className={`font-inter text-[#FFFFFF80] ${styles.statusText}`}>ETA 3 days</span>

  </div>

</div>
{/* Track Shipment Button */}
<button
  type="button"
  className={`w-full h-10 bg-accent text-white font-inter font-semibold rounded-[10px] ${styles.trackBtn}`}
>
  Track Shipment →
</button>
</div>
</div>
</section>

    </main>
  );
}