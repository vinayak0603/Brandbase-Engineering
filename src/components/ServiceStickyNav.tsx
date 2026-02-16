import { motion } from "framer-motion";
import { Link } from "react-scroll";

const links = [
    { to: "injection-moulding", label: "Injection Moulding" },
    { to: "contract-manufacturing", label: "Contract Mfg" },
    { to: "precision-tooling", label: "Tooling" },
    { to: "secondary-operations", label: "Secondary Ops" },
    { to: "faq", label: "FAQ" },
];

export function ServiceStickyNav() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border py-4 hidden lg:block"
        >
            <div className="container mx-auto px-4 flex justify-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="text-muted-foreground hover:text-primary font-medium cursor-pointer transition-colors text-sm uppercase tracking-wider"
                        activeClass="text-primary font-bold"
                        spy={true}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
