import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute left-0 -top-40w-60  w-72  sm:block lg:left-0 lg:w-80">
           {/* <ImageClipBox
            src="/img/c1.png"  clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/c1.png" clipClass="sword-man-clip-path md:scale-125"
          /> */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/bra.png"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/brain.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Token Distribution
          </p>

          <AnimatedTitle
            title="PENTA AI <b>T</b>oken <br /> Ec<b>o</b>system <br /> & Ec<b>o</b>nomics"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">10M</h3>
              <p className="text-sm">Total Supply</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">5%</h3>
              <p className="text-sm">Tax</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">40%</h3>
              <p className="text-sm">Community Rewards</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">25%</h3>
              <p className="text-sm">Liquidity Pool</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">20%</h3>
              <p className="text-sm">Development</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#264653]">15%</h3>
              <p className="text-sm">Marketing</p>
            </div>
          </div>

          <Button
            title="view whitepaper"
            containerClass="mt-10 cursor-pointer mt-5 text-white bg-[#264653] hover:text-[#264653] hover:bg-white transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
