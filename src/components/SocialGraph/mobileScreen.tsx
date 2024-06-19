import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useMemo } from "react";

const MobileScreen = () => {

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
      trigger: "#socialgraph",
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
      trigger: "#socialgraph",
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
      trigger: "#socialgraph",
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
      trigger: "#socialgraph",
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
      <div
        className="flex flex-col"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="pt-4 text-lg font-semibold bold text">
              Social graph
            </p>
            <p className="pt-4 text-4xl font-bold text-center">
              CRED Social graph <br />&profile
            </p>
          </div>
        </div>
        <div className="relative w-full h-full my-[2vh]">
          <img
            src="/images/socialgraph/mobile_clip1.png"
            className="absolute top-0 w-[325px] left-2 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/images/socialgraph/earn.png"
            className="absolute top-[405px] left-2 w-[325px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/images/socialgraph/cred.png"
            className="absolute top-[910px] w-[325px] left-2 z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/images/socialgraph/integrated.png"
            className="absolute top-[1160px] w-[325px] left-2 z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
        </div>

        <div className="flex flex-col mt-[155vh] px-4">
          <div className="flex justify-start items-start">
            <img src="/images/screen1/vector.png" />
          </div>
          <div className="flex flex-col">
            <p className="pt-4 text-[28px] font-medium">
              Social graph with
              <br />
              over 140,000
              <br />
              registered wallets!
            </p>
            <p className="pt-4 text-lg font-medium">
              Directly integrated in the TowneSquare <br />
              app, CRED social graph aggregates <br />
              social data from all on-chain activities<br />
              to complete the social profile of a user,<br />
              powering different social use cases in<br />
              DeFi, NFT, gaming, payments, etc.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[5vh]">
          <button className="px-4 py-2 text-base font-medium text-black rounded-full w-52 bg-primary-default">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileScreen;