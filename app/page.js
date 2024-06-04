"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor"
import { useEffect } from "react";

export default function Home() {

  useEffect
  (() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    }, [])
  return (
    <main>
      <Cursor className ="-z-2"/>
      <Navbar/>
      <Hero/>
    </main>
  );
}
