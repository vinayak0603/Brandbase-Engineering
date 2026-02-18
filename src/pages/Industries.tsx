import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import heroIndustries from "@/assets/hero-industries.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { industries } from "@/data/industries";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const packagingTabs = [
  {
    id: "packaging", // Matches industry ID for link
    label: "Cosmetic",
    description: "Premium packaging for beauty and cosmetic brands — jars, caps, compacts, and dispensers manufactured with precision and aesthetic finesse.",
    image: "https://ik.imagekit.io/vinayak06/Mavnox/luxury-cosmetic-packaging-mockup-set-branding.jpg"
  },
  {
    id: "packaging",
    label: "Pharma",
    description: "Pharmaceutical-grade packaging components including vials, caps, and containers that meet stringent health and safety standards.",
    image: "https://ik.imagekit.io/vinayak06/top-view-collection-tablets-medicine.jpg"
  },
  {
    id: "packaging",
    label: "Food & Beverage",
    description: "Food-safe containers, lids, and packaging accessories designed for durability and compliance with food contact regulations.",
    image: "https://ik.imagekit.io/vinayak06/close-up-futuristic-soft-drink.jpg"
  },
  {
    id: "packaging",
    label: "Homecare",
    description: "Robust and functional packaging for household cleaning products, detergent containers, and spray bottles.",
    image: "https://ik.imagekit.io/vinayak06/person-holds-cardboard-box-filled-with-ecofriendly-cleaning-products-natural-items-cozy-indoor-setting.jpg"
  },
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30">
      <Navbar />
      <main>
        <HeroBanner
          image={heroIndustries}
          tagline="Precision Engineering for Every Sector"
          title="Global Industries, Trusted Solutions"
          subtitle="We deliver uncompromising quality and technical excellence across diverse industry verticals worldwide."
          ctaText="Explore Our Capabilities"
          ctaLink="#packaging"
        />

        {/* Packaging Section - Featured */}
        <section id="packaging" className="py-32 bg-background relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/2" />

          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              label="Featured Sector"
              title="Advanced Packaging"
              description="Engineering complete packaging solutions for the world's most demanding sectors."
            />

            <div className="max-w-6xl mx-auto mt-16">
              {/* Tab Navigation */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-16 p-2 bg-muted/30 backdrop-blur-sm rounded-2xl border border-border/50 max-w-fit mx-auto">
                {packagingTabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === i
                      ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-card/30 backdrop-blur-sm border border-border/40 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5"
                >
                  <div className="relative group overflow-hidden rounded-3xl aspect-[16/10] lg:aspect-square">
                    <img
                      src={packagingTabs[activeTab].image}
                      alt={packagingTabs[activeTab].label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                      {packagingTabs[activeTab].label} Specialization
                    </div>

                    <h3 className="text-4xl font-bold text-foreground leading-tight">
                      Innovative <span className="text-secondary">{packagingTabs[activeTab].label}</span> Packaging Systems
                    </h3>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {packagingTabs[activeTab].description}
                    </p>

                    <div className="pt-4">
                      <Button asChild className="h-14 px-10 rounded-2xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all group">
                        <Link to={`/industries/${packagingTabs[activeTab].id}`}>
                          View Industry Details <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Other industries - Alternating Premium Layout */}
        <div className="divide-y divide-border/30">
          {industries.map((ind, i) => (
            <section
              key={ind.id}
              id={ind.id}
              className={`py-32 relative overflow-hidden ${i % 2 === 0 ? "bg-muted/30" : "bg-background"}`}
            >
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 group">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -z-10 w-2/3 h-2/3 border-4 border-secondary/20 rounded-[2rem] -bottom-6 ${i % 2 === 0 ? "-right-6" : "-left-6"}`} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-0.5 w-12 bg-secondary rounded-full" />
                      <p className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">Industry Solutions</p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                      {ind.title === "Architectural & Furniture Fittings" ? (
                        <>Architectural & <span className="text-secondary">Furniture</span></>
                      ) : (
                        <>{ind.title}</>
                      )}
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                      {ind.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild size="lg" className="rounded-2xl h-14 px-8 bg-foreground text-background font-bold hover:bg-foreground/90 transition-all group">
                        <Link to={`/industries/${ind.id}`}>
                          Explore Expertise <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 px-8 border-border text-foreground font-bold hover:bg-muted/50 transition-all">
                        <Link to="/contact">Technical Consultation</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
