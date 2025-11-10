"use client";

export default function LeafBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 opacity-60">
      {[...Array(12)].map((_, i) => (
        <img
          key={i}
          src={`/images/leaves/leaf${(i % 3) + 1}.svg`}
          className={`
            absolute w-10 h-10 animate-float
            ${i % 2 === 0 ? "opacity-80" : "opacity-40"}
          `}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
