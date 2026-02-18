import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import AboutMission from "@/components/AboutMission";
import AboutStats from "@/components/AboutStats";
import OurValues from "@/components/OurValues";
import AboutCTA from "@/components/AboutCTA";
import heroAbout from "@/assets/hero-about.jpg";
import BrandbaseLogo from "@/assets/BrandbaseEngineeringLogo.png";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner image={heroAbout} title="About Brandbase Engineering" subtitle="A legacy of excellence in precision manufacturing." />

        <AboutMission />
        <AboutStats />

        {/* Our Values Section */}
        <OurValues />

        {/* New About CTA */}
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
