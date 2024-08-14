import React, { useEffect, useRef } from "react";
// import './MouseTrail.css'; // Include your CSS

export default function MouseTrail() {
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const coords = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const cursorRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    if (isMobile) return;
    const circles = cursorRef.current.querySelectorAll(".circle");
    circlesRef.current = circles;

    circles.forEach((circle) => {
      circle.x = coords.current.x;
      circle.y = coords.current.y;

      circle.style.backgroundColor = "white";
    });

    const onMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isMobile]);
  if (isMobile) return null;
  return (
    <div className="cursor" ref={cursorRef}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
}
