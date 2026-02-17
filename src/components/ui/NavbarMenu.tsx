import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
    duration: 0.15,
    ease: "easeOut",
} as const;

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="h-full flex items-center">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-primary hover:text-secondary transition-colors text-base font-semibold px-4 py-2"
            >
                {item}
            </motion.p>
            <AnimatePresence>
                {active === item && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={transition}
                        className="absolute top-full left-0 right-0 w-full bg-white border-b border-border shadow-2xl z-40 overflow-hidden"
                    >
                        <div className="container mx-auto py-8 px-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="flex items-center space-x-2 h-full"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link to={href} className="flex flex-col space-y-4 group">
            <div className="flex-shrink-0 rounded-xl overflow-hidden bg-muted w-full aspect-video shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                    src={src}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, to, ...rest }: any) => {
    return (
        <Link
            to={to}
            {...rest}
            className="text-muted-foreground hover:text-secondary transition-colors text-base font-medium"
        >
            {children}
        </Link>
    );
};
