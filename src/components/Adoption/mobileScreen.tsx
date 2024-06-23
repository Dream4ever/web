import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";
import ActionLabel from "../Features/Home/ActionLabel";

function MobileScreen() {
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
          node.style.transform = `translate(-50%, calc(-50% + ${150 * (1 - self.progress)
            }% + ${50 * (1 - self.progress)}vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-400px",
      end: "top top+=-800px",
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
      start: "top top+=-800px",
      end: "top top+=-1200px",
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
      start: "top top+=-1200px",
      end: "top top+=-1600px",
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
      start: "top top+=-1600px",
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
      <div className="flex flex-col">
        <div className="absolute z-[9999] w-full lg:block left-0 top-0">
          <ActionLabel
            className="bottom-[17vh] left-[9vw]"
            imgUrl1="/images/home/icons/solana.png"
            imgUrl2="/images/home/icons/solana.png"
            dotSName="bottom-[6vh] right-[19vw]"
            dotCName="bottom-[8vh] right-[21vw]"
            dot3Name="bottom-[9vh] right-[17vw]"
            dot4Name="bottom-[5vh] left-[18vw]"
            dot5Name="bottom-[7vh] left-[24vw]"
          />
          <ActionLabel
            className="bottom-[10vh] right-[40vw]"
            imgUrl1="/images/home/icons/ts.png"
            imgUrl2="/images/home/icons/ts.png"
          />
          <ActionLabel
            className="bottom-[6vh] right-[11vw]"
            imgUrl1="/images/home/icons/aptos.svg"
            imgUrl2="/images/home/icons/aptos.svg"
            dotSName="bottom-[7vh] right-[18vw]"
            dotCName="bottom-[9vh] right-[20vw]"
            dot3Name="bottom-[8vh] right-[16vw]"
            dot4Name="top-[8vh] right-[0vw]"
            dot5Name="top-[9vh] right-[4vw]"
          />
        </div>
        <div className="flex flex-col px-3 pt-20 justify-stretch">
          <div>
            <img src="/images/screen1/vector.png" />
          </div>
          <p className="pt-4 text-[28px] md:text-5xl font-bold">
            Harnessing performant
            <br />
            blockchains for adoption
          </p>
          <p className="pt-4 text-lg font-medium md:text-xl">
            TowneSquare network empowers <br />
            creators & developers to build and <br />
            scale use cases to a mass audience<br />
            based on Solana and Aptos <br />
            ecosystems.
          </p>
        </div>

        <div className="relative w-full min-h-[900px] mt-[5vh]">
          <div className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}>
            <img
              src="/images/adoption/mobile1.png"
            />
            <div className="absolute bottom-6 left-6">
              <p className="text-[#FFF] text-[28px] font-semibold">Network effect</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Driven by high-value DeFi & NFT <br />communities</p>
            </div>
          </div>
          <div className="absolute top-[380px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}>
            <img
              src="/images/adoption/mobile2.png"
            />
            <div className="absolute left-6 top-14">
              <p className="text-[#FFF] text-[28px] font-semibold">Consumer-grade <br />User experience</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Sign up, pay, and transact within seconds</p>
            </div>
          </div>

          <div className="absolute top-[615px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}>
            <img
              src="/images/adoption/mobile3.png"
            />
            <div className="absolute left-6 top-20">
              <p className="text-[#FFF] text-[28px] font-semibold">Developer <br /> - friendly</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Supporting both <br /> Rust & Move <br /> language</p>
            </div>
          </div>
          <div className="absolute top-[615px] left-[175px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}>
            <img
              src="/images/adoption/mobile4.png"
            />
            <div className="absolute left-6 top-[102px]">
              <p className="text-[#FFF] text-[28px] font-semibold">Low fees</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Interact directly <br /> with your audience <br /> and no middleman <br /> with low fees</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-2 text-base font-medium rounded-full w-52 bg-primary-default">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileScreen;
