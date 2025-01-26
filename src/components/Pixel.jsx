import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import './Pixel.css';

gsap.registerPlugin(ScrollTrigger);

const PixelEffect = () => {
  const canvasRef = useRef(null);
  const canvasWrapRef = useRef(null);
  const contentInnerRef = useRef(null);
  const cardRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [img, setImg] = useState(null);
  const [imgRatio, setImgRatio] = useState(0);
  const [pxIndex, setPxIndex] = useState(0);
  
  const pxFactorValues = [100,  25,15,1];

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      orientation: 'vertical',
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Load image
    const image = new Image();
    image.src = '/img/futuristic-robot-interacting-with-money.webp'; // Replace with your image path
    
    image.onload = () => {
      setImg(image);
      setImgRatio(image.width / image.height);
      setCanvasSize();
      setPxIndex(0); // Start with most pixelated
    };

    // Card animation synchronized with pixelation
    gsap.fromTo(cardRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: -20,
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
        },
        onComplete: () => {
          gsap.to(cardRef.current, {
            y: 0,
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      setCtx(canvasRef.current.getContext('2d'));
    }
  }, [canvasRef]);

  useEffect(() => {
    if (ctx && img) {
      render();
      initScrollTriggers();
    }
  }, [ctx, img, pxIndex]);

  const setCanvasSize = () => {
    if (canvasRef.current && canvasWrapRef.current) {
      canvasRef.current.width = canvasWrapRef.current.offsetWidth;
      canvasRef.current.height = canvasWrapRef.current.offsetHeight;
    }
  };

  const render = useCallback(() => {
    if (!ctx || !img || !canvasRef.current || !canvasWrapRef.current) return;

    const offsetWidth = canvasRef.current.width;
    const offsetHeight = canvasRef.current.height;
    
    let newWidth, newHeight, newX, newY;
    
    // Calculate responsive dimensions
    const screenWidth = window.innerWidth;
    const baseHeight = offsetHeight * 1; // Increased from 0.8 to 0.95
    
    // Adjust size based on screen width
    if (screenWidth < 768) { // mobile
      newHeight = baseHeight * 0.9; // Increased from 0.8
    } else if (screenWidth < 1024) { // tablet
      newHeight = baseHeight * 0.95; // Increased from 0.9
    } else { // desktop
      newHeight = baseHeight; // Already at maximum
    }
    
    newWidth = Math.round(newHeight * imgRatio);
    // Position at bottom and extreme left
    newY = offsetHeight - newHeight;
    newX = 0; // Move to extreme left

    const pxFactor = pxFactorValues[pxIndex];

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    tempCanvas.width = newWidth / pxFactor;
    tempCanvas.height = newHeight / pxFactor;
    
    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
    
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      tempCanvas,
      newX,
      newY,
      newWidth,
      newHeight
    );
    ctx.imageSmoothingEnabled = true;
    
  }, [ctx, img, canvasWrapRef, canvasRef, pxIndex, pxFactorValues, imgRatio]);

  const animatePixels = () => {
    if (pxIndex < pxFactorValues.length - 1) {
      setTimeout(() => {
        setPxIndex(prev => prev + 1);
      }, pxIndex === 0 ? 600 : 300); // Slowed down the pixelation timing
    }
  };

  const initScrollTriggers = () => {
    ScrollTrigger.create({
      trigger: canvasWrapRef.current,
      start: 'top+=20% bottom',
      onEnter: () => {
        animatePixels();
      },
      once: true
    });

    ScrollTrigger.create({
      trigger: canvasWrapRef.current,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play reverse play reverse',
      onEnter: () => {
        gsap.to(canvasWrapRef.current, {
          opacity: 1,
          duration: 0.5
        });
      },
      onLeave: () => {
        gsap.to(canvasWrapRef.current, {
          opacity: 0,
          duration: 0.5
        });
      },
      onEnterBack: () => {
        gsap.to(canvasWrapRef.current, {
          opacity: 1,
          duration: 0.5
        });
      },
      onLeaveBack: () => {
        gsap.to(canvasWrapRef.current, {
          opacity: 0,
          duration: 0.5
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCanvasSize();
      render();
    });

    return () => {
      window.removeEventListener('resize', () => {
        setCanvasSize();
        render();
      });
    };
  }, [render]);

  return (
    <section id="revenue"
      className="relative w-full h-screen overflow-hidden flex items-center justify-start "
      ref={canvasWrapRef}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* Floating card */}
      <div className="absolute lg:right-60 md:right-20 right-4 w-[90vw] md:w-[50vw] lg:w-[40rem] max-w-[40rem]" ref={cardRef}>
        <CardContainer className="inter-var">
          <CardBody className="bg-zinc-900/90 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[40rem] h-auto rounded-xl p-4 md:p-8 border transform-gpu transition-all duration-300 hover:translate-y-[-10px]">
            <CardItem
              translateZ="50"
              className="text-3xl md:text-4xl font-bold text-neutral-600 dark:text-white bento-title zentry"
            >
              REVENUE
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 tt-autonomous"
            >
              Start with free credits to explore our AI agents. Once you experience the power, unlock unlimited potential with our credit packages.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 md:mt-8">
              <img
                src="img/revenue.webp"
                 height="1000"
                width="1000"
                className="h-40 md:h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
              <CardItem translateZ="50" className="bg-zinc-800/50 p-3 md:p-5 rounded-lg">
                <h3 className="text-white text-base md:text-lg font-semibold mb-1 md:mb-2 zentry">Start Free</h3>
                <p className="text-neutral-400 text-sm md:text-base tt-autonomous">Get 100 credits on signup to experience our AI capabilities</p>
              </CardItem>
              <CardItem translateZ="50" className="bg-zinc-800/50 p-3 md:p-5 rounded-lg">
                <h3 className="text-white text-base md:text-lg font-semibold mb-1 md:mb-2 zentry">Premium Access</h3>
                <p className="text-neutral-400 text-sm md:text-base tt-autonomous">Purchase credits anytime to continue using our advanced features</p>
              </CardItem>
            </div>
            <div className="flex justify-between items-center mt-4 md:mt-8">
              {/* <CardItem
                translateZ={20}
                className="text-lg md:text-xl font-semibold dark:text-white zentry"
              >
                Coming Soon
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/10 text-white text-sm md:text-base font-bold hover:bg-white/20 border border-white/20 zentry"
              >
                Join Waitlist
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default PixelEffect;
