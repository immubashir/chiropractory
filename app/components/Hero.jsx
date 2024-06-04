"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

    const targetRef = useRef('null');

    const { scrollYProgress } = useScroll({
        target: 'targetRef',
    })

    const growdown = useTransform(scrollYProgress, [0.2, 0.5], [0, 640])
    const scrollSide = useTransform(scrollYProgress, [0, 0.2], [0, 220])
    const colorChang = useTransform(scrollYProgress, [0.2, 0.35], ['#fff', '#ffe227'])

    useEffect(() => {
        let locomotiveScroll;
        const initLocomotiveScroll = async () => {
            const originalConsoleError = console.error;
            console.error = () => { };

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
        <div className='pt-[100px] mx-10'>
            <h1 className='text-6xl poppins-bold'>Your <span className='text-[#f73865]'>Pain</span> free life is <span className='text-[#2afaa3]'>one Session away!!</span></h1>

            <div className='h-[320px] flex items-center justify-center relative'>
                <div className='h-[2px] w-full bg-white relative' />
                <div className='absolute h-40 w-40 border-2 rounded-full flex items-center justify-center group overflow-hidden hover:scale-110 transition-all duration-300 hover:border-[#2d88f7] cursor-pointer bg-[#091f3d] right-20'>
                    <h1 className='poppins-semibold h-full w-full rounded-full flex items-center justify-center'><span className='z-10'>Book a session</span></h1>
                    <div className='bg-[#2d88f7] scale-0 group-hover:scale-[2.1] transiton-all duration-500 w-full h-full absolute rounded-full -translate-x-20' />
                </div>
            </div>
            <div ref={targetRef} className='h-[200vh] relative overflow-x-hidden'>
                <h1 className='text-3xl'>Ever wondered why despite numerous calcium tablets, pain killers and back exercises your pain keeps coming back?</h1>
                <div className='mt-10 flex items-center gap-2 pt-28'>
                    <div className='h-10 w-10 bg-white rounded-full' />
                    <h1 className='text-2xl text-[#f73865]'>Causes of pain...</h1>
                    <Image data-scroll data-scroll-speed="1.2" src="/assets/spine.jpg" alt="Spine illustration" height={450} width={350} className='absolute object-cover rounded-3xl top-80' />
                    <motion.div style={{ width: scrollSide }} className='h-[2px] w-48 bg-white' />
                    <motion.div style={{ height: growdown, backgroundColor: colorChang }} className='h-2 w-[2px] bg-white absolute left-[465px] top-[243px]' />
                    <div className=' flex flex-col'>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                            viewport={{ once: 'true' }}
                            className='flex absolute top-[400px] text-2xl'>
                            <div className='h-10 w-10 bg-white rounded-full absolute -translate-x-7 flex items-center justify-center'><div className='h-5 w-5 bg-[#f73865] rounded-full' /></div>
                            <motion.p
                                className='pl-6'>
                                Desk job and poor posture leading to a slightly curved state of the spine.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                            viewport={{ once: 'true' }}
                            className='flex absolute top-[600px] text-2xl'>
                            <div className='h-10 w-10 bg-white rounded-full absolute -translate-x-7 flex items-center justify-center'><div className='h-5 w-5 bg-[#f73865] rounded-full' /></div>
                            <motion.p
                                className='pl-6'>
                                Rounded shoulders and terrible posture.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                            viewport={{ once: 'true' }}
                            className='flex absolute top-[800px] text-2xl'>
                            <div className='h-10 w-10 bg-white rounded-full absolute -translate-x-7 flex items-center justify-center'><div className='h-5 w-5 bg-[#f73865] rounded-full' /></div>
                            <motion.p
                                className='pl-6'>
                                Bone pressing the spinal nerve causing severe chronic pain.
                            </motion.p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ borderColor: '#595858' }}
                        whileInView={{ borderColor: '#ffe227', transition: { delay: 0.5, duration: 0.4 } }}
                        className='h-[50vh] w-full absolute border-2 border-gray-500 bottom-0 rounded-3xl p-6'>
                        <h1 className='text-3xl poppins-semibold mb-5 text-sky-300'>Discover the True Cause of Your Chronic Pain and How to Eliminate It!</h1>
                        <p className='text-xl poppins-regular'>Your Bone isn&apos;t supposed to touch your nerve, due to your Desk-Job and Poor Posture, the bone will adjust to a new normal where it will adapt a slightly curved state as its natural position, leaving you with rounded shoulders and a terrible posture. The more serious damage that is caused by this is it starts to PRESS THE SPINAL NERVE, which is causing you severe chronic pain. Taking medications or applying pain sprays will only numb the nerve for some time, and then your pain will come back. Stop touching the Nerve and your pain will Vanish. Hundreds of our Patients experience instant relief from the pain that they have been carrying for years precisely for this...</p>
                        <button className='absolute underline '>
                            <Link href="/continue" className='text-pink-400'>Continue reading...</Link>
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className='h-'>
                <div className='pt-20 flex gap-4 flex-col'>
                    <h1 className='text-3xl pb-4'>Here&apos;s What you will experience after one <span className='text-[#35fa84]'>Chiropractic Session</span></h1>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Instant relief from Chronic Back, Neck, Knee and Shoulder Pain.</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />80% relief from Sciatica Pain</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Posture Correction, yes Instantly!!</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Your Energy will literally Double, not joking.</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Your Migraine will disappear...GUARANTEED.</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Improvement in sleep Quality and rest (You will Thank us for this).</p>
                    <p className='flex items-center justify-center gap-2 border-2 border-gray-400 rounded-xl p-4'><span className='h-2 w-2 bg-lime-500 rounded-full' />Bad posture for a long time will cause poor blood circulation that robs you of your energy and activeness.</p>
                    <p className='p-4 text-5xl flex items-center justify-center poppins-semibold text-pink-500'>Improved Confidence.</p>
                    <p className='p-4 text-2xl poppins-medium text-center'>Not exaggerating, your bad posture is doing more harm than you know, poor blood circulation will mess up your hormonal balance and will cause dysfunction of your crucial hormones like dopamine, serotonin and testosterone.</p>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-3xl text-center'>With one session you will restart your hormonal engine and meet the new you.<br /> So book your session now!</p>
                        <button className='p-4 border-2 rounded-full mt-10 z-20 group relative overflow-hidden hover:border-[#11cec5] transition-all duration-500'>
                            <div className='absolute bg-[#11cec5] mt-10 h-36 w-36 rounded-full group-hover:scale-[3] ml-6 transition-all duration-500 -z-10' />
                            <h1 className='poppins-semibold'>Schedule your appointment</h1>
                        </button>
                    </div>
                    <div className='h-[20vh]' />
                </div>
            </div>
        </div>
    )
}

export default Hero;
