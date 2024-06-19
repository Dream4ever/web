import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo, useRef } from "react";

function MobileScreen() {
  const refMain = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-0px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          node.style.marginTop = `calc(160px + ${0 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-800px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${120 * self.progress
            }px), calc(-50% - ${-100 * self.progress}px))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;
        }

        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - ${120 * self.progress
            }px), calc(-50% - ${-260 * self.progress}px))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;

        }

        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.transform = `translate(calc(-50% - ${0 * self.progress
            }px), calc(-50% + ${230 * self.progress}px))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;

        }

        if (ref4.current != null && (ref4.current as any).style != null) {
          let node = ref4.current as any;
          node.style.transform = `translate(calc(-50% + ${120 * self.progress
            }px), calc(-50% - ${-150 * self.progress}px))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;

        }

        if (ref5.current != null && (ref5.current as any).style != null) {
          let node = ref5.current as any;
          node.style.transform = `translate(calc(-50% + ${120 * self.progress
            }px), calc(-50% + ${300 * self.progress}px))`;
          self.progress === 1 ? node.style.zIndex = 30 : node.style.zIndex = 10;

        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="relative w-full mt-40"
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
        <div className="relative flex justify-center">
          <img
            src="/images/screen1/phone.png"
            alt="sign"
            className="relative z-20 transition-all md:w-full w-[50%] h-full"
          />
          <img
            src="/images/screen1/clip1.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[30%]"
            ref={ref1}
          />
          <img
            src="/images/screen1/clip2.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[30%]"
            ref={ref2}
          />
          <img
            src="/images/screen1/clip3.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[30%]"
            ref={ref3}
          />
          <img
            src="/images/screen1/clip4.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[30%]"
            ref={ref4}
          />
          <img
            src="/images/screen1/clip5.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[30%]"
            ref={ref5}
          />
        </div>
        <p className="font-semibold text-lg md:text-2xl pt-[22vh]">
          SOCIAL NETWORK ON MOBILE
        </p>
        <p className="pt-4 text-4xl font-bold text-center md:text-5xl"> TowneSquare <br />mobile app</p>
        <div className="w-full px-4 mt-20">
          <img src="/images/screen1/vector.png" />
          <div className="flex flex-col gap-10 md:flex md:flex-row">
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
          <div className="flex justify-center mt-4">
            <button className="px-2 py-2 text-base font-medium text-black rounded-full w-52 bg-secondary-cyan">
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
