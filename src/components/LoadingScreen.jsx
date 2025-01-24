import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const LoadingScreen = ({ onLoadComplete }) => {
  useGSAP(() => {
    // Initial setup
    gsap.set(".image-1", {
      opacity: 0
    })
    gsap.set(".image-2", {
      opacity: 0
    })
    gsap.set(".image-3", {
      opacity: 0
    })
    gsap.set(".image-4", {
      opacity: 0
    })
    gsap.set(".image-5", {
      opacity: 0
    })
    gsap.set(".image-6", {
      opacity: 0
    })

    // Create animation timeline
    const tl = gsap.timeline()

    // Animate images one by one with fade
    tl.to(".image-1", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(".image-2", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to(".image-3", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to(".image-4", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to(".image-5", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to(".image-6", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to({}, { duration: 0.5 })
    .add(() => {
      // Signal completion
      onLoadComplete(true)
      // Fade out animation for all images
      gsap.to([".image-1", ".image-2", ".image-3", ".image-4", ".image-5", ".image-6"], {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      })
      gsap.to(".loader-container", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        onComplete: () => {
          gsap.set(".loader-container", { display: "none" })
        }
      })
    })
  }, [])

  return (
    <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative h-[500px] w-[500px] p-12">
        <div
          className="image-1 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/1.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className="image-2 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/2.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className="image-3 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/3.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
         <div
          className="image-4 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/4.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
         <div
          className="image-5 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/5.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className="image-6 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: 'url("/6.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  )
}

export default LoadingScreen