import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";

function MobileScreen() {
  const refMain = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const calcOpacity = (progress: number) => {
    return progress > 0.5 ? (progress - 0.5) / 0.5 : 0;
  };

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-0px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        // if (refMain.current != null && (refMain.current as any).style != null) {
        //   let node = refMain.current as any;
        //   // node.style.marginTop = `calc(30vh + ${0 * self.progress}px)`
        // }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-800px",
      end: "top top+=-1000px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1000px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1200px",
      end: "top top+=-1400px",
      onUpdate: (self) => {
        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1400px",
      end: "top top+=-1600px",
      onUpdate: (self) => {
        if (ref4.current != null && (ref4.current as any).style != null) {
          let node = ref4.current as any;
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-1600px",
      end: "top top+=-1800px",
      onUpdate: (self) => {
        if (ref5.current != null && (ref5.current as any).style != null) {
          let node = ref5.current as any;
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="relative w-full mt-28"
      ref={refMain}
    >
      <img
        src="/images/screen1/spline1.png"
        className="absolute w-full top-[30vh] md:block hidden"
      />
      <img src="/images/screen1/spline2.png" className="absolute hidden w-full md:block" />
      <div
        className="flex flex-col items-center"
      >
        <div className="relative flex justify-center w-full">
          <img
            src="/images/screen1/phone.png"
            alt="sign"
            className="relative z-20 transition-all md:w-full w-[50%] h-full"
          />
          <img
            src="/images/screen1/clip1.png"
            className="absolute top-[30vh] left-[2vw] z-10 transition-all translate-y-[100vh] opacity-0 w-[30%]"
            ref={ref1}
          />
          <img
            src="/images/screen1/clip2.png"
            className="absolute top-[40vh] left-[35vw] z-10 transition-all translate-y-[100vh] opacity-0 w-[30%]"
            ref={ref2}
          />
          <img
            src="/images/screen1/clip3.png"
            className="absolute top-[50vh] left-[2vw] z-10 transition-all translate-y-[100vh] opacity-0 w-[30%]"
            ref={ref3}
          />
          <img
            src="/images/screen1/clip4.png"
            className="absolute top-[35vh] left-[68vw] z-10 transition-all translate-y-[100vh] opacity-0 w-[30%]"
            ref={ref4}
          />
          <img
            src="/images/screen1/clip5.png"
            className="absolute top-[53vh] left-[68vw] z-10 transition-all translate-y-[100vh] opacity-0 w-[30%]"
            ref={ref5}
          />
        </div>
        <p className="text-lg font-semibold md:text-2xl mt-[250px]">
          SOCIAL NETWORK ON MOBILE
        </p>
        <p className="pt-4 text-4xl font-bold text-center md:text-5xl"> TowneSquare <br />mobile app</p>
        <div className="w-full px-4 mt-[70px]">
          <img src="/images/screen1/vector.png" />
          <div className="flex flex-col gap-4 mt-4">
            <span className="font-bold text-[28px]">
              The app for social
              <br />
              referrals, incentives,
              <br />
              and monetization
            </span>
            <span className="text-lg font-medium">
              TowneSquare enables unique
              <br />
              monetization and financial
              <br />
              opportunities for individuals, KOLs,
              <br />
              communities, and projects to earn
              <br />in their social experiences
            </span>
          </div>
          <div className="flex justify-center mt-14">
            <button className="px-4 py-2 text-base font-medium text-black rounded-full w-60 bg-secondary-cyan">
              Download TowneSquare
              <p className="text-sm">Coming soon</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileScreen;
