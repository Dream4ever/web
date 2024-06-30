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
      end: "top top+=-500px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          node.style.transform = `translate(0, calc(${-269 * self.progress}px))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=600px",
      end: "top top+=300px",
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
      start: "top top+=0px",
      end: "top top+=-300px",
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
      start: "top top+=-300px",
      end: "top top+=-600px",
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
      start: "top top+=-600px",
      end: "top top+=-900px",
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
      <div className="flex flex-col" ref={refMain}>
        <div className="absolute z-[9999] w-full lg:block left-0 top-0">
          <ActionLabel
            className="-top-[287px] left-[10vw]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/home/solana.svg"
            // imgUrl2="/assets/home/solana.svg"
            imgClassName="!w-[46px]"
            dotSName="-left-[75px] top-[2px]"
            dotCName="-left-[77px] top-[20px]"
            dot3Name="-right-[40px] -top-[50px]"
            dot4Name="-right-[25px] -top-[35px]"
            dot5Name="-left-[40px] top-[10px]"
          />
          <ActionLabel
            className="-top-[190px] left-[33vw]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/img/logo.svg"
            // imgUrl2="/assets/home/ts.png"
            imgClassName="!w-[66px]"
            bHaveBackground={false}
          />
          <ActionLabel
            className="-top-[140px] right-[12vw]"
            innerClassName="w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
            imgUrl1="/assets/home/aptos.svg"
            // imgUrl2="/assets/home/aptos.svg"
            imgClassName="!w-[46px]"
            dotSName="left-[22px] -bottom-[35px]"
            dotCName="left-[3px] -bottom-[30px]"
            dot3Name="-right-[20px] -top-[20px]"
            dot4Name="-right-[10px] -top-[35px]"
            dot5Name="-right-[40px] -top-[40px]"
          />
        </div>
        <div className="flex flex-col px-3 justify-stretch">
          <div>
            <img src="/assets/vector.png" />
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

        <div className="relative w-full min-h-[870px] mt-20">
          <div className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}>
            <img
              src="/assets/adoption/mobile1.png" className="w-[340px]"
            />
            <div className="absolute bottom-6 left-6">
              <p className="text-[#FFF] text-[28px] font-semibold">Network effect</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Driven by high-value DeFi & NFT <br />communities</p>
            </div>
          </div>
          <div className="absolute top-[380px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}>
            <img
              src="/assets/adoption/mobile2.png" className="w-[340px]"
            />
            <div className="absolute left-6 top-14">
              <p className="text-[#FFF] text-[28px] font-semibold">Consumer-grade <br />User experience</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Sign up, pay, and transact within seconds</p>
            </div>
          </div>

          <div className="absolute top-[615px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}>
            <img
              src="/assets/adoption/mobile3.png" className="w-[166px]"
            />
            <div className="absolute left-6 top-20">
              <p className="text-[#FFF] text-[28px] font-semibold">Developer <br /> - friendly</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Supporting both <br /> Rust & Move <br /> language</p>
            </div>
          </div>
          <div className="absolute top-[615px] left-[175px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}>
            <img
              src="/assets/adoption/mobile4.png" className="w-[166px]"
            />
            <div className="absolute left-6 top-[102px]">
              <p className="text-[#FFF] text-[28px] font-semibold">Low fees</p>
              <p className="text-[#FFFFFF] text-sm font-normal">Interact directly <br /> with your audience <br /> and no middleman <br /> with low fees</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileScreen;
