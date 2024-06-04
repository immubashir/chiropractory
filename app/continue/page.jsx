'use client';
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Image from 'next/image';

const Page = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        let locomotiveScroll;
        const initLocomotiveScroll = async () => {
            const originalConsoleError = console.error;
            console.error = () => {};

            try {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                locomotiveScroll = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                });

                if (typeof locomotiveScroll.on === 'function') {
                    locomotiveScroll.on('scroll', (args) => {
                        document.dispatchEvent(new CustomEvent('locomotive-scroll', { detail: args }));
                    });
                }
            } catch (error) {
                // Handle error
            } finally {
                console.error = originalConsoleError; // Restore original console.error
            }
        };

        initLocomotiveScroll();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <>
            <Navbar />
            <Cursor />
            <div ref={scrollRef} className='h-screen mx-10' data-scroll-container>
                <h1 className='pt-28 text-4xl text-sky-300'>Discover the True Cause of Your Chronic Pain and How to Eliminate It!</h1>
                <div className='flex gap-5 pt-10 h-[100vh]'>
                    <Image data-scroll data-scroll-speed="1.2" src="/assets/spine.jpg" height={600} width={400} className='mt-10 h-[500px] rounded-3xl object-contain' alt="Spine Image" />
                    <p className='text-xl poppins-regular pt-16'>
                        Your Bone isn't supposed to touch your Nerve. Due to your Desk Job and Poor Posture, the bone will adjust to a new normal where it will adapt a slightly curved state as its natural position, leaving you with rounded shoulders and a terrible posture.
                        <br/>The more serious damage that is caused by this is it starts to PRESS THE SPINAL NERVE, which is causing you severe chronic pain.
                        <br/>Taking medications or applying pain sprays will only numb the nerve for some time, and then your pain will come back. Stop touching the Nerve and your pain will Vanish.
                        <br/>Hundreds of our Patients experience instant relief from the pain that they have been carrying for years precisely for this reason.
                        <br/>We treat the root cause and not the symptom. Our expertise lies in adjustments that allow your bones to come back to its natural state and give you instant relief.
                        <br/>No medications and hence No side effects. You see, it's not magic...it's science and it works, the happiness that thousands of our patients experience is a testament to that.
                    </p>
                </div>
                <div className='h-[40vh] flex flex-col items-center justify-center relative'>
                    <h1 className='text-3xl'>Book an <span className='text-[#34fd81]'>appointment</span> now and get rid of your <span className='text-purple-400'>pain in 90 min.</span></h1>
                    <button className='p-4 border-2 rounded-full mt-10 z-20 group relative overflow-hidden hover:border-[#11cec5] transition-all duration-500'>
                        <div className='absolute bg-[#11cec5] mt-10 h-36 w-36 rounded-full group-hover:scale-[3] transition-all duration-500 -z-10' />
                        <h1 className='poppins-semibold'>Schedule your appointment</h1>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Page;
