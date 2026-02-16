import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Brandbase Engineering</h3>
                        <p className="text-sm text-primary-foreground/80">
                            Crafting precision, shaping innovation through world-class plastic injection moulding solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Injection Moulding</li>
                            <li>Contract Manufacturing</li>
                            <li>Precision Tooling</li>
                            <li>Secondary Operations</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li>Email: info@brandbase.com</li>
                            <li>Phone: +91 XXX XXX XXXX</li>
                            <li>Location: India</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Brandbase Engineering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
