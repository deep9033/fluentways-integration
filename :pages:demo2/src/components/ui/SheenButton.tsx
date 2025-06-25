
import React from "react";
import { cn } from "@/lib/utils";

export const SheenButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { glow?: boolean }
>(function SheenButton(
  { children, className = "", glow = true, ...rest },
  ref
) {
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // Compose both forwarded ref and local ref
  React.useImperativeHandle(ref, () => btnRef.current as HTMLButtonElement, [btnRef.current]);

  // Sheen on interval
  React.useEffect(() => {
    if (!btnRef.current) return;
    let timeout: any;
    let interval = setInterval(() => {
      if (!btnRef.current) return;
      btnRef.current.classList.remove("sheen-animate");
      void btnRef.current.offsetWidth; // trigger reflow
      btnRef.current.classList.add("sheen-animate");
      timeout = setTimeout(() => {
        btnRef.current && btnRef.current.classList.remove("sheen-animate");
      }, 1100);
    }, 6000);
    return () => {
      clearInterval(interval);
      timeout && clearTimeout(timeout);
    };
  }, []);

  // Glow pulse
  React.useEffect(() => {
    if (!btnRef.current) return;
    let pulse;
    if (glow) {
      pulse = setInterval(() => {
        btnRef.current!.classList.add("animate-pulse");
        setTimeout(() => {
          btnRef.current && btnRef.current.classList.remove("animate-pulse");
        }, 1300);
      }, 4000);
    }
    return () => pulse && clearInterval(pulse);
  }, [glow]);

  return (
    <button
      ref={btnRef}
      className={cn(
        "relative sheen rounded-full bg-accent text-white font-bold px-6 py-3 shadow-cta-glow transition-all hover:shadow-glow focus:ring-2 focus:ring-accent focus:ring-offset-2 group overflow-hidden",
        "hover:brightness-105 hover:scale-105",
        "active:scale-95",
        "after:pointer-events-none",
        className
      )}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
});

SheenButton.displayName = "SheenButton";
