import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import heroIndustries from "@/assets/hero-industries.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const packagingTabs = [
  { label: "Cosmetic", description: "Premium packaging for beauty and cosmetic brands — jars, caps, compacts, and dispensers manufactured with precision and aesthetic finesse.", image: gallery1 },
  { label: "Pharma", description: "Pharmaceutical-grade packaging components including vials, caps, and containers that meet stringent health and safety standards.", image: gallery1 },
  { label: "Food & Beverage", description: "Food-safe containers, lids, and packaging accessories designed for durability and compliance with food contact regulations.", image: gallery1 },
  { label: "Homecare", description: "Robust and functional packaging for household cleaning products, detergent containers, and spray bottles.", image: gallery1 },
];

const industries = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description: "We manufacture precision plastic components for consumer electronics including casings, connectors, switches, and internal mounting brackets. Our advanced moulding capabilities ensure tight tolerances and excellent surface finishes required by the electronics industry.",
    image: gallery2,
  },
  {
    id: "household",
    title: "Household Products",
    description: "From kitchen storage containers to bathroom accessories, we produce a wide range of household products that combine functionality with appealing design. Our expertise ensures durability, safety, and aesthetic quality in every product.",
    image: gallery3,
  },
  {
    id: "architectural",
    title: "Architectural & Furniture Fittings",
    description: "We supply high-quality plastic fittings for the architectural and furniture industry including handles, brackets, connectors, and decorative trims. Our products meet exacting standards for strength, finish, and dimensional accuracy.",
    image: gallery4,
  },
  {
    id: "toys",
    title: "Toys",
    description: "Safe, vibrant, and innovative — our toy components and assemblies are manufactured to international safety standards. We work with toy designers and brands to bring creative concepts to life with high-quality moulded parts.",
    image: gallery5,
  },
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner image={heroIndustries} title="Industries We Serve" subtitle="Delivering precision plastic solutions across diverse industry verticals." />

        {/* Packaging */}
        <section id="packaging" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle label="Industry" title="Packaging" description="Complete packaging solutions for cosmetic, pharma, food & beverage, and homecare industries." />
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 mb-8 flex-wrap justify-center">
                {packagingTabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-5 py-2 rounded text-sm font-semibold transition-colors ${
                      activeTab === i ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src={packagingTabs[activeTab].image} alt={packagingTabs[activeTab].label} className="rounded-lg shadow-md w-full h-64 object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{packagingTabs[activeTab].label} Packaging</h3>
                  <p className="text-muted-foreground leading-relaxed">{packagingTabs[activeTab].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other industries */}
        {industries.map((ind, i) => (
          <section key={ind.id} id={ind.id} className={`py-20 ${i % 2 === 0 ? "bg-muted" : "bg-background"}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
                <motion.img
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  src={ind.image}
                  alt={ind.title}
                  className="rounded-lg shadow-md w-full h-72 object-cover"
                  style={{ direction: "ltr" }}
                />
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ direction: "ltr" }}>
                  <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">Industry</p>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{ind.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
