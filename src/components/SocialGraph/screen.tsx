import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useMemo, useRef } from 'react';

const Screen = () => {

  const refMain = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const refDiv = useRef(null);

  const calcOpacity = (progress: number) => {
    return progress > 0.5 ? (progress - 0.5) / 0.5 : 0;
  };
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#socialgraph",
      start: "top top+=600px",
      end: "top top+=300px",
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
      start: "top top+=300px",
      end: "top top+=0px",
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
      start: "top top+=0px",
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
      trigger: "#socialgraph",
      start: "top top+=-300px",
      end: "top top+=-600px",
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
      trigger: "#socialgraph",
      start: "top top+=-600px",
      end: "top top+=-900px",
      onUpdate: (self) => {
        if (refDiv.current != null && (refDiv.current as any).style != null) {
          let node = refDiv.current as any;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);


  return (
    <>
      <div
        className="flex flex-col mt-[100px] mb-[100px]"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="pt-4 text-2xl font-semibold bold text">
              Social graph
            </p>
            <p className="pt-4 text-5xl font-bold">
              CRED Social graph & profile
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <a
            href="https://x.com/townesquarexyz"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-base font-medium text-black text-center rounded-full w-48 h-12 bg-[#FFFFFF] hover:bg-[#FFFFFF]/70 flex justify-center items-center"
          >
            Register on CRED
          </a>
        </div>
        <div className="relative w-[1200px] h-[400px] my-[7vh]">
          <div className="absolute top-0 left-0 z-10 transition-all translate-y-[100vh] opacity-0"
            ref={ref1}>
            <img
              src="/assets/social/social1.png" className="w-[752px]"
            />
            <div className="absolute px-6 top-14">
              <p className="text-[#FFF] text-[40px] font-semibold">Complete your <br /> Social graph profile</p>
              <p className="text-[#FFFFFF] text-base font-weight">Own and take your Web3 data with you</p>
            </div>
          </div>
          <div className="absolute top-0 left-[764px] z-10 transition-all  translate-y-[100vh]"
            ref={ref2}>
            <img
              src="/assets/social/social2.png" className="w-[368px]"
            />
            <div className="absolute text-center top-40 left-[70px]">
              <p className="text-[#FFF] text-[40px] font-semibold">Earn $CRED<br /> Rewards</p>
              <p className="text-[#FFFFFF] text-base font-weight">Just by being active on Web3</p>
            </div>
          </div>

          <img
            src="/assets/social/social3.png"
            className="absolute top-[290px] left-[384px] z-10 transition-all  translate-y-[100vh] w-[368px]"
            ref={ref3}
          />
          <div className="absolute top-[290px] left-[1px] z-10 transition-all  translate-y-[100vh]"
            ref={ref4}>
            <img
              src="/assets/social/social4.png" className="w-[368px]"
            />
            <div className="absolute text-center top-10 left-[72px]">
              <p className="text-[#FFF] text-[40px] font-semibold">Integrated in</p>
              <p className="text-[#FFFFFF] text-base font-weight mt-24">Earn and benefit from CRED<br />directly in TowneSquare</p>
            </div>
          </div>
        </div>

        <div ref={refDiv} className="flex flex-col justify-center mt-[200px] opacity-0">
          <div className="flex flex-col items-start pl-[110px] justify-left">
            <img src="/assets/vector.png" />
          </div>
          <div className="flex items-center justify-center gap-28 text-start">
            <p className="pt-4 text-[40px] font-bold">
              Social graph with
              <br />
              over 140,000
              <br />
              registered wallets!
            </p>
            <p className="font-[Outfit] text-[23px] pt-4 font-medium">
              Directly integrated in the TowneSquare app, CRED<br />
              social graph aggregates social data from all on-<br />
              chain activities to complete the social profile of a<br />
              user, powering different social use cases in DeFi,<br />
              NFT, gaming, payments, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;