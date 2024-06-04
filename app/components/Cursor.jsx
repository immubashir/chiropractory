"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const blob = blobRef.current;

    // Update blob position
    gsap.to(blob, {
      x: position.x - 30, // Center the blob
      y: position.y - 30,
      duration: 0.1, // Reduce duration for a more immediate response
      ease: 'none',
    });
  }, [position]);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-20 h-20 pointer-events-none flex items-center justify-center"
    >
      <div className="morphing-blob w-full h-full border-2 from-[#1e53ff] to-[#FED7A5] opacity-50 rounded-full"></div>
    </div>
  );
};

const Ball = () => {
  return (
    <div className="fixed -z-20 top-0 left-0 w-full h-full pointer-events-none">
      <div className="z-10">
        <Blob />
      </div>
    </div>
  );
};

export default Ball;
