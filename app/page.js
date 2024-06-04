"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor"
import { useEffect } from "react";

export default function Home() {
  
  return (
    <main>
      <Cursor className ="-z-2"/>
      <Navbar/>
      <Hero/>
    </main>
  );
}
