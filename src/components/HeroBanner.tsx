import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

interface HeroBannerProps {
  image: string;
  video?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroBanner = ({
  image,
  video,
  tagline,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroBannerProps) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        {/* Dark overlay specifically tuned to match the reference image */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          {tagline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <span className="text-white/80 font-medium tracking-wide bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">
                {tagline}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {title.split(",")[0]}
            {title.includes(",") && (
              <span className="block font-serif italic font-normal mt-2 text-white/90">
                {title.split(",")[1]}
              </span>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-bold text-base transition-all transform hover:scale-105"
              >
                {ctaText}
              </Link>
            )}

            {/* Secondary Button - Keep existing functionality or default to a video/action */}
            <button
              className="group flex items-center gap-3 bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-base transition-all backdrop-blur-sm"
              onClick={() => console.log("Play video")} // Placeholder for video functionality
            >
              <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              {secondaryCtaText || "Watch functionality"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
