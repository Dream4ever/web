import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Screen4() {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-2100px",
  //     end: "top top+=-2400px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.opacity = self.progress;
  //         node.style.transform = `translate(calc(-50% - ${50 * self.progress}vw), -50%)`
  //       }
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: "#feature",
  //     start: "top top+=-2700px",
  //     end: "top top+=-3000px",
  //     onUpdate: (self) => {
  //       if (ref1.current != null && (ref1.current as any).style != null) {
  //         let node = ref1.current as any;
  //         node.style.transform = `translate(calc(-50% - 50vw), calc(-50% - ${50 * self.progress}vh))`
  //       }
  //     },
  //   });

  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/images/features/feature4.svg" alt="feature4" />
      <div className="px-4 mt-[32px]">
        <h1 className="text-[30px]  font-bold">An all-in-one DM system</h1>
        <span className="text-[18px] font-normal leading-[30px]">
          Your user profile on TowneSquare is an identity system that seamlessly
          connects on-chain credentials, NFT membership, and other verifiable
          experiences to enable new use cases such as ticketing, reward drops,
          and authentication services.
        </span>
      </div>
    </div>
  );
}

export default Screen4;
