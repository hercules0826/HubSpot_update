"use client";

import { useEffect, useRef } from "react";

export default function LeavesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const leaves: any[] = [];

    for (let i = 0; i < 25; i++) {
      leaves.push({
        x: Math.random() * width,
        y: height + Math.random() * 200,
        size: 20 + Math.random() * 30,
        speed: 0.4 + Math.random() * 0.8,
        drift: Math.random() * 1 - 0.5,
        rotate: Math.random() * 360,
        rotateSpeed: Math.random() * 0.3,
      });
    }

    const leafImg = new Image();
    leafImg.src = "/images/leaves/leaf1.png";

    function animate() {
      ctx.clearRect(0, 0, width, height);

      leaves.forEach((leaf) => {
        leaf.y -= leaf.speed;
        leaf.x += leaf.drift;
        leaf.rotate += leaf.rotateSpeed;

        if (leaf.y < -50) {
          leaf.y = height + 50;
          leaf.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate((leaf.rotate * Math.PI) / 180);
        ctx.drawImage(leafImg, -leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    }

    leafImg.onload = animate;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
}
