import { useState, useEffect } from "react";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";
import SectionTitle from "@/components/SectionTitle";

// --- Data for the cards (Brandbase Engineering Context) ---
const testimonials = [
    {
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Rajesh Kumar",
        company: "AutoParts India",
        feedback: "Exceptional precision in our latest batch of automotive components. The injection moulding quality is top-notch.",
        mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Jenkins",
        company: "EduToys Global",
        feedback: "Brandbase helped us scale our toy production by 300% without compromising on safety or finish.",
        mainImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    },
    {
        profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
        name: "Amit Patel",
        company: "TechHouse Electronics",
        feedback: "The precision tooling for our new router enclosures was delivered ahead of schedule. Truly professional.",
        mainImage: "https://images.unsplash.com/photo-1563770095-39d468f9a51d?auto=format&fit=crop&w=800&q=80",
    },
    {
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        name: "David Chen",
        company: "Global MedTech",
        feedback: "Reliable partners for medical-grade plastic components. their quality assurance is impressive.",
        mainImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Priya Sharma",
        company: "HomeSolutions",
        feedback: "Innovative designs for our kitchenware line. The team understood our aesthetic requirements perfectly.",
        mainImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        name: "Elena Rodriguez",
        company: "PackIt Sustainable",
        feedback: "Great partners in developing our new line of recyclable packaging containers.",
        mainImage: "https://images.unsplash.com/photo-1605600659873-d808a13a4d2d?auto=format&fit=crop&w=800&q=80",
    },

];

// --- Reusable Card Component ---
const TestimonialCard = ({ profileImage, name, company, feedback, mainImage }: (typeof testimonials)[0]) => (
    <div className="relative rounded-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-[1.02] shadow-md hover:shadow-xl border border-border break-inside-avoid mb-6">
        <img
            src={mainImage}
            alt={feedback}
            className="w-full h-auto object-cover min-h-[500px]"
            onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Image';
            }}
        />
        {/* Gradient Overlay - Top Down */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent opacity-90" />

        {/* Content - Top Aligned */}
        <div className="absolute top-0 left-0 w-full p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={profileImage}
                    className="w-8 h-8 rounded-full border border-white/80"
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/40x40/EFEFEF/333333?text=User';
                    }}
                />
                <div>
                    <span className="block font-bold text-sm text-white leading-none">{name}</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider">{company}</span>
                </div>
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/95 drop-shadow-sm">{feedback}</p>
        </div>
    </div>
);

const TestimonialSection = () => {
    const [columns, setColumns] = useState(3);

    // Function to determine columns based on screen width
    const getColumns = (width: number) => {
        if (width < 640) return 1;    // sm
        if (width < 1024) return 2;   // lg
        return 3;                     // xl and up
    };

    useEffect(() => {
        const handleResize = () => {
            setColumns(getColumns(window.innerWidth));
        };

        handleResize(); // Set initial columns on mount

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionTitle
                    label="Client Success"
                    title="Trusted by Industry Leaders"
                    description="Discover how we help businesses shape their vision into reality through precision engineering."
                />

                <div className="mt-10">
                    <MasonryGrid columns={columns} gap={6}>
                        {testimonials.map((card, index) => (
                            <TestimonialCard key={index} {...card} />
                        ))}
                    </MasonryGrid>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
