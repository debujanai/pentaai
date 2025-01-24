"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Button from "./lib/Button";
import { TiLocationArrow } from "react-icons/ti";
import { cn } from "./lib/utils";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useWindowScroll } from "react-use";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
}

const navItems = [
  {
    label: "About",
    icon: TiLocationArrow,
  },
  {
    label: "Agents",
    icon: TiLocationArrow,
  },
  {
    label: "DAPP",
  },
  {
    label: "Revenue",
  },
  {
    label: "Roadmap",
  },
  {
    label: "Tokenomics",
  },
];
const Navbar = () => {
  const navRef = useRef(null);
  const navBackgroundRef = useRef(null);
  const navLinksContainerRef = useRef(null);
  const linkRefs = useRef([]);
  const audioElementRef = useRef(null);
  const navLinkBackgroundRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isScrollYTop, setScrollYTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isFirstMouseEnterRef = useRef(true);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useGSAP(() => {
    let lastScrollTop = 0;
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down & past threshold
          setIsNavVisible(false);
        } else {
          // Scrolling up or at top
          setIsNavVisible(true);
        }
        
        setScrollYTop(scrollTop <= 0);
        lastScrollTop = scrollTop;
      },
    });
  });

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        duration: 0.3,
        ease: "power2.out",
      });

      tl.to(
        navBackgroundRef.current,
        {
          opacity: isScrollYTop ? 0 : 1,
          duration: 0.2,
        },
        ">",
      );
    },
    { dependencies: [isNavVisible, isScrollYTop] },
  );

  useGSAP(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    gsap.set(mobileMenu, { opacity: 0, visibility: "hidden" });

    // Instead of setting menuItems directly, we'll handle the animation differently
    const menuItems = mobileMenu.querySelectorAll('.menu-item');
    gsap.set(menuItems, {
      opacity: 0,
      rotationX: -90,
      transformOrigin: "50% 50% -100px",
    });
  }, []);

  const toggleMobileMenu = () => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    const menuItems = mobileMenu.querySelectorAll('.menu-item');
    
    if (!isMobileMenuOpen) {
      // Opening animation
      gsap.set(mobileMenu, { visibility: "visible" });
      gsap.to(mobileMenu, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      
      // Animate menu items with 3D effect
      gsap.to(menuItems, {
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });
    } else {
      // Closing animation
      gsap.to(menuItems, {
        opacity: 0,
        rotationX: 90,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      });

      gsap.to(mobileMenu, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        delay: 0.3,
        onComplete: () => {
          gsap.set(mobileMenu, { visibility: "hidden" });
        }
      });
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(`#${targetId}`);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: target,
          offsetY: 100,
        },
        ease: "power2.inOut",
      });
    }
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  useGSAP((_, contextSafe) => {
    const nav = navRef.current;
    const navLinksContainer = navLinksContainerRef.current;
    const navLinks = linkRefs.current;
    const navLinkBackground = navLinkBackgroundRef.current;

    if (!nav || !navLinksContainer || !navLinks || !navLinkBackground || !contextSafe) return;

    function getNavRect() {
      return nav.getBoundingClientRect();
    }

    let linkMouseEnterTl;
    let setTextBlackTime = 0;

    const handleMouseEnter = contextSafe((e) => {
      const target = e.target;
      const targetRect = target.getBoundingClientRect();
      const navRect = getNavRect();

      const linkBackgroundLeft = targetRect.left - navRect.left;
      const linkBackgroundHeight = targetRect.height;
      const linkBackgroundWidth = targetRect.width;

      if (isFirstMouseEnterRef.current) {
        gsap.set(navLinkBackground, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: linkBackgroundWidth,
          opacity: 1,
        });

        gsap.set(target, {
          color: "black",
        });

        isFirstMouseEnterRef.current = false;
      }

      if (!isFirstMouseEnterRef.current) {
        const tl = gsap.timeline({ defaults: { duration: 0.3 } });
        linkMouseEnterTl = tl;

        tl.to(navLinkBackground, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: linkBackgroundWidth,
        });

        setTextBlackTime = tl.duration();

        tl.set(
          target,
          {
            color: "black",
          },
          "<0.15",
        );
      }
    });

    const handleMouseLeave = contextSafe((e) => {
      const target = e.target;

      if (linkMouseEnterTl && linkMouseEnterTl.time() < setTextBlackTime) {
        linkMouseEnterTl.clear();
      }

      gsap.set(target, {
        color: "white",
      });
    });

    const handleContainerMouseLeave = contextSafe(() => {
      isFirstMouseEnterRef.current = true;

      gsap.set(navLinkBackground, {
        opacity: 0,
      });
    });

    navLinksContainer.addEventListener("mouseleave", handleContainerMouseLeave);
    navLinks.forEach((link) => {
      link?.addEventListener("mouseenter", handleMouseEnter);
    });
    navLinks.forEach((link) => {
      link?.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navLinksContainer.removeEventListener("mouseleave", handleContainerMouseLeave);
      navLinks.forEach((link) => {
        link?.removeEventListener("mouseenter", handleMouseEnter);
      });
      navLinks.forEach((link) => {
        link?.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  });


  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);


  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav
          ref={navRef}
          className="relative flex size-full items-center justify-between p-4"
        >
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              rightIcon={<TiLocationArrow className="rotate-[135deg]" />}
              className="bg-[#264653] px-4 py-2"
            >
              DAPP
            </Button>
          </div>
          <div
            ref={navLinkBackgroundRef}
            className="pointer-events-none absolute z-40 rounded-3xl bg-white"
          />
          <ul className="z-50 hidden items-center md:flex">
            <div ref={navLinksContainerRef} className="flex">
              {navItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={index}>
                    <a
                      href={`#${item.label.toLowerCase()}`}
                      ref={(el) => {
                        linkRefs.current[index] = el;
                      }}
                      onClick={(e) => handleNavClick(e, item.label.toLowerCase())}
                      className="flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase text-white"
                    >
                      {item.label}
                      {Icon && <Icon />}
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="relative z-[60] text-white md:hidden"
          >
            {isMobileMenuOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <RiMenu3Line className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu Panel */}
          <div
            ref={mobileMenuRef}
            className="fixed inset-0 top-0 z-[55] min-h-screen w-full bg-black md:hidden"
            style={{ 
              height: '100vh',
              perspective: '1000px'
            }}
          >
            {/* Top section with logo and DAPP button */}
            <div className="absolute top-4 left-8 flex items-center gap-6">
              <img src="/img/logo.png" alt="logo" className="w-10" />
              <Button
                id="product-button"
                rightIcon={<TiLocationArrow className="rotate-[135deg]" />}
                className="bg-black px-4 py-2"
              >
                DAPP
              </Button>
            </div>

            {/* Menu items */}
            <div className="flex h-full flex-col items-start justify-center px-8">
              <ul className="space-y-8 w-full">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li 
                      key={index} 
                      className="menu-item transform"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xl text-white opacity-50" style={{ fontFamily: 'Zentry' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <a
                          href={`#${item.label.toLowerCase()}`}
                          className="flex items-start text-5xl font-bold text-white"
                          onClick={(e) => handleNavClick(e, item.label.toLowerCase())}
                          style={{ fontFamily: 'Zentry' }}
                        >
                          {item.label}
                          {Icon && <Icon className="text-3xl ml-2" />}
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

       
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;