import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";

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
          node.style.transform = `translate(-50%, calc(-50% + ${
            150 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
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
          node.style.transform = `translate(0px, calc(${
            100 * (1 - self.progress)
          }vh))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <img
        src="/images/screen1/spline1.png"
        className="absolute w-full top-[30vh]"
      />
      <img src="/images/screen1/spline2.png" className="absolute w-full" />
      <div
        // ref={refMain}
        className="absolute flex flex-col -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
      >
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

        <div className="relative w-[1200px] h-[400px] mt-48">
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
