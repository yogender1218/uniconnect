"use client";

import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    // const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    const colors = ["#0000FF", "#87CEEB", "#00008B", "#F5F5F5", "#696969"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button style={{background:'transparent',border:'none', cursor:'pointer'}} type='submit' onClick={handleClick}>Login</Button>
    </div>
  );
}
