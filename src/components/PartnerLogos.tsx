import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel";

// Partner Logo Components
function KalyaniIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 200 80"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="currentColor"
            >
                KALYANI
            </text>
        </svg>
    );
}

function IKayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 200 80"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="currentColor"
            >
                I-KAY
            </text>
        </svg>
    );
}

function PPDIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 200 80"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="currentColor"
            >
                PPD
            </text>
        </svg>
    );
}

function InaylakIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 200 80"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="currentColor"
            >
                INAYLAK
            </text>
        </svg>
    );
}

const partnerLogos: Logo[] = [
    { name: "Kalyani", id: 1, img: KalyaniIcon },
    { name: "I-Kay", id: 2, img: IKayIcon },
    { name: "PPD", id: 3, img: PPDIcon },
    { name: "Inaylak", id: 4, img: InaylakIcon },
];

export function PartnerLogos() {
    return (
        <div className="space-y-8 py-20">
            <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
                <div className="text-center">
                    <GradientHeading variant="secondary" size="sm">
                        Our Network
                    </GradientHeading>
                    <GradientHeading size="lg">
                        Associate Partners
                    </GradientHeading>
                </div>

                <LogoCarousel columnCount={4} logos={partnerLogos} />
            </div>
        </div>
    );
}
