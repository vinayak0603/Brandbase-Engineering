import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionTitle = ({ label, title, description, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    {label && <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">{label}</p>}
    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? "text-navy-foreground" : "text-foreground"}`}>{title}</h2>
    {description && <p className={`max-w-2xl mx-auto ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{description}</p>}
  </motion.div>
);

export default SectionTitle;
