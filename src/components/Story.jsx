import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Button from "./Button";

const Story = () => {
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const leftCurtain = leftCurtainRef.current;
    const rightCurtain = rightCurtainRef.current;
    const section = sectionRef.current;

    if (!leftCurtain || !rightCurtain || !section) return;

    // Set initial state
    gsap.set([leftCurtain, rightCurtain], {
      opacity: 1
    });
    gsap.set(leftCurtain, { x: "0%" });
    gsap.set(rightCurtain, { x: "0%" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Opening animation when section comes into view
            gsap.to(leftCurtain, {
              x: "-100%",
              duration: 1.5,
              ease: "power2.inOut",
              delay: 0.5
            });
            gsap.to(rightCurtain, {
              x: "100%",
              duration: 1.5,
              ease: "power2.inOut",
              delay: 0.5
            });
            // Disconnect observer after animation starts
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3 // Trigger when 30% of the section is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="dapp" ref={sectionRef} className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10">
        <p className="font-general text-small uppercase md:text-[10px]">
          revolutionizing defi with autonomous intelligence
        </p>
        <AnimatedTitle
          title="T<b>h</b>e Fu<b>tu</b>re <b>o</b>f <br />De<b>F</b>i <b>I</b>s Here"
          sectionId="#story"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
        <div className="relative w-full max-w-[1200px] aspect-[2/1] overflow-hidden mt-8 mx-auto px-4">
          <video
            src="/videos/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div 
            ref={leftCurtainRef}
            className="absolute top-0 left-0 w-1/2 h-full bg-black"
            style={{ willChange: 'transform' }}
          />
          <div 
            ref={rightCurtainRef}
            className="absolute top-0 right-0 w-1/2 h-full bg-black"
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="mt-20 flex w-full justify-center">
          <div className="flex h-full w-fit flex-col items-center">
            <p className="font-general text-center text-[18px] leading-[1.8] text-blue-50/80 md:text-center">
              Step into a revolutionary DeFi ecosystem where autonomous systems work in perfect harmony. <br />
              Our platform combines advanced trading algorithms, smart contract automation, and <br />
              real-time market analysis to deliver an unparalleled financial experience. From automated <br />
              portfolio management to cross-chain operations, our intelligent systems handle complex <br />
              DeFi operations while you maintain full control of your assets. Experience the next <br />
              generation of decentralized finance, where efficiency meets security.
            </p>
            <div className="mt-10">
              <Button
                id="realm-btn"
                title="Enter The Future"
                containerClass="mt-5 text-white bg-[#264653] hover:text-[#264653] hover:bg-white transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
