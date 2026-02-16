import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandbaseLogo from "@/assets/BrandbaseEngineeringLogo-removebg-preview.png";
import { Menu, MenuItem, ProductItem } from "@/components/ui/NavbarMenu";

// Service Images
import imgInjectionMould from "@/assets/services/InjectionMould.jpg";
import imgContractManufacturing from "@/assets/services/ContractManufacturing.jpg";
import imgPrecisionTooling from "@/assets/services/PrecisionTooling.jpg";
import imgSecondaryOperation from "@/assets/services/SecondaryOperation.jpg";

// Industry Images
import imgToyManufacturing from "@/assets/Industries/toyManufacturing.jpg";

type NavItem = {
  label: string;
  href?: string;
  children?: {
    title: string;
    href: string;
    src: string;
    description: string;
  }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    children: [
      {
        title: "Injection Moulding",
        href: "/services#injection-moulding",
        src: imgInjectionMould,
        description: "Precision parts in high volumes with 50-1000 tonne machines using world-class equipment.",
      },
      {
        title: "Contract Manufacturing",
        href: "/services#contract-manufacturing",
        src: imgContractManufacturing,
        description: "Complete end-to-end manufacturing solutions from initial concept to global delivery.",
      },
      {
        title: "Precision Tooling",
        href: "/services#precision-tooling",
        src: imgPrecisionTooling,
        description: "High-precision mould design and manufacturing with in-house CNC and EDM capabilities.",
      },
      {
        title: "Secondary Operations",
        href: "/services#secondary-operations",
        src: imgSecondaryOperation,
        description: "Value-added assembly, finishing, and specialized joining techniques for complex projects.",
      },
    ],
  },
  {
    label: "Industries",
    children: [
      {
        title: "Packaging",
        href: "/industries#packaging",
        src: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=400&auto=format&fit=crop",
        description: "Delivering innovative, high-quality packaging solutions with precision & reliability.",
      },
      {
        title: "Consumer Electronics",
        href: "/industries#consumer-electronics",
        src: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400&auto=format&fit=crop",
        description: "Custom plastic enclosures tailored from concept to production with precision & care.",
      },
      {
        title: "Household Products",
        href: "/industries#household",
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
        description: "Crafting safe, ergonomic, & aesthetic household products for leading Indian brands.",
      },
      {
        title: "Architectural & Furniture",
        href: "/industries#architectural",
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400&auto=format&fit=crop",
        description: "Reliable, cost-effective plastic components revolutionizing hardware and fittings.",
      },
      {
        title: "Toys",
        href: "/industries#toys",
        src: imgToyManufacturing,
        description: "Crafting safe, durable, and vibrant moulded toys with extreme precision & expertise.",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileItem = (label: string) => {
    setMobileActive(mobileActive === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <img src={BrandbaseLogo} alt="Brandbase Engineering" className="h-[40px] xs:h-[50px] md:h-[100px] w-auto object-contain" />
            <div className="ml-2 hidden lg:block">
              <span className="text-primary font-bold text-lg leading-tight block">Brandbase Engineering</span>
              <span className="text-secondary text-[10px] tracking-widest uppercase">Precision Engineering</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full">
          <Menu setActive={setActive}>
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <MenuItem key={item.label} setActive={setActive} active={active} item={item.label}>
                  <div className={`grid gap-6 ${item.label === "Services" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-5"}`}>
                    {item.children.map((child) => (
                      <ProductItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                        src={child.src}
                        description={child.description}
                      />
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`text-base font-semibold transition-colors px-4 py-2 ${isActive(item.href!) ? "text-secondary" : "text-primary hover:text-secondary"}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </Menu>

          <Link to="/contact" className="ml-8 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:bg-secondary/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary p-2">
          {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="flex items-center justify-between w-full py-3 text-primary font-medium hover:text-secondary transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${mobileActive === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileActive === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gray-50/50 rounded-lg"
                          >
                            <div className="flex flex-col space-y-3 p-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  to={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-sm text-gray-600 hover:text-secondary py-1 pl-2 border-l-2 border-transparent hover:border-secondary transition-all"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 font-medium transition-colors ${isActive(item.href!) ? "text-secondary" : "text-primary hover:text-secondary"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-secondary text-secondary-foreground text-center py-3 rounded-lg font-bold shadow-md hover:bg-secondary/90 transition-transform active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
