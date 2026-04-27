import styles from "@/app/typography.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ShippingSteps from "@/components/ShippingSteps";
export default function Home() {
  return (
    <main className="">
   <section className="heroSection w-full min-h-screen pt-3 pb-10">

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
      className={`cursor-pointer bg-accent text-white font-inter font-bold rounded-[10px] w-full max-w-81 h-12 ${styles.btnText}`}
    >
      Start Shipping
    </button>
    {/* Track a Shipment */}
    <button
      type="button"
      className={`cursor-pointer bg-white/20 backdrop-blur-md border border-white/20 text-white font-inter font-bold rounded-[10px] w-full max-w-81 h-12 ${styles.btnText}`}
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
      className="cursor-pointer w-34 h-9.75 rounded-[42px] bg-white text-black font-inter font-normal"
    >
      Track
    </button>
    <button
      type="button"
      className={`cursor-pointer w-34 h-9.75 rounded-[42px] bg-white/20 backdrop-blur-md border border-white/70 text-white font-inter font-normal ${styles.glassBtn}`}
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
  className={`cursor-pointer w-full h-10 bg-accent text-white font-inter font-semibold rounded-[10px] ${styles.trackBtn}`}
>
  Track Shipment →
</button>
</div>
</div>
</section>

{/* Sponsors Section */}
<section className="w-full bg-white py-12 px-6 flex flex-col items-center gap-8">
  
  {/* Heading */}
  <p className={`text-[#43454A] font-dm-sans text-center ${styles.sponsorText}`}>
    Built for companies that can't afford delays
  </p>
{/*Sponsors images*/}
<div className="flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between lg:w-257 lg:items-center">
  
  <div className="flex gap-x-2 lg:contents">
    <Image src="/airplane.svg" alt="Airplane" width={100} height={40} />
    <Image src="/railway.svg" alt="Railway" width={100} height={40} />
    <Image src="/clerk.svg" alt="Clerk" width={100} height={40} />
  </div>

  <div className="flex gap-x-2 lg:contents">
    <Image src="/mintlify.svg" alt="Mintlify" width={100} height={40} />
    <Image src="/trigger-dev.svg" alt="Trigger Dev" width={100} height={40} />
  </div>

  <div className="lg:contents">
    <Image src="/airplane.svg" alt="Airplane" width={100} height={40} />
  </div>
</div>
{/* Images Grid */}
<div className="flex flex-col gap-3 lg:flex-row lg:items-center">
  
  {/* Grid - left side on desktop */}
  <div className="flex flex-col gap-3">
    
    {/* Air - top */}
    <div className="relative w-83 h-60">
      <Image 
        src="/air.png" 
        alt="Air freight" 
        fill
          sizes="332px"
        className="rounded-xl object-cover"
      />
      <span className={`absolute top-3 left-3 bg-white px-3 py-1 rounded-[42px] text-black font-inter font-bold ${styles.imageLabel}`}>
        AIR
      </span>
    </div>

    {/* Sea and Road - bottom row */}
    <div className="flex gap-3">
      
      {/* Sea */}
      <div className="relative w-40 h-40">
        <Image 
          src="/sea.png" 
          alt="Sea freight" 
          fill
            sizes="160px"
          className="rounded-xl object-cover"
        />
        <span className={`absolute top-3 left-3 bg-white px-3 py-1 rounded-[42px] text-black font-inter font-bold ${styles.imageLabel}`}>
          SEA
        </span>
      </div>

      {/* Road */}
      <div className="relative w-40 h-40">
        <Image 
          src="/road.png" 
          alt="Road freight" 
          fill
            sizes="160px"
          className="rounded-xl object-cover"
        />
        <span className={`absolute top-3 left-3 bg-white px-3 py-1 rounded-[42px] text-black font-inter font-bold ${styles.imageLabel}`}>
          ROAD
        </span>
      </div>

    </div>
  </div>

{/* Write up - right side on desktop */}
<div className="flex flex-col gap-4">
  
  {/* H2 */}
  <h2 className={`font-urbanist font-semibold text-black max-w-80 lg:max-w-none ${styles.reliabilityHeading}`}>
    Logistics built for{" "}
    <span className="text-accent">reliability</span>
    , not promises
  </h2>

  {/* Paragraph 1 */}
  <p className={`font-inter max-w-81.5 ${styles.bodyText}`}>
    <span className="text-black font-semibold">
      For too long, cross-border shipping has been a black box.{" "}
    </span>
    <span className="text-text-medium font-normal">
      Shipments disappear into transit. Updates arrive late. Accountability vanishes at borders.
    </span>
  </p>

  {/* Paragraph 2 */}
  <p className={`font-inter font-normal text-text-medium max-w-85 ${styles.bodyText}`}>
    We built CargoLink differently. Every shipment is tracked in real time. Every handoff is documented. Every partner is vetted. Because when you're moving millions in goods, visibility isn't a feature — it's the foundation.
  </p>

  {/* Paragraph 3 */}
  <p className={`font-inter font-normal text-text-medium max-w-81.5 ${styles.bodyText}`}>
    Whether it's air, sea, or road, we operate with one principle: your cargo arrives as promised, or we tell you why it didn't.
  </p>
{/* Bullet Points */}
<div className="flex flex-col gap-4">

  {/* 4th - Location */}
  <div className="flex items-start gap-3">
    <Image
      src="/location.svg"
      alt="Location"
      width={43}
      height={43}
      className="rounded-xl shrink-0"
    />
    <div className="flex flex-col gap-1">
      <h3 className={`font-inter font-semibold text-black max-w-70 ${styles.bulletHeading}`}>
        Know where your shipment is — at every step.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-55 ${styles.bulletText}`}>
        Real-time tracking across all transport modes, with instant alerts.
      </p>
    </div>
  </div>

  {/* 5th - Secure */}
  <div className="flex items-start gap-3">
    <Image
      src="/secure.svg"
      alt="Secure"
      width={43}
      height={43}
      className="rounded-xl shrink-0"
    />
    <div className="flex flex-col gap-1">
      <h3 className={`font-inter font-semibold text-black max-w-70 ${styles.bulletHeading}`}>
        Handled securely across borders, ports, and roads.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-64 ${styles.bulletText}`}>
        Vetted partners, documented handoffs, full chain of custody.
      </p>
    </div>
  </div>

  {/* 6th - Global */}
  <div className="flex items-start gap-3">
    <Image
      src="/global.svg"
      alt="Global"
      width={43}
      height={43}
      className="rounded-xl shrink-0"
    />
    <div className="flex flex-col gap-1">
      <h3 className={`font-inter font-semibold text-black max-w-57 ${styles.bulletHeading}`}>
        Built to operate globally, without breaking down locally.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-70 ${styles.bulletText}`}>
        Seamless integration across 120+ countries and 500+ logistics hubs.
      </p>
    </div>
  </div>
</div>
{/* Learn More Button */}
<button
  type="button"
  className={`cursor-pointer flex items-center gap-2 bg-black text-white font-inter font-semibold rounded-xl w-60 h-12.5 px-6  ${styles.learnBtn}`}
>
  Learn how we deliver
  <Image
    src="/right-arrow.svg"
    alt="Arrow"
    width={14}
    height={16}
  />
</button>
</div>

</div>
</section>
{/* Section 3 */}
<section className="bg-white py-16 px-6 flex flex-col items-center">
  <h2 className={`font-urbanist font-semibold text-text-heading text-center max-w-90 ${styles.reliabilityHeading}`}>
    How Shipping Actually Works
  </h2>
  <p className={`font-inter font-light text-text-subtle text-center mt-4 max-w-60 ${styles.sectionSubtext}`}>
    From pickup to delivery — without the guesswork.
  </p>
    <ShippingSteps />
</section>
    </main>
  );
}