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
      start: "top top+=300px",
      end: "top top+=0px",
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
      trigger: "#socialgraph",
      start: "top top+=0px",
      end: "top top+=-300px",
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
      trigger: "#socialgraph",
      start: "top top+=-300px",
      end: "top top+=-600px",
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
      trigger: "#socialgraph",
      start: "top top+=-600px",
      end: "top top+=-900px",
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
    <div className="flex flex-col mb-[300px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-semibold pt-14 bold text">Social graph</p>
          <p className="pt-4 text-4xl font-bold text-center">
            CRED Social graph <br />
            &profile
          </p>
        </div>
      </div>
      <div className="relative w-full h-[1190px] my-[2vh]">
        <div
          className="absolute top-0 w-[325px] left-2 z-10 transition-all translate-y-[100vh] opacity-0"
          ref={ref1}
        >
          <img src="/assets/social/mobile1.png" />
          <div className="absolute pl-6 bottom-5">
            <p className="text-[#FFF] text-[28px] font-semibold">
              Complete your Social <br />
              graph profile
            </p>
            <p className="text-[#FFFFFF] text-[14px] font-normal">
              Own and take your Web3 data with you
            </p>
          </div>
        </div>
        <div
          className="absolute top-[405px] left-2 w-[325px] z-10 transition-all  translate-y-[100vh]"
          ref={ref2}
        >
          <img src="/assets/social/mobile2.png" />
          <div className="absolute pl-6 text-center top-40">
            <p className="text-[#FFF] text-[28px] font-semibold">
              Earn $CRED Rewards
            </p>
            <p className="text-[#FFFFFF] text-[14px] font-normal">
              Just by being active on Web3
            </p>
          </div>
        </div>
        <div
          className="absolute top-[810px] w-[325px] left-2 z-10 transition-all  translate-y-[100vh]"
          ref={ref3}
        >
          <img src="/assets/social/mobile3.png" />
        </div>
        <div
          className="absolute top-[1015px] w-[325px] left-2 z-10 transition-all  translate-y-[100vh]"
          ref={ref4}
        >
          <img src="/assets/social/mobile4.png" />
          <div className="absolute pl-20 text-center top-8">
            <p className="text-[#FFF] text-[28px] font-semibold">
              Integrated in
            </p>
            <p className="text-[#FFFFFF] text-[14px] font-normal mt-16">
              Earn and benefit from CRED
              <br />
              directly in TowneSquare
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 mt-[72px]">
        <div className="flex items-start justify-start">
          <img src="/assets/vector.png" />
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
            social data from all on-chain activities
            <br />
            to complete the social profile of a user,
            <br />
            powering different social use cases in
            <br />
            DeFi, NFT, gaming, payments, etc.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[60px]">
        <button className="px-4 py-3 text-base font-medium text-black rounded-full w-52 bg-[#FFFFFF]">
          Register on CRED
        </button>
      </div>
    </div>
  );
};

export default MobileScreen;
