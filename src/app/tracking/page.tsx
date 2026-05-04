import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "@/app/typography.module.css";

const mockShipment = {
  id: "CLK-2026-884219",
  status: "In Transit",
  from: "Lagos, NG",
  to: "London, UK",
  mode: "Sea Freight",
  weight: "1,200 kg",
  dimensions: "120 x 80 x 100 cm",
  eta: "May 9, 2026",
  timeline: [
    {
      title: "Shipment Picked Up",
      location: "Lagos, NG",
      date: "May 1, 2026",
      time: "08:30 AM",
      completed: true,
    },
    {
      title: "Departed Origin Port",
      location: "Apapa Port, Lagos",
      date: "May 2, 2026",
      time: "02:15 PM",
      completed: true,
    },
    {
      title: "In Transit",
      location: "Atlantic Ocean",
      date: "May 3, 2026",
      time: "09:00 AM",
      completed: true,
      current: true,
    },
    {
      title: "Arriving Destination Port",
      location: "Felixstowe, UK",
      date: "Est. May 7, 2026",
      time: "",
      completed: false,
    },
    {
      title: "Out for Delivery",
      location: "London, UK",
      date: "Est. May 8, 2026",
      time: "",
      completed: false,
    },
    {
      title: "Delivered",
      location: "London, UK",
      date: "Est. May 9, 2026",
      time: "",
      completed: false,
    },
  ],
};

export default function TrackingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar variant="solid" />

      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto flex flex-col gap-10">

        {/* Back to Home */}
        <Link
          href="/"
          className="flex items-center gap-2 text-text-subtle font-inter text-sm hover:text-accent transition-colors w-fit"
        >
          ← Back to Home
        </Link>

        {/* Hero Area */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className={`font-urbanist font-bold text-text-heading ${styles.reliabilityHeading}`}>
              Tracking ID: {mockShipment.id}
            </h1>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-inter text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#05DF72]"></span>
              {mockShipment.status}
            </span>
          </div>
          <p className={`font-inter text-text-subtle ${styles.sectionSubtext}`}>
            Your shipment is on its way — here's a full breakdown of its journey.
          </p>
        </div>

        {/* Shipment Details Card */}
        <div className="bg-light-shade rounded-2xl p-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>From</span>
            <span className={`font-inter font-semibold text-text-heading ${styles.featureHeading}`}>{mockShipment.from}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>To</span>
            <span className={`font-inter font-semibold text-text-heading ${styles.featureHeading}`}>{mockShipment.to}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>Mode</span>
            <span className={`font-inter font-semibold text-text-heading ${styles.featureHeading}`}>{mockShipment.mode}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>ETA</span>
            <span className={`font-inter font-semibold text-accent ${styles.featureHeading}`}>{mockShipment.eta}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>Weight</span>
            <span className={`font-inter font-semibold text-text-heading ${styles.featureHeading}`}>{mockShipment.weight}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`font-inter text-text-subtle ${styles.footerLink}`}>Dimensions</span>
            <span className={`font-inter font-semibold text-text-heading ${styles.featureHeading}`}>{mockShipment.dimensions}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          <h2 className={`font-urbanist font-semibold text-text-heading mb-6 ${styles.reliabilityHeading}`}>
            Shipment Timeline
          </h2>

          <div className="relative flex flex-col">
            {mockShipment.timeline.map((step, index) => (
              <div key={index} className="flex gap-4 relative">

                {/* Line + Circle */}
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full shrink-0 mt-1 z-10 ${
                    step.current
                      ? "bg-accent ring-4 ring-accent/20"
                      : step.completed
                      ? "bg-accent"
                      : "bg-light-shade border-2 border-text-light"
                  }`} />
                  {index < mockShipment.timeline.length - 1 && (
                    <div className={`w-0.5 flex-1 my-1 ${
                      step.completed ? "bg-accent" : "bg-light-shade"
                    }`} />
                  )}
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-1 pb-8 ${
                  step.current ? "opacity-100" : step.completed ? "opacity-100" : "opacity-40"
                }`}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-inter font-semibold text-text-heading ${styles.bulletHeading}`}>
                      {step.title}
                    </h3>
                    {step.current && (
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-inter text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className={`font-inter text-text-subtle ${styles.footerLink}`}>
                    {step.location}
                  </p>
                  <p className={`font-inter text-text-light ${styles.footerLink}`}>
                    {step.date}{step.time && ` — ${step.time}`}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <Link
          href="/"
          className={`cursor-pointer flex items-center justify-center gap-2 bg-text-heading text-background font-inter font-semibold rounded-xl w-full lg:w-60 h-12 hover:opacity-90 transition-all ${styles.learnBtn}`}
        >
          ← Back to Home
        </Link>

      </div>
    </main>
  );
}