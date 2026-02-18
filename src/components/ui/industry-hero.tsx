"use client"

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Cpu,
        title: "Performance",
        description: "Ultra-fast data processing in every situation.",
    },
    {
        icon: ShieldCheck,
        title: "Security",
        description: "Advanced protection for complete peace of mind.",
    },
    {
        icon: Layers,
        title: "Modularity",
        description: "Easy integration with existing architecture.",
    },
    {
        icon: Zap,
        title: "Responsiveness",
        description: "Instant response to every command.",
    },
];

const Box = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 20,
        curveSegments: 20
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial
                color="#232323"
                metalness={1}
                roughness={0.3}
                reflectivity={0.5}
                ior={1.5}
                emissive="#000000"
                emissiveIntensity={0}
                transparent={false}
                opacity={1.0}
                transmission={0.0}
                thickness={0.5}
                clearcoat={0.0}
                clearcoatRoughness={0.0}
                sheen={0}
                sheenRoughness={1.0}
                sheenColor="#ffffff"
                specularIntensity={1.0}
                specularColor="#ffffff"
                iridescence={1}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[100, 400] as [number, number]}
                flatShading={false}
                side={0}
                alphaTest={0}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<any>();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.05;
        }
    });

    const boxes = Array.from({ length: 50 }, (_, index) => ({
        position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ] as [number, number, number],
        id: index
    }));

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

export const Scene = () => {
    const [cameraPosition] = useState<[number, number, number]>([5, 5, 20]);

    return (
        <div className="w-full h-full z-0 opacity-40">
            <Canvas camera={{ position: cameraPosition, fov: 40 }}>
                <ambientLight intensity={15} />
                <directionalLight position={[10, 10, 5]} intensity={15} />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};

interface IndustryHeroProps {
    title: string;
    description: string;
    backgroundImage: string;
}

export const IndustryHero: React.FC<IndustryHeroProps> = ({ title, description, backgroundImage }) => {
    return (
        <div className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Dynamic Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-[#1A2428]/80 z-0" />

            {/* 3D Scene Layer 
            <div className='absolute inset-0 z-10 pointer-events-none'>
                <Scene />
            </div>

            */}
            <div className="container mx-auto px-4 relative z-20 space-y-16">
                <div className="flex flex-col items-center text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="secondary" className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg">
                            ✨ Industry Excellence: {title}
                        </Badge>
                    </motion.div>

                    <div className="space-y-8 flex items-center justify-center flex-col">
                        <motion.h1
                            className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl text-white leading-[1.1] drop-shadow-xl"
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Mastering Precision in <span className="text-secondary drop-shadow-md">{title}</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {description}
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 items-center pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button className="text-base px-10 py-6 rounded-2xl bg-secondary text-secondary-foreground font-bold shadow-xl shadow-secondary/20 hover:bg-secondary/90 hover:scale-105 transition-all group">
                                Request a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="text-base px-10 py-6 rounded-2xl bg-white/5 text-white border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all font-semibold">
                                View Specifications
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryHero;
