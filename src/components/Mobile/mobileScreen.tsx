import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useMemo } from "react";

const MobileScreen = () => {

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
      start: "top top+=300px",
      end: "top top+=100px",
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
      start: "top top+=100px",
      end: "top top+=-100px",
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
      start: "top top+=-100px",
      end: "top top+=-300px",
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
      start: "top top+=-300px",
      end: "top top+=-500px",
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
      start: "top top+=-500px",
      end: "top top+=-700px",
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
      start: "top top+=-700px",
      end: "top top+=-900px",
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
      start: "top top+=-900px",
      end: "top top+=-1100px",
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
      start: "top top+=-1100px",
      end: "top top+=-1300px",
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
        className="flex flex-col mb-[90px]"
      >
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-lg font-semibold bold text">
            COMPOSABLE NFT COLLECTION
          </p>
          <p className="pt-4 text-4xl font-bold leading-tight text-center">
            Cool Sloths <br /> mobile mint
          </p>
        </div>
        <div className="flex justify-center my-10">
          <a
            href="https://x.com/CoolSlothsxyz"
            target="_blank"
            rel="noreferrer"
            className="px-4 h-[52px] py-3 text-base text-center font-medium rounded-full w-[200px] bg-primary-default hover:bg-primary-default/70"
          >
            <p className="text-base font-medium leading-7">Follow @CoolSlothsxyz</p>
          </a>
        </div>
        <div className="relative w-full h-[550px] mb-[3vh]">
          <img
            src="/assets/mobile/hooray.png"
            className="absolute top-[80px] left-[10px] z-10 w-[90px] transition-all translate-y-[100vh] opacity-0"
            ref={ref1}
          />
          <img
            src="/assets/mobile/coollist.png"
            className="absolute -top-[00px] left-[150px] z-10 w-[135px] transition-all  translate-y-[100vh]"
            ref={ref2}
          />
          <img
            src="/assets/mobile/fireavatar.png"
            className="absolute top-36 left-[110px] w-[135px] z-10 transition-all  translate-y-[100vh]"
            ref={ref3}
          />
          <img
            src="/assets/mobile/head.png"
            className="absolute top-[285px] left-[110px] w-[75px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}
          />
          <img
            src="/assets/mobile/evolve.png"
            className="absolute top-[200px] -left-[30px] w-[132px] z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref5}
          />
          <img
            src="/assets/mobile/avatar.png"
            className="absolute top-[285px] left-[200px] w-[108px] z-10 transition-all  translate-y-[100vh]"
            ref={ref6}
          />
          <img
            src="/assets/mobile/sloths.png"
            className="absolute top-[370px] left-[30px] w-[132px] z-10 transition-all  translate-y-[100vh]"
            ref={ref7}
          />
          <img
            src="/assets/mobile/mobileimg.png"
            className="absolute top-[400px] left-[200px] w-[72px] z-10 transition-all  translate-y-[100vh]"
            ref={ref8}
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[18px] font-medium">
            <span className="font-extrabold">TowneSquare</span> is the home of the 1st<br />Web3 mobile mint experience,<br />
            powered by the TowneSquare Mini-<br />App module called Tile
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileScreen;