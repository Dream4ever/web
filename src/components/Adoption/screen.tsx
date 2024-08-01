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
      start: "top top+=3000px",
      end: "top top+=0px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          node.style.transform = `translate(0%, calc(${390 * self.progress}px))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=900px",
      end: "top top+=600px",
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
      start: "top top+=600px",
      end: "top top+=300px",
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
      start: "top top+=300px",
      end: "top top+=0px",
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
      start: "top top+=0px",
      end: "top top+=-300px",
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
      className="-mt-[520px] mb-[590px] relative"
    >
      <div className="relative">
        <div>
          <img src="/assets/vector.png" />
        </div>
        <p className="text-5xl font-bold pt-7">
          Harnessing performant
          <br />
          blockchains for adoption
        </p>
        <p className="pt-5 text-xl font-medium">
          TowneSquare network empowers creators & developers to <br />
          build and scale use cases to a mass audience based on
          <br />performant blockchain ecosystems like Aptos.
        </p>
        <div className="absolute z-[9999] w-full lg:block left-0 top-0">
          <ActionLabel
            className="-top-[93px] left-[585px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/home/logo.svg"
            // imgUrl2="/images/home/icons/solana.svg"
            imgClassName="!w-[170px]"
            dotSName="-left-[75px] top-[2px]"
            dotCName="-left-[77px] top-[20px]"
            dot3Name="-right-[40px] -top-[50px]"
            dot4Name="-right-[25px] -top-[35px]"
            dot5Name="-left-[40px] top-[10px]"
            nDotBackground={0}
          />
          <ActionLabel
            className="top-[50px] left-[740px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/img/logo.svg"
            // imgUrl2="/images/home/icons/ts.png"
            imgClassName="!w-[112px]"
            bHaveBackground={false}
          />
          <ActionLabel
            className="top-[110px] left-[920px]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/home/aptos.svg"
            // imgUrl2="/images/aptos.png"
            imgClassName="!w-[78px]"
            dotSName="left-[22px] -bottom-[35px]"
            dotCName="left-[3px] -bottom-[30px]"
            dot3Name="-right-[20px] -top-[20px]"
            dot4Name="-right-[10px] -top-[35px]"
            dot5Name="-right-[40px] -top-[40px]"
            nDotBackground={1}
          />
        </div>
      </div>

      <div className="relative w-[1200px] h-[465px] mt-[116px]">
        <div
          className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
          ref={ref1}
        >
          <img src="/assets/adoption/adopt1.png" className="w-[368px]" />
          <div className="absolute px-6 bottom-[78px] ">
            <p className="text-[#FFF] text-[40px] font-semibold leading-[120%]">
              Network effect
            </p>
            <p className="text-[#FFFFFF] text-base font-normal pt-3">
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
          <img src="/assets/adoption/adopt2.png" className="w-[752px]" />
          <div className="absolute px-12 top-10">
            <p className="text-[#FFF] text-[40px] font-semibold leading-[120%]">
              Consumer-grade
              <br /> User experience
            </p>
            <p className="text-[#FFFFFF] text-base font-normal pt-3">
              Sign up, pay, and transact within seconds
            </p>
          </div>
        </div>
        <div
          className="absolute top-[240px] left-[384px] z-10 transition-all  translate-y-[100vh]"
          ref={ref3}
        >
          <img src="/assets/adoption/adopt3.png" className="w-[368px]" />
          <div className="absolute pl-12 top-10">
            <p className="text-[#FFF] text-[40px] font-semibold leading-[120%]">
              Developer-
              <br />
              friendly
            </p>
            <p className="text-[#FFFFFF] text-base font-normal pt-3">
              Supporting both Rust & Move language
            </p>
          </div>
        </div>
        <div
          className="absolute top-[240px] left-[768px] z-10 transition-all  translate-y-[100vh]"
          ref={ref4}
        >
          <img src="/assets/adoption/adopt4.png" className="w-[368px]" />
          <div className="absolute pl-12 top-[54px]">
            <p className="text-[#FFF] text-[40px] font-semibold leading-[120%]">Low fees</p>
            <p className="text-[#FFFFFF] text-base font-normal pt-3">
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
