
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export interface MediaItem {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

export interface TestimonialData {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
}

export interface IndustryData {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
    tableData: {
        feature: string;
        specification: string;
    }[];
    aeoUserQuestions: {
        question: string;
        answer: string;
    }[];
    contentSections: {
        heading: string;
        text: string;
    }[];
    galleryItems: MediaItem[];
    testimonials: TestimonialData[];
}

export const industries: IndustryData[] = [
    {
        id: "consumer-electronics",
        title: "Consumer Electronics",
        shortDescription: "We manufacture precision plastic components for consumer electronics including casings, connectors, switches, and internal mounting brackets. Our advanced moulding capabilities ensure tight tolerances and excellent surface finishes required by the electronics industry.",
        longDescription: "In the fast-paced world of consumer electronics, precision and aesthetics are paramount. Brandname Engineering delivers high-fidelity plastic components that meet the rigorous demands of global tech giants. From intricate internal connectors to flawlessly finished external casings, our moulding solutions are designed to enhance both the functionality and the visual appeal of your devices.",
        image: "https://ik.imagekit.io/vinayak06/minimal-tech-setup-with-earbuds%20(1).jpg",
        seo: {
            title: "Precision Plastic Components for Consumer Electronics | Brandname Engineering",
            description: "Top-tier plastic moulding for consumer electronics. Casings, connectors, and mounting brackets with aerospace-grade precision.",
            keywords: ["consumer electronics plastic moulding", "electronic casings", "precision connectors", "plastic injection moulding electronics"],
        },
        tableData: [
            { feature: "Material", specification: "Polycarbonate (PC), ABS, PC/ABS Blends" },
            { feature: "Tolerance", specification: "±0.05mm" },
            { feature: "Surface Finish", specification: "High Gloss, Matte, Texture VDI 3400" },
            { feature: "Production Volume", specification: "High Volume (1M+ units/year)" },
        ],
        aeoUserQuestions: [
            {
                question: "Why is precision moulding critical for consumer electronics?",
                answer: "Precision moulding ensures that internal components fit perfectly, preventing assembly issues and ensuring the longevity of the device. It also guarantees a premium look and feel for external parts, which is crucial for consumer perception."
            },
            {
                question: "What materials are best for electronic casings?",
                answer: "Polycarbonate (PC) and ABS are industry standards due to their high impact resistance, excellent thermal stability, and ability to achieve high-quality surface finishes."
            }
        ],
        contentSections: [
            {
                heading: "Engineering for the Future of Tech",
                text: "Our facilities are equipped with state-of-the-art electric injection moulding machines that offer unparalleled repeatability. We understand that in consumer electronics, a fraction of a millimeter can be the difference between a product that feels premium and one that feels cheap."
            },
            {
                heading: "Sustainable Manufacturing",
                text: "We are committed to sustainable practices. Our production lines optimize energy consumption, and we offer moulding with recycled materials (PCR) without compromising on quality or aesthetics."
            }
        ],
        galleryItems: [
            {
                id: 1,
                type: "image",
                title: "Precision Casings",
                desc: "High-gloss smartphone back covers with zero-defect finish.",
                url: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800",
                span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 2,
                type: "video",
                title: "Automated Assembly",
                desc: "High-speed robotic handling for electronic connectors.",
                url: "https://cdn.pixabay.com/video/2019/11/02/28551-370505929_large.mp4",
                span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
                id: 3,
                type: "image",
                title: "Internal Components",
                desc: "Micro-tolerance internal mounting brackets.",
                url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
                span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
            },
            {
                id: 4,
                type: "image",
                title: "Quality Control",
                desc: "Automated optical inspection for every component.",
                url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
                span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
            }
        ],
        testimonials: [
            {
                quote: "The precision of their connectors is industry-leading. We've seen a 30% reduction in assembly defects since switching.",
                author: "James Wilson",
                role: "Operations Lead",
                company: "TechFlow Systems",
                avatar: "https://i.pravatar.cc/150?u=ce1",
            },
            {
                quote: "Flawless surface finish on our high-end smartphone casings. Truly professional engineering.",
                author: "Lily Chen",
                role: "Product Designer",
                company: "Apex Mobile",
                avatar: "https://i.pravatar.cc/150?u=ce2",
            },
            {
                quote: "Incredible repeatability on micro-mounting brackets. Their output is consistently perfect.",
                author: "Marcus Thorne",
                role: "Senior Engineer",
                company: "Quantum Electrics",
                avatar: "https://i.pravatar.cc/150?u=ce3",
            },
            {
                quote: "Brandbase understands the tight tolerances required by high-density electronics better than anyone.",
                author: "Elena Zhao",
                role: "CTO",
                company: "CircuitPro",
                avatar: "https://i.pravatar.cc/150?u=ce4",
            },
            {
                quote: "The thermal stability of the polymers they recommended for our server racks was exactly what we needed.",
                author: "David Vane",
                role: "Hardware Architect",
                company: "DataNode Solutions",
                avatar: "https://i.pravatar.cc/150?u=ce5",
            },
            {
                quote: "Fast prototyping and reliable mass production. A perfect partner for our rapid product cycles.",
                author: "Sarah Kim",
                role: "Product Manager",
                company: "SwiftGadget",
                avatar: "https://i.pravatar.cc/150?u=ce6",
            },
            {
                quote: "Their clean-room moulding process ensures our sensitive sensors remain uncontaminated.",
                author: "Robert Miller",
                role: "QA Director",
                company: "SensorTech",
                avatar: "https://i.pravatar.cc/150?u=ce7",
            },
            {
                quote: "The aesthetic quality of our wearable device casings is world-class. Customers love the finish.",
                author: "Anya Ivanova",
                role: "Creative Director",
                company: "VogueWearable",
                avatar: "https://i.pravatar.cc/150?u=ce8",
            },
            {
                quote: "Switching to Brandbase for our audio housing components improved acoustic performance significantly.",
                author: "Thomas Wright",
                role: "Acoustic Engineer",
                company: "SonicMaster",
                avatar: "https://i.pravatar.cc/150?u=ce9",
            },
            {
                quote: "Their commitment to using high-grade recycled plastics for our eco-line was a game changer.",
                author: "Oliver Green",
                role: "Sustainability Lead",
                company: "EcoTech Devices",
                avatar: "https://i.pravatar.cc/150?u=ce10",
            }
        ]
    },
    {
        id: "household",
        title: "Household Products",
        shortDescription: "From kitchen storage containers to bathroom accessories, we produce a wide range of household products that combine functionality with appealing design. Our expertise ensures durability, safety, and aesthetic quality in every product.",
        longDescription: "Household products need to survive the rigors of daily use while looking great on the shelf. We specialize in durable, safe, and aesthetically pleasing plastic products for the modern home. Whether it's food-safe storage or ergonomic cleaning tools, we bring functionality and design together.",
        image: gallery3,
        seo: {
            title: "Durable Plastic Household Product Manufacturing | Brandname Engineering",
            description: "Custom manufacturing for household plastics. Kitchenware, bathroom accessories, and storage solutions designed for durability.",
            keywords: ["household plastic products", "kitchenware manufacturing", "durable plastic containers", "custom household moulding"],
        },
        tableData: [
            { feature: "Material", specification: "Polypropylene (PP), HDPE, LDPE" },
            { feature: "Safety Standard", specification: "FDA Approved, BPA Free" },
            { feature: "Durability", specification: "Impact Resistant, Dishwasher Safe" },
            { feature: "Customization", specification: "In-mould Labeling (IML), Custom Colors" },
        ],
        aeoUserQuestions: [
            {
                question: "Are your household plastic products food safe?",
                answer: "Yes, we exclusively use FDA-approved, BPA-free materials for all food-contact products to ensure the highest safety standards for families."
            },
            {
                question: "Can you manufacture custom colors for household brands?",
                answer: "Absolutely. We offer complete color matching services to ensure your product aligns perfectly with your brand identity."
            }
        ],
        contentSections: [
            {
                heading: "Functional Meets Aesthetical",
                text: "We believe that practical items doesn't have to be boring. Our design-for-manufacturing process optimizes your household products for mass production while retaining the sleek curves and ergonomic features that customers love."
            },
            {
                heading: "Built to Last",
                text: "Durability is key in the household sector. We rigorously test our materials and designs to ensure they withstand daily wear and tear, high temperatures in dishwashers, and exposure to common household chemicals."
            }
        ],
        galleryItems: [
            {
                id: 1,
                type: "image",
                title: "Modern Kitchenware",
                desc: "Ergonomic designs for daily kitchen efficiency.",
                url: "https://ik.imagekit.io/vinayak06/3d-rendering-personal-care-products-fondant-pink.jpg",
                span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
                id: 2,
                type: "video",
                title: "Durability Test",
                desc: "High-impact testing for household storage products.",
                url: "https://ik.imagekit.io/vinayak06/0_White_Background_Housework_1080x1920.mov",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 3,
                type: "image",
                title: "Color Precision",
                desc: "Perfect brand matching with premium colorants.",
                url: "https://ik.imagekit.io/vinayak06/there-are-two-bottles-baby-lotion-shelf.jpg",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 4,
                type: "image",
                title: "Ergonomic Bathware",
                desc: "Precision moulded accessories for modern bathrooms.",
                url: "https://ik.imagekit.io/vinayak06/close-up-futuristic-soft-drink.jpg",
                span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
            }
        ],
        testimonials: [
            {
                quote: "Durable, food-safe, and aesthetically pleasing. Brandname helped us launch our latest kitchen line in record time.",
                author: "Sarah Meyer",
                role: "Global Sourcing",
                company: "HomeCraft Intl",
                avatar: "https://i.pravatar.cc/150?u=hh1",
            },
            {
                quote: "Their color matching is perfection. Our containers look exactly as planned across all production batches.",
                author: "David Miller",
                role: "Quality Manager",
                company: "PureLiving",
                avatar: "https://i.pravatar.cc/150?u=hh2",
            },
            {
                quote: "The ergonomics of the handles they moulded for our cleaning range are simply outstanding.",
                author: "Jessica Alba",
                role: "Design Lead",
                company: "CleanSweep",
                avatar: "https://i.pravatar.cc/150?u=hh3",
            },
            {
                quote: "We needed BPA-free, high-impact plastic for our baby range. Brandbase delivered on every count.",
                author: "Michael Bay",
                role: "Supply Chain Head",
                company: "ToddlerSafe",
                avatar: "https://i.pravatar.cc/150?u=hh4",
            },
            {
                quote: "Their in-mould labeling (IML) technology gives our products a premium look that lasts for years.",
                author: "Chloe Grace",
                role: "Marketing Director",
                company: "KitchnStyle",
                avatar: "https://i.pravatar.cc/150?u=hh5",
            },
            {
                quote: "Reliable production for our high-volume garden accessories. They never miss a deadline.",
                author: "Frank Castle",
                role: "Ops Director",
                company: "GreenThumb",
                avatar: "https://i.pravatar.cc/150?u=hh6",
            },
            {
                quote: "The structural integrity of their storage bins is far superior to our previous suppliers.",
                author: "Linda Hamilton",
                role: "Warehouse Manager",
                company: "SpaceCreators",
                avatar: "https://i.pravatar.cc/150?u=hh7",
            },
            {
                quote: "Exceptional surface quality on our bathroom accessory line. It has significantly boosted our sales.",
                author: "George Miller",
                role: "Product Owner",
                company: "BathLux",
                avatar: "https://i.pravatar.cc/150?u=hh8",
            },
            {
                quote: "Their engineering team optimized our designs for faster moulding cycles, saving us 15% in costs.",
                author: "Tom Hardy",
                role: "Efficiency Specialist",
                company: "EuroHome",
                avatar: "https://i.pravatar.cc/150?u=hh9",
            },
            {
                quote: "Brandbase is our go-to partner for all custom household moulding requirements.",
                author: "Uma Thurman",
                role: "Founder",
                company: "AstroKitchen",
                avatar: "https://i.pravatar.cc/150?u=hh10",
            }
        ]
    },

    {
        id: "architectural",
        title: "Architectural & Furniture Fittings",
        shortDescription: "We supply high-quality plastic fittings for the architectural and furniture industry including handles, brackets, connectors, and decorative trims. Our products meet exacting standards for strength, finish, and dimensional accuracy.",
        longDescription: "In architecture and furniture design, the details make the design. Our architectural fittings and furniture components are engineered to support structure while enhancing style. We provide high-strength, precision-moulded parts that architects and designers trust.",
        image: gallery4,
        seo: {
            title: "Architectural & Furniture Plastic Fittings | Brandname Engineering",
            description: "High-strength plastic fittings for furniture and architecture. Handles, brackets, and decorative trims with precision moulding.",
            keywords: ["architectural plastic fittings", "furniture components", "plastic handles", "precision construction parts"],
        },
        tableData: [
            { feature: "Material", specification: "Nylon (PA6, PA66), Glass-Filled Nylon, POM" },
            { feature: "Load Capacity", specification: "Structural Grade" },
            { feature: "UV Resistance", specification: "UV Stabilized Options Available" },
            { feature: "Finish", specification: "Matte, Textured, Chrome-Platability" },
        ],
        aeoUserQuestions: [
            {
                question: "What makes plastic fittings suitable for furniture?",
                answer: "Modern engineering plastics like Glass-Filled Nylon offer strength comparable to metal but with lighter weight, corrosion resistance, and greater design flexibility."
            },
            {
                question: "Do you offer UV-resistant components for outdoor furniture?",
                answer: "Yes, we utilize UV-stabilized additives to prevent degradation and color fading, making our components ideal for outdoor architectural and furniture applications."
            }
        ],
        contentSections: [
            {
                heading: "Strength in Design",
                text: "Our structural components are not just plastic; they are engineered polymers. By reinforcing materials with glass fibers, we achieve load-bearing capabilities that rival die-cast metals, offering a lightweight yet robust alternative for modern furniture design."
            },
            {
                heading: "A Perfect Finish",
                text: "We understand that in furniture, touch is as important as sight. Our surface finishing technologies ensure that handles, knobs, and trims have a premium tactile feel, whether it's a soft-touch matte or a high-gloss polish."
            }
        ],
        galleryItems: [
            {
                id: 1,
                type: "image",
                title: "Architectural Fittings",
                desc: "High-strength glass-filled nylon brackets for modern construction.",
                url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800",
                span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
                id: 2,
                type: "image",
                title: "Furniture Trims",
                desc: "Decorative trims with superior surface finish and tactile feel.",
                url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 4,
                type: "image",
                title: "Precision Hardware",
                desc: "Highly accurate internal connectors for modular systems.",
                url: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=800",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 3,
                type: "video",
                title: "Structural Strength",
                desc: "Load testing on structural plastic connectors.",
                url: "https://ik.imagekit.io/vinayak06/0_Furniture_Wood_3840x2160.mov",
                span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
            }
        ],
        testimonials: [
            {
                quote: "Their structural plastic fittings gave our furniture the stability of metal without the weight. Remarkable engineering.",
                author: "Robert Stark",
                role: "Chief Architect",
                company: "ModernSpaces",
                avatar: "https://i.pravatar.cc/150?u=af1",
            },
            {
                quote: "Precision brackets that make on-site assembly a breeze. The consistency is unparalleled.",
                author: "Emma Thompson",
                role: "Design Director",
                company: "UrbanFit",
                avatar: "https://i.pravatar.cc/150?u=af2",
            },
            {
                quote: "The UV resistance of their outdoor architectural trims has been proven over 3 years in extreme sun.",
                author: "Chris Evans",
                role: "Project Manager",
                company: "ExteriorDesign",
                avatar: "https://i.pravatar.cc/150?u=af3",
            },
            {
                quote: "Glass-filled nylon components from Brandbase have replaced our aluminum parts with zero loss in performance.",
                author: "Scarlett Joh",
                role: "Materials Engineer",
                company: "AeroLiving",
                avatar: "https://i.pravatar.cc/150?u=af4",
            },
            {
                quote: "Their decorative trims add a touch of luxury to our high-end furniture lines. The finish is impeccable.",
                author: "Jeremy Renner",
                role: "Creative Lead",
                company: "EliteInteriors",
                avatar: "https://i.pravatar.cc/150?u=af5",
            },
            {
                quote: "We've scaled our production by 40% thanks to the reliable delivery of precision connectors from Brandbase.",
                author: "Mark Ruffalo",
                role: "Production Head",
                company: "ScaleStyle",
                avatar: "https://i.pravatar.cc/150?u=af6",
            },
            {
                quote: "The load-bearing capacity of their custom brackets exceeded our expectations in stress tests.",
                author: "Don Cheadle",
                role: "Chief Engineer",
                company: "BuildRight",
                avatar: "https://i.pravatar.cc/150?u=af7",
            },
            {
                quote: "Exceptional dimensional accuracy. Our architectural fittings align perfectly every single time.",
                author: "Elizabeth Ols",
                role: "QA Lead",
                company: "Structura",
                avatar: "https://i.pravatar.cc/150?u=af8",
            },
            {
                quote: "Their knowledge of engineering polymers for architectural use is second to none.",
                author: "Paul Bettany",
                role: "Technical Advisor",
                company: "FutureFittings",
                avatar: "https://i.pravatar.cc/150?u=af9",
            },
            {
                quote: "Brandbase is a critical partner in our mission to modernize furniture assembly.",
                author: "Brie Larson",
                role: "CEO",
                company: "InstaBuild Furniture",
                avatar: "https://i.pravatar.cc/150?u=af10",
            }
        ]
    },
    {
        id: "toys",
        title: "Toys",
        shortDescription: "Safe, vibrant, and innovative — our toy components and assemblies are manufactured to international safety standards. We work with toy designers and brands to bring creative concepts to life with high-quality moulded parts.",
        longDescription: "Safety and imagination go hand in hand. We bring joy to children worldwide by manufacturing high-quality, vibrant, and incredibly safe toy components. From complex action figures to educational building blocks, our moulding expertise brings creative concepts to reality.",
        image: gallery5,
        seo: {
            title: "Safe & Innovative Toy Manufacturing | Brandname Engineering",
            description: "International safety standard compliant toy manufacturing. Vibrant, durable, and non-toxic plastic toys for global brands.",
            keywords: ["toy manufacturing", "plastic toy parts", "safe toy production", "custom toy moulding"],
        },
        tableData: [
            { feature: "Material", specification: "ABS, PP, TPE (Soft Touch)" },
            { feature: "Safety Compliance", specification: "EN71, ASTM F963, REACH" },
            { feature: "Color Accuracy", specification: "Pantone Matching System (PMS)" },
            { feature: "Assembly", specification: "Ultrasonic Welding, Snap-Fits" },
        ],
        aeoUserQuestions: [
            {
                question: "How do you ensure toy safety?",
                answer: "We strictly adhere to international safety standards like EN71 and ASTM F963. Our materials are non-toxic, lead-free, and phthalate-free, and we conduct rigorous mechanical testing to prevent small part hazards."
            },
            {
                question: "Can you manufacture multi-material toys?",
                answer: "Yes, we specialize in 2-shot moulding and overmoulding, allowing us to combine hard plastics with soft-touch rubber (TPE) in a single component for enhanced play value."
            }
        ],
        contentSections: [
            {
                heading: "Bringing Imagination to Life",
                text: "We work closely with toy designers to bridge the gap between a sketch and a shelf-ready product. our engineering team optimizes 3D designs for mouldability without sacrificing the character or charm of the original concept."
            },
            {
                heading: "Uncompromising Safety",
                text: "There is no margin for error when it comes to children's safety. Our quality control processes are stringent, checking for sharp edges, material consistency, and structural integrity to ensure every toy is safe for play."
            }
        ],
        galleryItems: [
            {
                id: 1,
                type: "video",
                title: "Injection Moulding Toys",
                desc: "Continuous production of high-precision action figure parts.",
                url: "https://ik.imagekit.io/vinayak06/0_Robot_Toy_3840x2160.mov",
                span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
                id: 2,
                type: "image",
                title: "Vibrant Colors",
                desc: "Food-safe, vibrant pigments for educational building sets.",
                url: "https://ik.imagekit.io/vinayak06/3d-rendered-photos-adorable-toys-kids.jpg",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 3,
                type: "image",
                title: "Safety Testing",
                desc: "Rigorous stress testing for toy structural integrity.",
                url: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 4,
                type: "image",
                title: "Complex Assemblies",
                desc: "Precision engineering for modular toy components.",
                url: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=800",
                span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
            }
        ],
        testimonials: [
            {
                quote: "Safety is our #1 priority. Brandname's testing and material quality give us absolute peace of mind for our toy lines.",
                author: "Julian Rossi",
                role: "Product Safety Officer",
                company: "PlayWorld Tech",
                avatar: "https://i.pravatar.cc/150?u=ty1",
            },
            {
                quote: "Vibrant colors and precision molding that bring our complex characters to life beautifully.",
                author: "Mia Wong",
                role: "Creative Lead",
                company: "JoyBox Toys",
                avatar: "https://i.pravatar.cc/150?u=ty2",
            },
            {
                quote: "Their 2-shot moulding process allowed us to create unique textures that kids just love.",
                author: "Andy Serkis",
                role: "Art Director",
                company: "TactileToys",
                avatar: "https://i.pravatar.cc/150?u=ty3",
            },
            {
                quote: "Non-toxic, lead-free, and incredibly durable. The perfect choice for educational building sets.",
                author: "Sam Rockwell",
                role: "Procurement Manager",
                company: "EduPlay",
                avatar: "https://i.pravatar.cc/150?u=ty4",
            },
            {
                quote: "The snap-fits they designed for our modular figures work flawlessly every time.",
                author: "Zoe Saldana",
                role: "Engineer",
                company: "SnapCreations",
                avatar: "https://i.pravatar.cc/150?u=ty5",
            },
            {
                quote: "Scaling from 5,000 to 500,000 units was seamless with Brandbase's multi-cavity moulds.",
                author: "Vin Diesel",
                role: "Production Director",
                company: "MegaToy Corp",
                avatar: "https://i.pravatar.cc/150?u=ty6",
            },
            {
                quote: "Their engineering team helped us solve a critical durability issue with our electronic toys.",
                author: "Bradley Cooper",
                role: "Hardware Lead",
                company: "SmartPlay",
                avatar: "https://i.pravatar.cc/150?u=ty7",
            },
            {
                quote: "Exceptional attention to detail. Every action figure part is perfectly defined.",
                author: "Pom Klementieff",
                role: "Sculptor",
                company: "ArtisanToys",
                avatar: "https://i.pravatar.cc/150?u=ty8",
            },
            {
                quote: "We've been with Brandbase for 5 years, and their commitment to toy safety never wavers.",
                author: "Dave Bautista",
                role: "CEO",
                company: "LegacyToys",
                avatar: "https://i.pravatar.cc/150?u=ty9",
            },
            {
                quote: "The fastest turnaround for high-cavitation toy moulds in the industry.",
                author: "Karen Gillan",
                role: "Operations Manager",
                company: "SpeedyPlay",
                avatar: "https://i.pravatar.cc/150?u=ty10",
            }
        ]
    },
    {
        id: "packaging",
        title: "Packaging Solutions",
        shortDescription: "Complete packaging solutions for cosmetic, pharma, food & beverage, and homecare industries. Precision-moulded jars, caps, and containers.",
        longDescription: "In the competitive world of packaging, the first impression is the last. We provide high-end, precision-moulded packaging solutions that protect your product while elevating your brand. Our expertise spans medical-grade pharma containers to luxury cosmetic jars.",
        image: "https://ik.imagekit.io/vinayak06/Mavnox/biodegradable-packaging-production-sustainable-manufacturing-factory-floor.jpg",
        seo: {
            title: "Precision Plastic Packaging Solutions | Brandname Engineering",
            description: "Premium plastic moulding for cosmetic, pharma, and food packaging. High-quality caps, jars, and containers with stringent quality control.",
            keywords: ["plastic packaging manufacturing", "cosmetic jars", "pharma containers", "precision caps", "moulded packaging"],
        },
        tableData: [
            { feature: "Material", specification: "PET, HDPE, PP, Surlyn, PCTG" },
            { feature: "Sectors", specification: "Cosmetic, Pharma, Food, Homecare" },
            { feature: "Decor", specification: "Hot Stamping, Silk Screening, Metallization" },
            { feature: "Compliance", specification: "US FDA, Pharma Grade, Food Safe" },
        ],
        aeoUserQuestions: [
            {
                question: "What types of packaging do you specialize in?",
                answer: "We specialize in precision-moulded components such as closure caps, cosmetic containers, pharmaceutical vials, and high-durability food storage solutions."
            },
            {
                question: "Do you offer decorations for cosmetic packaging?",
                answer: "Yes, we provide advanced finishing services including silk screening, hot foil stamping, and vacuum metallization to give your products a premium shelf presence."
            }
        ],
        contentSections: [
            {
                heading: "Precision in Every Closure",
                text: "Our moulding processes are optimized for high-volume production of caps and closures with zero-leakage guarantees. We employ high-cavitation moulds and automated quality checks to ensure every individual piece meets your strict dimensional specifications."
            },
            {
                heading: "Pharma-Grade Excellence",
                text: "Manufacturing for the pharmaceutical industry requires a different level of care. Our clean-room-ready processes and strict material traceabilty ensure that our packaging components meet the rigorous safety and hygiene standards of the medical sector."
            }
        ],
        galleryItems: [
            {
                id: 1,
                type: "image",
                title: "Cosmetic Jars",
                desc: "Luxury jars with crystal clear finish and double-wall design.",
                url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 2,
                type: "video",
                title: "Cap Production",
                desc: "High-speed automated production of tamper-evident closures.",
                url: "https://ik.imagekit.io/vinayak06/Mavnox/0_Bottles_Production_Line_3840x2160.mp4",
                span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
            },
            {
                id: 3,
                type: "image",
                title: "Pharma Containers",
                desc: "Sterile-produced pharmaceutical vials and closures.",
                url: "https://ik.imagekit.io/vinayak06/Mavnox/luxury-cosmetic-packaging-mockup-set-branding.jpg",
                span: "md:col-span-1 md:row-span-4 sm:col-span-1 sm:row-span-2",
            },
            {
                id: 4,
                type: "image",
                title: "Sustainable Packaging",
                desc: "Eco-friendly materials without compromising on quality.",
                url: "https://ik.imagekit.io/vinayak06/Mavnox/disposable-environmentally-friendly-tableware-eco-friendly-disposable-tableware-concept-saving-planet-rejection-plastic.jpg",
                span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
            }
        ],
        testimonials: [
            {
                quote: "The precision of their caps and closures is vital for our pharmaceutical line. Zero leakage, every time.",
                author: "Dr. Alan Grant",
                role: "Supply Chain Director",
                company: "Biomed Pharma",
                avatar: "https://i.pravatar.cc/150?u=pk1",
            },
            {
                quote: "Premium cosmetic jars that truly elevate our brand. Their hot stamping quality is exceptional.",
                author: "Sophie Lauren",
                role: "Brand Director",
                company: "Ethereal Beauty",
                avatar: "https://i.pravatar.cc/150?u=pk2",
            },
            {
                quote: "Their clean-room manufacturing capabilities for medical packaging are top-notch.",
                author: "Jeff Goldblum",
                role: "QA Specialist",
                company: "HygiaMed",
                avatar: "https://i.pravatar.cc/150?u=pk3",
            },
            {
                quote: "We switched to Brandbase for our food containers and saw a significant increase in shelf life.",
                author: "Laura Dern",
                role: "Food Scientist",
                company: "FreshLock",
                avatar: "https://i.pravatar.cc/150?u=pk4",
            },
            {
                quote: "Innovative double-wall jar designs that helped us win a packaging award this year.",
                author: "Sam Neill",
                role: "Packaging Engineer",
                company: "AwardPack",
                avatar: "https://i.pravatar.cc/150?u=pk5",
            },
            {
                quote: "Reliable production of high-cavitation moulds for our beverage cap line.",
                author: "Wayne Knight",
                role: "Operations Lead",
                company: "SodaStream",
                avatar: "https://i.pravatar.cc/150?u=pk6",
            },
            {
                quote: "The clarity of their 'crystal finish' jars is better than anything we've seen on the market.",
                author: "Samuel L. Jackson",
                role: "Product Lead",
                company: "ClearView Cosmetics",
                avatar: "https://i.pravatar.cc/150?u=pk7",
            },
            {
                quote: "Their technical support team helped us optimize our container weight, reducing our shipping costs by 12%.",
                author: "B.D. Wong",
                role: "Sustainability Officer",
                company: "WeightWise Packaging",
                avatar: "https://i.pravatar.cc/150?u=pk8",
            },
            {
                quote: "Exceptional tamper-evident seal designs that provide security and ease of use for our patients.",
                author: "Julianne Moore",
                role: "VP Marketing",
                company: "PatientSafe Pharma",
                avatar: "https://i.pravatar.cc/150?u=pk9",
            },
            {
                quote: "Brandbase is the most reliable high-precision packaging manufactureer we have ever worked with.",
                author: "Vince Vaughn",
                role: "CEO",
                company: "GlobalPack Solutions",
                avatar: "https://i.pravatar.cc/150?u=pk10",
            }
        ]
    }
];
