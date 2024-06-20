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
            className="bottom-[15vh] left-[5vh]"
            imgUrl="/images/home/icons/solana.png"
            dotSName="bottom-[5vh] right-[7vw]"
            dotCName="bottom-[7vh] right-[6vw]"
            dot3Name="bottom-[6vh] right-[2vw]"
            dot4Name="bottom-[7vh] left-[5vw]"
            dot5Name="bottom-[9vh] left-[8vw]"
          />
          <ActionLabel
            className="bottom-[6vh] right-[15vh]"
            imgUrl="/images/home/icons/ts.png"
          />
          <ActionLabel
            className="bottom-[0vh] right-[5vh]"
            imgUrl="/images/home/icons/aptos.svg"
            dotSName="bottom-[7vh] left-[9vw]"
            dotCName="bottom-[9vh] left-[8vw]"
            dot3Name="bottom-[8vh] left-[4vw]"
            dot4Name="top-[4vh] right-[8vw]"
            dot5Name="top-[5vh] right-[4vw]"
          />
        </div>
        <div className="flex flex-col px-3 pt-10 justify-stretch">
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
          <img
            src="/images/adoption/mobile_clip1.png"
            className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/images/adoption/mobile_clip2.png"
            className="absolute top-[380px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/images/adoption/mobile_clip3.png"
            className="absolute top-[620px] left-[0px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/images/adoption/mobile_clip4.png"
            className="absolute top-[620px] left-[175px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-2 text-base font-medium text-black rounded-full w-52 bg-primary-default">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileScreen;
