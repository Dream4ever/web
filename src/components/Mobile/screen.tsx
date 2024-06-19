import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useMemo } from "react";

const Screen = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const calcOpacity = (progress: number) => {
    return progress > 0.5 ? (progress - 0.5) / 0.5 : 0;
  };
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=-300px",
      end: "top top+=-500px",
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
      trigger: "#mobile",
      start: "top top+=-500px",
      end: "top top+=-700px",
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
      trigger: "#mobile",
      start: "top top+=-700px",
      end: "top top+=-900px",
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
      trigger: "#mobile",
      start: "top top+=-900px",
      end: "top top+=-1100px",
      onUpdate: (self) => {
        if (ref4.current != null && (ref4.current as any).style != null) {
          let node = ref4.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=-1100px",
      end: "top top+=-1300px",
      onUpdate: (self) => {
        if (ref5.current != null && (ref5.current as any).style != null) {
          let node = ref5.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=-1300px",
      end: "top top+=-1500px",
      onUpdate: (self) => {
        if (ref6.current != null && (ref6.current as any).style != null) {
          let node = ref6.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=-1500px",
      end: "top top+=-1700px",
      onUpdate: (self) => {
        if (ref7.current != null && (ref7.current as any).style != null) {
          let node = ref7.current as any;
          node.style.opacity = calcOpacity(self.progress);
          node.style.transform = `translate(0px, calc(${100 * (1 - self.progress)
            }vh))`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=-1700px",
      end: "top top+=-2000px",
      onUpdate: (self) => {
        if (ref8.current != null && (ref8.current as any).style != null) {
          let node = ref8.current as any;
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
          <p className="pt-4 text-2xl font-semibold bold text">
            COMPOSAblE NFT COLLECTION
          </p>
          <p className="pt-4 text-5xl font-bold">
            Cool Sloths mobile mint
          </p>
        </div>

        <div className="relative w-[1200px] h-[400px] my-[7vh]">
          <img
            src="/images/mobile/hooray.png"
            className="absolute top-[80px] left-32 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/images/mobile/coollist.png"
            className="absolute -top-[60px] left-[434px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/images/mobile/fireavatar.png"
            className="absolute top-8 left-[724px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/images/mobile/head.png"
            className="absolute -top-16 left-[919px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
          <img
            src="/images/mobile/evolve.png"
            className="absolute top-[330px] left-8 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref5}
          />
          <img
            src="/images/mobile/avatar.png"
            className="absolute top-[230px] left-[324px] z-10 transition-all  translate-y-[100vh]"
            ref={ref6}
          />
          <img
            src="/images/mobile/sloths.png"
            className="absolute top-[230px] left-[615px] z-10 transition-all  translate-y-[100vh]"
            ref={ref7}
          />
          <img
            src="/images/mobile/mobileimg.png"
            className="absolute top-[230px] left-[810px] z-10 transition-all  translate-y-[100vh]"
            ref={ref8}
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-[150px]">
          <p className="text-[23px] font-medium">
            <span className="font-extrabold">TowneSquare</span> is the home of the 1st Web3 mobile mint experience,<br />
            powered by the TowneSquare Mini-App module called Tile

          </p>
        </div>
        <div className="flex justify-center mt-2">
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