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
        <div className="flex flex-col pt-4 justify-stretch">
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
            className="-top-[3vh] left-[44vw]"
            imgUrl="/images/home/icons/solana.png"
            dotSName="bottom-[7vh] right-[4vw]"
            dotCName="bottom-[9vh] right-[3vw]"
            dot3Name="bottom-[8vh] right-[2vw]"
            dot4Name="bottom-[11vh] left-[5vw]"
            dot5Name="bottom-[10vh] left-[3.5vw]"
          />
          <ActionLabel
            className="top-[6vh] left-[52.5vw]"
            imgUrl="/images/home/icons/ts.png"
          />
          <ActionLabel
            className="top-[13vh] left-[62vw]"
            imgUrl="/images/home/icons/aptos.svg"
            dotSName="bottom-[7vh] left-[4vw]"
            dotCName="bottom-[9vh] left-[3vw]"
            dot3Name="bottom-[8vh] left-[2vw]"
            dot4Name="top-[0vh] right-[5vw]"
            dot5Name="top-[1vh] right-[4vw]"
          />
        </div>
        <div className="relative w-[1200px] h-[400px] mt-[5vh]">
          <img
            src="/images/adoption/clip1.png"
            className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/images/adoption/clip2.png"
            className="absolute top-0 left-[384px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/images/adoption/clip3.png"
            className="absolute top-[240px] left-[384px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/images/adoption/clip4.png"
            className="absolute top-[240px] left-[768px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
        </div>

        <div className="flex justify-center mt-40">
          <button className="px-4 py-2 text-base font-medium text-black rounded-full w-52 bg-primary-default">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen1;
