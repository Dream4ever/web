import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useMemo, useRef } from 'react';

function Screen1() {
  const refMain = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const refText = useRef(null);
  const refText1 = useRef(null);

  const calcOpacity = (progress: number) => {
    return progress > 0.5 ? (progress - 0.5) / 0.5 : 0;
  };

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-0px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (refMain.current != null && (refMain.current as any).style != null) {
          let node = refMain.current as any;
          // node.style.marginTop = `calc(160px + ${0 * self.progress}px)`
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-1900px",
      end: "top top+=-2000px",
      onUpdate: (self) => {
        // if (refMain.current != null && (refMain.current as any).style != null) {
        //   let text = refText.current as any;
        //   let text1 = refText1.current as any;
        //   text1.style.opacity = calcOpacity(self.progress);
        //   text.style.opacity = calcOpacity(self.progress);
        // }
      },
    });
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-800px",
      end: "top top+=-1200px",
      onUpdate: (self) => {
        if (ref1.current != null && (ref1.current as any).style != null) {
          let node = ref1.current as any;
          node.style.transform = `translate(calc(-50% - ${450 * self.progress
            }px), calc(-50% - ${300 * self.progress}px))`;
        }

        if (ref2.current != null && (ref2.current as any).style != null) {
          let node = ref2.current as any;
          node.style.transform = `translate(calc(-50% - ${350 * self.progress
            }px), calc(-50% - ${100 * self.progress}px))`;
        }

        if (ref3.current != null && (ref3.current as any).style != null) {
          let node = ref3.current as any;
          node.style.transform = `translate(calc(-50% - ${450 * self.progress
            }px), calc(-50% + ${200 * self.progress}px))`;
        }

        if (ref4.current != null && (ref4.current as any).style != null) {
          let node = ref4.current as any;
          node.style.transform = `translate(calc(-50% + ${350 * self.progress
            }px), calc(-50% - ${100 * self.progress}px))`;
        }

        if (ref5.current != null && (ref5.current as any).style != null) {
          let node = ref5.current as any;
          node.style.transform = `translate(calc(-50% + ${450 * self.progress
            }px), calc(-50% + ${100 * self.progress}px))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="relative w-full mt-40 mb-[100px]"
      ref={refMain}
    >
      <img
        src="/images/screen1/spline1.png"
        className="absolute w-full top-[30vh]"
      />
      <img src="/images/screen1/spline2.png" className="absolute w-full" />
      <div
        className="flex flex-col items-center"
      >
        <div className="relative">
          <img
            src="/images/screen1/phone.png"
            alt="sign"
            className="relative z-20 transition-all"
          />
          <img
            src="/images/screen1/clip1.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            ref={ref1}
          />
          <img
            src="/images/screen1/clip2.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            ref={ref2}
          />
          <img
            src="/images/screen1/clip3.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            ref={ref3}
          />
          <img
            src="/images/screen1/clip4.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            ref={ref4}
          />
          <img
            src="/images/screen1/clip5.png"
            className="absolute z-10 transition-all -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            ref={ref5}
          />
        </div>
        <p ref={refText1} className="font-semibold text-2xl pt-[150px]">
          SOCIAL NETWORK ON MOBILE
        </p>
        <p ref={refText} className="pt-4 text-5xl font-bold"> TowneSquare mobile app</p>
        <div className="mt-28">
          <img src="/images/screen1/vector.png" />
          <div className="flex gap-[72px] mt-4">
            <span className="font-bold text-[40px]">
              The app for social
              <br />
              referrals, incentives,
              <br />
              and monetization
            </span>
            <span className="text-[23px] font-medium font-[Inter]">
              TowneSquare enables unique monetization and
              <br />
              financial opportunities for individuals, KOLs,
              <br />
              communities, and projects to earn in their social
              <br /> experiences
            </span>
          </div>
          <div className="flex justify-center mt-20">
            <button className="px-4 py-2 w-[222px] whitespace-nowrap text-base leading-none font-medium text-black rounded-full  bg-secondary-cyan hover:bg-secondary-cyan/70">
              Download TowneSquare
              <p className="text-sm font-normal">Coming soon</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
