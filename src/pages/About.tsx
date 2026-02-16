import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import AboutUsSection from "@/components/AboutUsSection";
import heroAbout from "@/assets/hero-about.jpg";
import BrandbaseLogo from "@/assets/BrandbaseEngineeringLogo.png";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner image={heroAbout} title="About Brandbase Engineering" subtitle="A legacy of excellence in precision manufacturing." />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Legacy of Excellence / Story */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl"></div>
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="Engineering Story" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="h-16 w-16 rounded-2xl bg-white shadow-xl flex items-center justify-center p-3 mb-4">
                      <img src={BrandbaseLogo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-secondary font-bold text-xl">The Brandbase Legacy</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <p className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-px bg-secondary"></span> OUR GENESIS
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none">
                  Architecting <br /><span className="text-secondary">Industrial Perfection</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a vision to revolutionize the precision engineering landscape, **Brandbase Engineering** has evolved from a specialized tool room into a comprehensive manufacturing powerhouse. Our DNA is encoded with a commitment to zero-defect quality and technical foresight.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we stand at the intersection of traditional craftsmanship and digital manufacturing. By integrating decades of tribal knowledge with AI-driven optimization, we deliver components that don't just fit—they redefine efficiency.
                </p>
                <div className="pt-4">
                  <motion.button
                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Capability Profile <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facility & Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle label="Our Facility" title="World-Class Infrastructure" description="Our manufacturing facility is equipped with the latest technology and adheres to international quality standards." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: "50+", label: "Moulding Machines" },
                { value: "25,000", label: "Sq. Ft. Facility" },
                { value: "ISO 9001", label: "Certified" },
                { value: "200+", label: "Team Members" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <p className="text-3xl font-bold text-secondary mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
