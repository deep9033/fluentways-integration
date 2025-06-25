
import React, { useRef, useEffect, useState } from "react";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "left" | "right" | "down";
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  direction = "up",
  delay = 0,
  children,
  className = "",
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) setShow(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dirClass = {
    up: "animate-fade-up",
    left: "animate-fade-left",
    right: "animate-fade-right",
    down: "animate-fade-down"
  }[direction];

  return (
    <div
      ref={ref}
      className={`${show ? "opacity-100 " + dirClass : "opacity-0"} transition duration-700 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
};
