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
      start: "top top+=-200px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          node.style.transform = `translate(0%, calc(-50% + ${10 * (1 - self.progress)}vh))`;
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
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div ref={refMain} className="flex flex-col transition-all -translate-y-1/2">
        <div className="flex flex-col pt-4">
          <div>
            <img src="/images/screen1/vector.png" />
          </div>
          <p className="pt-4 text-5xl font-bold">
            Harnessing performant
            <br />
            blockchains for adoption
          </p>
          <p className="pt-4 text-xl font-medium">
            TowneSquare network empowers creators &<br />
            developers to build and scale use cases to a mass
            <br /> audience based on Solana and Aptos ecosystems.
          </p>
        </div>
        <div className="absolute z-[9999] w-full lg:block left-0 top-0">
          <ActionLabel
            className="-top-[6vh] left-[28vw]"
            imgUrl1="/images/home/icons/solana.png"
            imgUrl2="/images/home/icons/solana.png"
            dotSName="bottom-[7vh] right-[4vw] w-4"
            dotCName="bottom-[10vh] right-[5vw] w-2"
            dot3Name="bottom-[9vh] right-[3vw] w-4"
            dot4Name="bottom-[11vh] left-[7vw] w-1"
            dot5Name="bottom-[12vh] left-[3.5vw] w-2"
          />
          <ActionLabel
            className="top-[3vh] left-[34.5vw]"
            imgUrl1="/images/home/icons/ts.png"
            imgUrl2="/images/home/icons/ts.png"
          />
          <ActionLabel
            className="top-[10vh] left-[42vw]"
            imgUrl1="/images/home/icons/aptos.svg"
            imgUrl2="/images/home/icons/aptos.svg"
            dotSName="bottom-[8vh] left-[6vw]"
            dotCName="bottom-[10vh] left-[5vw]"
            dot3Name="bottom-[9vh] left-[4vw]"
            dot4Name="top-[5vh] right-[5vw]"
            dot5Name="top-[7vh] right-[9vw]"
          />
        </div>
        <div className="flex justify-center mt-40">
          <button className="px-4 py-2 text-base font-medium rounded-full w-52 bg-primary-default hover:bg-primary-default/70">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
        <div className="relative w-[1200px] h-[400px] mt-[40vh]">
          <div className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}>
            <img
              src="/images/adoption/adopt1.png"
            />
            <div className="absolute px-6 bottom-6 ">
              <p className="text-[#FFF] text-[40px] font-semibold">Network effect</p>
              <p className="text-[#FFFFFF] text-base font-normal">
                Connect with users from high-value DeFi<br /> & NFT communities. Earn rewards while <br /> inviting users into the ecosystem.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-[384px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}>
            <img
              src="/images/adoption/adopt2.png"
            />
            <div className="absolute px-6 top-8">
              <p className="text-[#FFF] text-[40px] font-semibold">Consumer-grade<br /> User experience</p>
              <p className="text-[#FFFFFF] text-base font-normal">Sign up, pay, and transact within seconds</p>
            </div>
          </div>
          <div className="absolute top-[240px] left-[384px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}>
            <img
              src="/images/adoption/adopt3.png"
            />
            <div className="absolute px-6 top-14">
              <p className="text-[#FFF] text-[40px] font-semibold">Developer-<br />friendly</p>
              <p className="text-[#FFFFFF] text-base font-normal">Supporting both Rust & Move language</p>
            </div>
          </div>
          <div className="absolute top-[240px] left-[768px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}>
            <img
              src="/images/adoption/adopt4.png"
            />
            <div className="absolute px-6 top-8">
              <p className="text-[#FFF] text-[40px] font-semibold">Low fees</p>
              <p className="text-[#FFFFFF] text-base font-normal">Interact directly with your audience and<br /> no middleman with low fees</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen1;
