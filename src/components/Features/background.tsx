import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useMemo, useRef } from "react";

function Background({ children }: { children?: ReactNode }) {
  const backgroundRef = useRef(null);

  const bgStart = "linear-gradient(169.95deg, #000000 7.53%, #000000 94.82%)";
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-400px",
      end: "top top+=-900px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;
          const startColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor1 = { r: 0x5e, g: 0x40, b: 0x9e };
          const startColor2 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor2 = { r: 0x35, g: 0x25, b: 0x57 };

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 7.53%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 94.82%)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=900px",
      end: "top top+=400px",
      onUpdate: (self) => {
        console.log("background=>", self.progress)
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x5e, g: 0x40, b: 0x9e };
          const endColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const startColor2 = { r: 0x35, g: 0x25, b: 0x57 };
          const endColor2 = { r: 0x00, g: 0x00, b: 0x00 };
          // background: linear-gradient(165.04deg, #4EB6AC 0.94%, #21747E 48.34%, #135F69 64.04%);

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 7.53%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 94.82%)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#socialgraph",
      start: "top top+=500px",
      end: "top top+=0px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor1 = { r: 0x4e, g: 0x86, b: 0xac };
          const startColor2 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor2 = { r: 0x21, g: 0x74, b: 0x7e };
          const startColor3 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor3 = { r: 0x13, g: 0x5f, b: 0x69 };
          // background: linear-gradient(165.04deg, #4EB6AC 0.94%, #21747E 48.34%, #135F69 64.04%);

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          const currentColor3 = {
            r: startColor3.r + progress * (endColor3.r - startColor3.r),
            g: startColor3.g + progress * (endColor3.g - startColor3.g),
            b: startColor3.b + progress * (endColor3.b - startColor3.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 0.94%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 48.34%, rgb(${currentColor3.r}, ${currentColor3.g}, ${currentColor3.b}) 64.0%)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#mobile",
      start: "top top+=500px",
      end: "top top+=0px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x4e, g: 0x86, b: 0xac };
          const endColor1 = { r: 0x5e, g: 0x40, b: 0x9e };
          const startColor2 = { r: 0x21, g: 0x74, b: 0x7e };
          const endColor2 = { r: 0x35, g: 0x25, b: 0x57 };
          const startColor3 = { r: 0x13, g: 0x5f, b: 0x69 };
          const endColor3 = { r: 0x35, g: 0x25, b: 0x57 };

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          const currentColor3 = {
            r: startColor3.r + progress * (endColor3.r - startColor3.r),
            g: startColor3.g + progress * (endColor3.g - startColor3.g),
            b: startColor3.b + progress * (endColor3.b - startColor3.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 0.94%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 48.34%, rgb(${currentColor3.r}, ${currentColor3.g}, ${currentColor3.b}) 64.0%)`;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "#join",
      start: "top top+=500px",
      end: "top top+=200px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x5e, g: 0x40, b: 0x9e };
          const endColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const startColor2 = { r: 0x35, g: 0x25, b: 0x57 };
          const endColor2 = { r: 0x00, g: 0x00, b: 0x00 };
          const startColor3 = { r: 0x35, g: 0x25, b: 0x57 };
          const endColor3 = { r: 0x00, g: 0x00, b: 0x00 };

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          const currentColor3 = {
            r: startColor3.r + progress * (endColor3.r - startColor3.r),
            g: startColor3.g + progress * (endColor3.g - startColor3.g),
            b: startColor3.b + progress * (endColor3.b - startColor3.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 0.94%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 48.34%, rgb(${currentColor3.r}, ${currentColor3.g}, ${currentColor3.b}) 64.0%)`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-screen"
      style={{ background: bgStart }}
      ref={backgroundRef}
    ></div>
  );
}

export default Background;
