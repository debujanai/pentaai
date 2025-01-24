import { useEffect, useRef } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { TypeAnimation } from 'react-type-animation'

gsap.registerPlugin(ScrollTrigger)

const Hero = ({ startAnimation }) => {
  const robotRef = useRef(null)
  const contentRef = useRef(null)
  const buttonRef = useRef(null)
  const bottomTextRef = useRef(null)

  useGSAP(() => {
    if (!startAnimation) return // Don't run animations until loading is complete

    // Initial state - hide all elements
    gsap.set([contentRef.current, buttonRef.current, bottomTextRef.current], {
      opacity: 0
    })
    gsap.set(robotRef.current, {
      y: '100vh',
      opacity: 0
    })
    gsap.set(buttonRef.current, {
      x: '-100%'
    })
    gsap.set(bottomTextRef.current, {
      x: '100%'
    })

    // Create animation timeline
    const tl = gsap.timeline()

    // Animate robot first
    tl.to(robotRef.current, {
      y: '50%',
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    })
    // Then animate content
    .to(contentRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    // Animate button from left
    .to(buttonRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    // Animate bottom text from right
    .to(bottomTextRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
  }, [startAnimation]) // Add startAnimation as a dependency

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <div ref={contentRef} className="text-white">
            <TypeAnimation
              sequence={[
                7000, // Wait for screen loader (3s) + robot animation (3s)
                'PENTA AI',
              ]}
              wrapper="h1"
              speed={50}
              className="special-font hero-heading"
            />
            <TypeAnimation
              sequence={[
                7500, // Start after PENTA AI is typed
                'Experience the future of AI agents working seamlessly together. Unlock powerful automation and intelligent solutions through our advanced multi-agent system.',
              ]}
              wrapper="p"
              speed={50}
              className="mb-5 max-w-64 xl:max-w-[30rem] font-robert-regular"
            />
          </div>
          <div ref={buttonRef}>
            <Button
              id="watch-trailer"
              title="Explore PENTA AI"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-[#264653] text-white flex-center gap-1 hover:text-[#264653] hover:!bg-white transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <img 
        ref={robotRef}
        src="/test.png"
        alt="AI Robot"
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[950px] h-auto 
        top-[35vh] md:top-[0vh]"
      />
      <h1 ref={bottomTextRef} className="special-font hero-heading absolute bottom-5 right-5 text-white">
        PIONEER
      </h1>
    </div>
  )
}

export default Hero