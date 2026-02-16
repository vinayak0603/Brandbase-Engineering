import { ServiceGrid, Service } from "@/components/ui/service-grid";
import injectionMouldImg from "@/assets/services/InjectionMould.jpg";
import contractManufacturingImg from "@/assets/services/ContractManufacturing.jpg";
import precisionToolingImg from "@/assets/services/PrecisionTooling.jpg";
import secondaryOperationImg from "@/assets/services/SecondaryOperation.jpg";

const services: Service[] = [
    {
        name: "Injection Moulding",
        imageUrl: injectionMouldImg,
        href: "/services#injection-moulding",
    },
    {
        name: "Contract Manufacturing",
        imageUrl: contractManufacturingImg,
        href: "/services#contract-manufacturing",
    },
    {
        name: "Precision Tooling",
        imageUrl: precisionToolingImg,
        href: "/services#precision-tooling",
    },
    {
        name: "Secondary Operations",
        imageUrl: secondaryOperationImg,
        href: "/services#secondary-operations",
    },
];

const ScrollingServices = () => {
    return (
        <ServiceGrid
            title="Our Services"
            subtitle="Delivering precision solutions with cutting-edge technology and unmatched expertise."
            services={services}
        />
    );
};

export default ScrollingServices;
