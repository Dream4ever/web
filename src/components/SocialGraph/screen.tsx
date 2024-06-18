import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useMemo } from "react";

const Screen = () => {

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
        className="absolute flex flex-col -translate-x-1/2 -translate-y-1/2 ite left-1/2 top-1/2"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="pt-4 text-2xl font-semibold bold text">
            Social graph
          </p>
          <p className="pt-4 text-5xl font-bold">
            CRED Social graph & profile
          </p>
        </div>

        <div className="relative w-[1200px] h-[400px] my-[10vh]">
          <img
            src="/images/socialgraph/profile.png"
            className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/images/socialgraph/earn.png"
            className="absolute top-0 left-[764px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/images/socialgraph/cred.png"
            className="absolute top-[290px] left-[384px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/images/socialgraph/integrated.png"
            className="absolute top-[290px] left-[1px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
        </div>

        <div className="flex flex-col justify-center mt-40">
          <div className="flex flex-col items-start pl-[110px] justify-left">
            <img src="/images/screen1/vector.png" />
          </div>
          <div className="flex items-center justify-center gap-28 text-start">
            <p className="pt-4 text-[40px] font-bold">
              Social graph with
              <br />
              over 140,000
              <br />
              registered wallets!
            </p>
            <p className="pt-4 text-2xl font-medium">
              Directly integrated in the TowneSquare app, CRED<br />
              social graph aggregates social data from all on-<br />
              chain activities to complete the social profile of a<br />
              user, powering different social use cases in DeFi,<br />
              NFT, gaming, payments, etc.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button className="px-4 py-2 text-base font-medium text-black rounded-full w-52 bg-primary-default">
            Download TowneSquare
            <p className="text-sm">Coming soon</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen;