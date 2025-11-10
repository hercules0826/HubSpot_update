"use client";

import { useEffect, useRef } from "react";

interface Leaf {
  img: HTMLImageElement;
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  rotation: number;
  rotationSpeed: number;
}

export default function LeafFloatBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Load leaf SVGs
    const leafPaths = [
      "/leaves/leaf1.svg",
      "/leaves/leaf2.svg",
      "/leaves/leaf3.svg",
      "/leaves/leaf.svg",
      "/leaves/leaf3.svg",
    ];

    const leaves: Leaf[] = [];

    leafPaths.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        for (let i = 0; i < 6; i++) {
          leaves.push({
            img,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 40 + Math.random() * 45,
            speed: 0.15 + Math.random() * 0.4,
            drift: Math.random() * 0.6 - 0.3,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.002 - 0.001,
          });
        }
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach((leaf) => {
        leaf.y += leaf.speed;
        leaf.x += leaf.drift;
        leaf.rotation += leaf.rotationSpeed;

        if (leaf.y > canvas.height + 50) {
          leaf.y = -50;
          leaf.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        ctx.globalAlpha = 0.45; // soft warm
        ctx.drawImage(
          leaf.img,
          -leaf.size / 2,
          -leaf.size / 2,
          leaf.size,
          leaf.size
        );
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-90"
      style={{
        filter: "blur(0.8px) saturate(1.1)",
      }}
    />
  );
}
