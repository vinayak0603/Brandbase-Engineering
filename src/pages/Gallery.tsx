import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { GalleryItem, GalleryItemData } from "@/components/GalleryItem";

// Assets
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import tooling1 from "@/assets/tooling-1.jpg";
import tooling2 from "@/assets/tooling-2.jpg";
import heroHome from "@/assets/hero-home.jpg";
// import heroServices from "@/assets/hero-services.jpg"; // defined but unused in original, keeping it just in case or removing if not needed.
const packaging = "https://images.pexels.com/photos/5025483/pexels-photo-5025483.jpeg";

// Dummy Video Data (You can replace these with actual assets)
const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-factory-conveyor-belt-package-line-44672-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-3d-printer-nozzle-31846-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-industrial-robot-arm-in-factory-42867-large.mp4"
];

const galleryItems: GalleryItemData[] = [
  { id: 1, type: "image", src: gallery1, title: "Precision Components", alt: "Packaging products" },
  { id: 2, type: "video", src: videos[0], title: "Assembly Line", alt: "Factory conveyor belt" },
  { id: 3, type: "image", src: gallery2, title: "Electronic Housing", alt: "Electronics components" },
  { id: 4, type: "image", src: heroHome, title: "Our Facility", alt: "Manufacturing facility" },
  { id: 5, type: "image", src: gallery3, title: "Home Essentials", alt: "Household products" },
  { id: 6, type: "video", src: videos[1], title: "3D Prototyping", alt: "3D printer nozzle" },
  { id: 7, type: "image", src: tooling1, title: "Tooling Shop", alt: "Precision tooling" },
  { id: 8, type: "image", src: gallery4, title: "Architectural Fittings", alt: "Architectural fittings" },
  { id: 9, type: "image", src: gallery5, title: "Toy Manufacturing", alt: "Toy components" },
  { id: 10, type: "video", src: videos[2], title: "Robotic Automation", alt: "Industrial robot arm" },
  { id: 11, type: "image", src: gallery6, title: "Quality Control", alt: "Quality inspection" },
  { id: 12, type: "image", src: tooling2, title: "Moulding Process", alt: "Injection moulding" },
  { id: 13, type: "image", src: packaging, title: "Sustainable Packaging", alt: "Packaging solutions" },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItemData | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionTitle
              label="Our Portfolio"
              title="Gallery"
              description="Explore our diverse range of projects, displaying our expertise in plastic injection moulding and contract manufacturing."
            />

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mx-auto">
              {galleryItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <GalleryItem
                    item={item}
                    onClick={setSelectedItem}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Improved Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                    controls
                    autoPlay
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                )}
                {selectedItem.title && (
                  <div className="mt-4 text-white text-center">
                    <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
                    {selectedItem.alt && <p className="text-white/70 mt-1">{selectedItem.alt}</p>}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
