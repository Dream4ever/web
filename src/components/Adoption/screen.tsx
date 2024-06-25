import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";

import ActionLabel from "../Features/Home/ActionLabel";

function Screen1() {
  const refMain = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const calcOpacity = (progress: number) => {
    return progress > 0.5 ? (progress - 0.5) / 0.5 : 0;
  };
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=300px",
      end: "top top+=-000px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          node.style.transform = `translate(0%, calc(${
            50 * self.progress
          }vh - ${480 * self.progress}px))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-800px",
      end: "top top+=-1100px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
          }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-1100px",
      end: "top top+=-1400px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
          }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-1400px",
      end: "top top+=-1700px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
          }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-1700px",
      end: "top top+=-2000px",
      onUpdate: (self) => {
        if (ref4.current != null && (ref4.current as any).style != null) {
          let node = ref4.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
          }vh))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={refMain}
      className="transition-all -mt-[295px] mb-[95px] relative"
    >
      <div className="relative">
        <div>
          <img src="/images/screen1/vector.png" />
        </div>
        <p className="text-5xl font-bold pt-7">
          Harnessing performant
          <br />
          blockchains for adoption
        </p>
        <p className="pt-5 text-xl font-medium">
          TowneSquare network empowers creators &<br />
          developers to build and scale use cases to a mass
          <br /> audience based on Solana and Aptos ecosystems.
        </p>
        <div className="absolute z-[9999] w-full lg:block left-0 top-0">
          <ActionLabel
            className="-top-[93px] left-[585px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/images/home/icons/solana.png"
            imgUrl2="/images/home/icons/solana.png"
            imgClassName="!w-[78px]"
            dotSName="-left-[75px] top-[2px]"
            dotCName="-left-[77px] top-[20px]"
            dot3Name="-right-[40px] -top-[50px]"
            dot4Name="-right-[25px] -top-[35px]"
            dot5Name="-left-[40px] top-[10px]"
          />
          <ActionLabel
            className="top-[63px] left-[755px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/images/home/icons/ts.png"
            imgUrl2="/images/home/icons/ts.png"
            imgClassName="!w-[112px]"
            bHaveBackground={false}
          />
          <ActionLabel
            className="top-[153px] left-[925px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/images/aptos.png"
            imgUrl2="/images/aptos.png"
            imgClassName="!w-[78px]"
            dotSName="left-[22px] -bottom-[35px]"
            dotCName="left-[3px] -bottom-[30px]"
            dot3Name="-right-[20px] -top-[20px]"
            dot4Name="-right-[10px] -top-[35px]"
            dot5Name="-right-[40px] -top-[40px]"
          />
        </div>
      </div>

      <div className="flex justify-center mt-40">
        <button className="px-4 py-2 text-base font-medium rounded-full w-52 bg-primary-default hover:bg-primary-default/70">
          Download TowneSquare
          <p className="text-sm">Coming soon</p>
        </button>
      </div>
      <div className="relative w-[1200px] h-[465px] mt-20">
        <div
          className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
          ref={ref1}
        >
          <img src="/images/adoption/adopt1.png" />
          <div className="absolute px-6 bottom-6 ">
            <p className="text-[#FFF] text-[40px] font-semibold">
              Network effect
            </p>
            <p className="text-[#FFFFFF] text-base font-normal">
              Connect with users from high-value DeFi
              <br /> & NFT communities. Earn rewards while <br /> inviting users
              into the ecosystem.
            </p>
          </div>
        </div>
        <div
          className="absolute top-0 left-[384px] z-10 transition-all  translate-y-[100vh]"
          ref={ref2}
        >
          <img src="/images/adoption/adopt2.png" />
          <div className="absolute px-6 top-8">
            <p className="text-[#FFF] text-[40px] font-semibold">
              Consumer-grade
              <br /> User experience
            </p>
            <p className="text-[#FFFFFF] text-base font-normal">
              Sign up, pay, and transact within seconds
            </p>
          </div>
        </div>
        <div
          className="absolute top-[240px] left-[384px] z-10 transition-all  translate-y-[100vh]"
          ref={ref3}
        >
          <img src="/images/adoption/adopt3.png" />
          <div className="absolute px-6 top-14">
            <p className="text-[#FFF] text-[40px] font-semibold">
              Developer-
              <br />
              friendly
            </p>
            <p className="text-[#FFFFFF] text-base font-normal">
              Supporting both Rust & Move language
            </p>
          </div>
        </div>
        <div
          className="absolute top-[240px] left-[768px] z-10 transition-all  translate-y-[100vh]"
          ref={ref4}
        >
          <img src="/images/adoption/adopt4.png" />
          <div className="absolute px-6 top-8">
            <p className="text-[#FFF] text-[40px] font-semibold">Low fees</p>
            <p className="text-[#FFFFFF] text-base font-normal">
              Interact directly with your audience and
              <br /> no middleman with low fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
