import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { ServiceDetailSection, SubService } from "@/components/ServiceDetailSection";
import { ServiceStickyNav } from "@/components/ServiceStickyNav";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import heroServices from "@/assets/hero-services.jpg";

// Icons
import {
  Cpu, Cog, Box, Wrench, Microscope, Factory,
  Zap, Palette, Printer, Scissors, Layers, ShieldCheck,
  Workflow, Truck, Ruler, Drill, Heater
} from "lucide-react";

// Data
const injectionMouldingSubs: SubService[] = [
  { title: "High-Volume Production", description: "Automated cells for consistent, high-speed manufacturing of millions of parts.", icon: Factory },
  { title: "Insert Moulding", description: "Combining metal and plastic for superior part strength and conductivity.", icon: Layers },
  { title: "Overmoulding", description: "Multi-material moulding for soft-touch grips and enhanced aesthetics.", icon: Layers },
  { title: "Prototype Moulding", description: "Rapid soft tooling for design validation before mass production.", icon: Box },
];

const contractMfgSubs: SubService[] = [
  { title: "OEM & ODM Services", description: "Full-service private labeling and custom product development.", icon: Cpu },
  { title: "Box Build Assembly", description: "Complete electromechanical assembly, testing, and packaging.", icon: Workflow },
  { title: "Global Sourcing", description: "Strategic procurement of components and raw materials.", icon: Truck },
  { title: "Quality Control", description: "ISO-certified inspection processes at every stage.", icon: ShieldCheck },
];

const precisionToolingSubs: SubService[] = [
  { title: "CAD/CAM Design", description: "Advanced 3D modeling and DFM analysis for optimized mould flow.", icon: Cpu },
  { title: "CNC Machining", description: "High-speed 5-axis milling for complex electrode and cavity creation.", icon: Drill },
  { title: "EDM Services", description: "Wire and sinker EDM for intricate details and tight tolerances.", icon: Zap },
  { title: "Mould Maintenance", description: "Comprehensive repair and preventative maintenance programs.", icon: Wrench },
];

const secondaryOpsSubs: SubService[] = [
  { title: "Ultrasonic Welding", description: "Permanent, clean bonding of plastic components without adhesives.", icon: Zap },
  { title: "Pad Printing", description: "High-quality transfer printing for logos and intricate designs.", icon: Printer },
  { title: "Painting & Coating", description: "UV coating, EMI shielding, and decorative spray painting.", icon: Palette },
  { title: "Laser Marking", description: "Permanent part identification and branding.", icon: Ruler },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <HeroBanner
          image={heroServices}
          title="Engineering Excellence"
          subtitle="Integrated manufacturing solutions powering the world's leading brands."
          tagline="Our Services"
        />

        <ServiceStickyNav />

        <ServiceDetailSection
          id="injection-moulding"
          title="Injection Moulding"
          description="Our core expertise lies in precision thermoplastic injection moulding. With a fleet of state-of-the-art machines ranging from 50 to 1000 tonnes, we cater to diverse industries including automotive, medical, and consumer electronics. Our scientific moulding process ensures part-to-part consistency, minimal waste, and optimal cycle times."
          image="https://images.unsplash.com/photo-1622359670081-3705abec939e?q=80&w=2609&auto=format&fit=crop"
          subServices={injectionMouldingSubs}
        />

        <ServiceDetailSection
          id="contract-manufacturing"
          title="Contract Manufacturing"
          description="We go beyond moulding to offer true end-to-end manufacturing solutions. From supply chain management to final assembly and logistics, we act as your strategic partner. Our flexible production lines adapt to your volume needs, ensuring you get market-ready products without the overhead of managing multiple vendors."
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
          subServices={contractMfgSubs}
          reversed
        />

        <ServiceDetailSection
          id="precision-tooling"
          title="Precision Tooling"
          description="The heart of quality moulding is a quality mould. Our in-house tool room is equipped with the latest Swiss and Japanese CNC and EDM centers. We design and build high-cavitation, multi-shot, and stack moulds with micron-level precision, guaranteed for millions of shots."
          image="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45f7?q=80&w=2574&auto=format&fit=crop"
          subServices={precisionToolingSubs}
        />

        <ServiceDetailSection
          id="secondary-operations"
          title="Secondary Operations"
          description="Transform moulded parts into finished products with our comprehensive value-added services. Whether it's complex assembly, decorative finishing, or functional bonding, our secondary operations are integrated directly into the production flow for maximum efficiency and quality control."
          image="https://images.unsplash.com/photo-1625835941916-cf30311f9e61?q=80&w=2487&auto=format&fit=crop"
          subServices={secondaryOpsSubs}
          reversed
        />

        <ServiceFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
