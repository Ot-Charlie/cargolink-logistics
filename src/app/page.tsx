import styles from "@/app/typography.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TrackingForm from "@/components/TrackingForm";
import ShippingSteps from "@/components/ShippingSteps";
export default function Home() {
  return (
    <main className="">
   <section className="heroSection w-full min-h-screen pt-3 pb-10">

   <Navbar />
   {/* Badge */}
<div className="flex items-center justify-center mt-4">
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 lg:hidden">
    {/* Orange dot */}
    <span className="w-2 h-2 rounded-full bg-accent"></span>
    {/* Text */}
    <span
     className={`text-background font-inter font-light ${styles.badgeText}`}>
      Real-Time Global Logistics
    </span>
  </div>
</div>

{/* Hero Content */}
<div className="flex flex-col items-center gap-6 mt-8 px-6 lg:flex-row lg:justify-around lg:items-center lg:px-16 lg:mt-16">
  
  {/* Left — H1, Paragraph, Buttons */}
  <div className="flex flex-col items-center gap-6 lg:items-start">
    {/* H1 */}
    <h1
      className={`text-background font-urbanist font-bold text-center lg:text-left lg:max-w-80 ${styles.heroHeading}`}
    >
      Never lose your shipment again
    </h1>
    {/* Paragraph */}
    <p
      className={`text-background/80 font-inter font-light text-center lg:text-left max-w-70 lg:max-w-150 ${styles.heroSubtext}`}
    >
      Safe handling, real-time tracking, and seamless cross-border logistics connecting Africa to the world — with complete visibility from port to doorstep.
    </p>
    {/* Start Shipping Button */}
    <div className="flex flex-col gap-4 w-full items-center lg:items-start">
      {/* Start Shipping */}
      <button
        type="button"
        className={`cursor-pointer bg-accent text-background font-inter font-bold rounded-[10px] w-full max-w-81 h-12 hover:bg-dark-accent transition-opacity ${styles.btnText}`}
      >
        Start Shipping
      </button>
    </div>
  </div>

{/* Right — Tracking Form */}
<TrackingForm />

</div>
</section>

{/* Sponsors Section */}
<section className="w-full bg-white py-12 flex flex-col items-center gap-8">
  
  {/* Heading */}
  <p className={`text-[#43454A] font-dm-sans text-center ${styles.sponsorText}`}>
    Built for companies that can't afford delays
  </p>
{/*Sponsors images*/}
<div className="flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between lg:w-257 lg:items-center">
  
  <div className="flex gap-x-2 lg:contents">
    <Image src="/airplane.svg" alt="Airplane" width={100} height={40} className="h-auto"/>
    <Image src="/railway.svg" alt="Railway" width={100} height={40} className="h-auto"/>
    <Image src="/clerk.svg" alt="Clerk" width={100} height={40} className="h-auto"/>
  </div>

  <div className="flex gap-x-2 lg:contents">
    <Image src="/mintlify.svg" alt="Mintlify" width={100} height={40} className="h-auto"/>
    <Image src="/trigger-dev.svg" alt="Trigger Dev" width={100} height={40} className="h-auto"/>
  </div>

  <div className="lg:contents">
    <Image src="/airplane.svg" alt="Airplane" width={100} height={40} className="h-auto"/>
  </div>
</div>
{/* Images Grid */}
<div className="flex flex-col gap-3 lg:gap-10 lg:flex-row lg:items-center">
  
  {/* Grid - left side on desktop */}
  <div className="flex flex-col gap-3">
    
    {/* Air - top */}
    <div className="relative w-83 h-60 lg:w-156 lg:h-80">
      <Image 
        src="/air.png" 
        alt="Air freight" 
        fill
        sizes="(max-width: 1024px) 332px, 624px"
        className="rounded-xl object-cover"
      />
      <span className={`absolute top-3 left-3 bg-background px-3 py-1 rounded-[42px] text-text-primary font-inter font-bold ${styles.imageLabel}`}>
        AIR
      </span>
    </div>

    {/* Sea and Road - bottom row */}
    <div className="flex gap-3">
      
      {/* Sea */}
     <div className="relative w-40 h-40 lg:flex-1 lg:h-50">
        <Image 
          src="/sea.png" 
          alt="Sea freight" 
          fill
          sizes="(max-width: 1024px) 160px, 303px"
          className="rounded-xl object-cover"
        />
        <span className={`absolute top-3 left-3 bg-white px-3 py-1 rounded-[42px] text-black font-inter font-bold ${styles.imageLabel}`}>
          SEA
        </span>
      </div>

      {/* Road */}
      <div className="relative w-40 h-40 lg:flex-1 lg:h-50">
        <Image 
          src="/road.png" 
          alt="Road freight" 
          fill
          sizes="(max-width: 1024px) 160px, 303px"
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
  <h2 className={`font-urbanist font-semibold text-text-primary max-w-80 lg:max-w-90 ${styles.reliabilityHeading}`}>
    Logistics built for{" "}
    <span className="text-accent">reliability</span>
    , not promises
  </h2>

  {/* Paragraph 1 */}
  <p className={`font-inter max-w-81.5 lg:max-w-120 ${styles.bodyText}`}>
    <span className="text-black font-semibold">
      For too long, cross-border shipping has been a black box.{" "}
    </span>
    <span className="text-text-medium font-normal">
      Shipments disappear into transit. Updates arrive late. Accountability vanishes at borders.
    </span>
  </p>

  {/* Paragraph 2 */}
  <p className={`font-inter font-normal text-text-medium max-w-85 lg:max-w-135 ${styles.bodyText}`}>
    We built CargoLink differently. Every shipment is tracked in real time. Every handoff is documented. Every partner is vetted. Because when you're moving millions in goods, visibility isn't a feature — it's the foundation.
  </p>

  {/* Paragraph 3 */}
  <p className={`font-inter font-normal text-text-medium max-w-81.5 lg:max-w-130 ${styles.bodyText}`}>
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
      <h3 className={`font-inter font-semibold text-black max-w-70 lg:max-w-full ${styles.bulletHeading}`}>
        Know where your shipment is — at every step.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-55 lg:max-w-full ${styles.bulletText}`}>
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
      <h3 className={`font-inter font-semibold text-black max-w-70 lg:max-w-full ${styles.bulletHeading}`}>
        Handled securely across borders, ports, and roads.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-64 lg:max-w-full ${styles.bulletText}`}>
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
      <h3 className={`font-inter font-semibold text-text-primary max-w-57 lg:max-w-full ${styles.bulletHeading}`}>
        Built to operate globally, without breaking down locally.
      </h3>
      <p className={`font-inter font-normal text-text-subtle max-w-70 lg:max-w-full ${styles.bulletText}`}>
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
{/* Section 4 */}
<section className="bg-white py-16 px-6 flex flex-col items-center">
  <h2 className={`font-urbanist font-semibold text-text-heading text-center max-w-80 ${styles.reliabilityHeading}`}>
    Built for Visibility, Security and Control
  </h2>
  <p className={`font-inter font-light text-text-subtle text-center mt-4 ${styles.sectionSubtext}`}>
    Everything you need to ship with confidence
  </p>
    <div className="flex flex-col items-center gap-6 mt-12 w-full lg:flex-row lg:items-center lg:justify-center lg:gap-8">

    {/* Phone — shows first on mobile, middle on desktop */}
    <div className="lg:order-2">
      <Image src="/phone.svg" alt="Phone" width={280} height={560} className="h-auto" />
    </div>

    {/* Left column */}
    <div className="flex flex-col gap-4 lg:order-1 lg:items-end">
      <div className="flex flex-col gap-3 p-6 rounded-2xl w-83 min-h-52.75 border border-[#FFFFFF33] bg-light-shade">
        <Image src="/location.svg" alt="Location" width={43} height={43} className="rounded-xl" />
        <h3 className={`font-inter font-semibold text-text-primary ${styles.featureHeading}`}>
          Real-time Tracking
        </h3>
        <p className={`font-inter font-normal text-text-subtle ${styles.bulletText}`}>
          Track your shipment live across air, sea, and road with instant status updates at every handoff.
        </p>
      </div>

      <div className="flex flex-col gap-3 p-6 rounded-2xl w-83 min-h-52.75 border border-[#FFFFFF33] bg-light-shade">
        <Image src="/global.svg" alt="Global" width={43} height={43} className="rounded-xl" />
        <h3 className={`font-inter font-semibold text-text-primary ${styles.featureHeading}`}>
          Global Coverage
        </h3>
        <p className={`font-inter font-normal text-text-subtle ${styles.bulletText}`}>
          Ship across borders seamlessly with access to trusted logistics networks worldwide.
        </p>
      </div>
    </div>

    {/* Right column */}
    <div className="flex flex-col gap-4 lg:order-3">
      <div className="flex flex-col gap-3 p-6 rounded-2xl w-83 min-h-52.75 border border-[#FFFFFF33] bg-light-shade">
        <Image src="/secure.svg" alt="Secure" width={43} height={43} className="rounded-xl" />
        <h3 className={`font-inter font-semibold text-text-primary ${styles.featureHeading}`}>
          Secure Handling
        </h3>
        <p className={`font-inter font-normal text-text-subtle ${styles.bulletText}`}>
          Every partner is vetted, every transfer documented, and every shipment handled with care.
        </p>
      </div>

      <div className="flex flex-col gap-3 p-6 rounded-2xl w-83 min-h-52.75 border border-[#FFFFFF33] bg-light-shade">
        <Image src="/checklist.svg" alt="Checklist" width={43} height={43} className="rounded-xl" />
        <h3 className={`font-inter font-semibold text-text-primary ${styles.featureHeading}`}>
          Full Accountability
        </h3>
        <p className={`font-inter font-normal text-text-subtle ${styles.bulletText}`}>
          Know where your shipment is, who handled it, and what happens next — no blind spots.
        </p>
      </div>
    </div>

</div>
</section>
{/* Footer */}
<footer className="bg-footer-bg w-full py-12">
  
  {/* Div 1 */}
  <div className="flex flex-col gap-8 lg:flex-row lg:justify-around px-6">

    {/* Brand */}
    <div className="flex flex-col gap-4 lg:max-w-75">
      <div className="flex items-center gap-2">
        <Image src="/footer-img.svg" alt="CargoLink" width={32} height={32} />
       <h4 className={`font-inter text-text-heading ${styles.footerBrand}`}>
  CARGOLINK
</h4>
      </div>
      <p className={`font-inter text-footer-text ${styles.footerBrandText}`}>
        Premium logistics solutions for the modern world. Connecting Africa to global markets with speed, security, and absolute visibility.
      </p>
    </div>

    {/* Links */}
    <div className="grid grid-cols-2 gap-8 lg:flex lg:gap-12">
      
      {/* Services */}
      <div className="flex flex-col gap-3">
        <h4 className={`font-inter text-text-heading ${styles.footerHeading}`}>
          Services
        </h4>
        <ul className="flex flex-col gap-2">
          {["Air Freight", "Ocean Shipping", "Road Transport", "Customs Clearing"].map((item) => (
            <li key={item}>
              <a href="#" className={`font-inter text-footer-text cursor-pointer hover:text-accent transition-colors ${styles.footerLink}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-3">
        <h4 className={`font-inter text-text-heading ${styles.footerHeading}`}>
          Company
        </h4>
        <ul className="flex flex-col gap-2">
          {["About Us", "Network", "Security", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className={`font-inter text-footer-text cursor-pointer hover:text-accent transition-colors ${styles.footerLink}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div className="flex flex-col gap-3">
        <h4 className={`font-inter text-text-heading ${styles.footerHeading}`}>
          Support
        </h4>
        <ul className="flex flex-col gap-2">
          {["Tracking Help", "Documentation", "FAQs"].map((item) => (
            <li key={item}>
              <a href="#" className={`font-inter text-footer-text cursor-pointer hover:text-accent transition-colors ${styles.footerLink}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  {/* Div 2 */}
<div className="flex flex-col items-center gap-3 mt-10 pt-6 border-t border-footer-text/20 lg:flex-row lg:justify-between px-6">
  <p className={`font-inter text-footer-text text-center lg:text-left ${styles.footerLink}`}>
    © 2026 CargoLink Logistics. All rights reserved.
  </p>
  <div className="flex items-center gap-6">
    <a href="#" className={`font-inter text-footer-text cursor-pointer hover:text-accent transition-colors ${styles.footerLink}`}>
      Privacy Policy
    </a>
    <a href="#" className={`font-inter text-footer-text cursor-pointer hover:text-accent transition-colors ${styles.footerLink}`}>
      Terms of Service
    </a>
  </div>
</div>
</footer>
    </main>
  );
}