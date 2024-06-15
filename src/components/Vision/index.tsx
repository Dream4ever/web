import {
  Tween,
  ScrollTrigger,
} from "react-gsap";

let percentage = 0;

function Vision() {
  const transform = () => {
    const sticky = document.querySelector(".sticky_2");
    const offSetTop = sticky?.parentElement?.offsetTop;
    const scrollSection = sticky?.querySelector(".scroll_section");
    let value = 0;
    let limit = 400;
    if (window.innerWidth < 768) {
      limit = 600;
    }

    if (offSetTop !== undefined) {
      value = ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = value < 0 ? 0 : value > limit ? limit : value;
    }
    scrollSection?.setAttribute(
      "style",
      `transform:translate3d(${-percentage}vw, 0, 0)`
    );
  };

  window.addEventListener("scroll", (e) => {
    transform();
  });

  return (
    <div id="visionDiv" className="h-full bg-black bg-right-bottom bg-no-repeat bg-contain scroll-smooth lg:bg-vision-bg">
      <div className="h-[750vh] md:h-[550vh]">
        <ScrollTrigger start="800px" end="900px" scrub={0.5}>
          <div className="sticky sticky_2 overflow-hidden top-0 h-[100vh]">
            <Tween
              from={{
                opacity: 1,
              }}
              to={{
                opacity: 0,
              }}
            >
              <div className="absolute w-screen h-full">
                <img src="/images/home/center_web.svg" className="absolute" alt="" />
                <img src="/images/home/white_middle_web.svg" className="absolute top-64" alt="" />
              </div>
            </Tween>

            <div className="relative scroll_section h-[100%] w-[1200vw] md:w-[600vw] will-change-transform flex">
              <div className="bg-no-repeat bg-cover bg-L3">
                <div className="relative flex items-center justify-center w-[125vw] pr-[25vw] md:px-0 md:w-screen h-screen text-white bg-black left-100 lg:bg-transparent font-Outfit"
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center intro">
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        We want to put the power of Web3 in
                      </p>
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        the hands of billions, so we created
                      </p>
                      <p className="md:text-[48px] text-[40px] text-center font-Outfit font-medium ">
                        {" "}
                        TowneSquare
                      </p>
                      <img
                        alt="signature"
                        className="transition ease-in delay-1000 bottom-52"
                        src="/images/signature.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-[50] bg-no-repeat bg-cover bg-L3" data-component="Vision">
                <div className="flex items-center justify-center w-[150vw] px-[25vw] md:px-0 md:w-screen h-screen envision">
                  <div className="text-center">
                    <p className="text-[32px] text-center text-white">
                      Envision a future where everyone has
                    </p>
                    <h1 className="md:text-[48px] text-[40px] font-Outfit font-medium">
                      finance, informational, and identity freedom
                    </h1>
                    {/* <Reveal repeat>
                      <Tween
                        from={{ color: "#FFF" }}
                        to={{ color: "#FFF" }}
                        duration={4}
                        stagger={0.2}
                      >
                        <SplitChars
                          wrapper={
                            <h1
                              className="md:text-[48px] font-Outfit font-medium"
                              style={{ display: "inline-block" }}
                            />
                          }
                        >
                          finance, informational ,and identity freedom
                        </SplitChars>
                      </Tween>
                    </Reveal> */}
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L5" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-[150vw] px-[25vw] md:px-2 md:w-screen h-screen text-white financial z-100 font-Outfit lg:flex-row md:flex-row">
                  <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <picture>
                      <source
                        srcSet="/images/financial_freedom_2x.webp"
                        type="image/webp"
                      />
                      <img srcSet="/images/financial_freedom_2x.webp" alt='financial_freedom' className="min-w-[316px]" />
                    </picture>
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold ">Financial freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px] md:text-[22px]">
                      Don't like centralized institutions or other third{" "}
                      <p>parties mess with your finance? Neither do we</p>
                      <p> Liberate yourself and seize limitless financial</p>
                      <p>opportunities with TowneSquare.</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L6" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-[150vw] px-[25vw] md:px-2 md:w-screen h-screen  text-white font-Outfit lg:flex-row md:flex-row">
                  <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <picture>
                      <source
                        srcSet="/images/informational_freedom_2x.webp"
                        type="image/webp"
                      />
                      <img srcSet="/images/informational_freedom_2x.webp" alt='informational_freedom' className="min-w-[316px]" />
                    </picture>
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold ">Informational freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px]  md:text-[22px]">
                      Ignite the flow of information and ideas{" "}
                      <p>in a public town square, governed by</p>
                      <p> user-defined rules, liberated from the </p>
                      <p>grasp of centralized data managers.</p>
                      <p>Explore, share and discover without</p>
                      <p>Limitation</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat bg-cover bg-L7" data-component="Vision">
                <div className="flex flex-col items-center justify-center w-[150vw] px-[25vw] md:px-2 md:w-screen h-screen text-white font-Outfit lg:flex-row md:flex-row">
                  <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                    <picture>
                      <source
                        srcSet="/images/identity_freedom_2x.webp"
                        type="image/webp"
                      />
                      <img srcSet="/images/identity_freedom_2x.webp" alt='identity_freedom' className="min-w-[316px]" />
                    </picture>
                  </div>
                  <div>
                    <p className="py-2 font-light">With TowneSquare you get</p>
                    <div className="py-4">
                      <h1 className="md:text-[40px] text-[30px] font-bold">Identity freedom</h1>
                      <img
                        src="/images/financial_img.svg"
                        alt="financial_image"
                      />
                    </div>
                    <p className="font-normal text-[18px] leading-[30px] md:leading-[34px] md:text-[22px]">
                      Embrace the power to shape and{" "}
                      <p>cultivate your unique identity and </p>{" "}
                      <p> persona. Own your verifable history </p>{" "}
                      <p> records, securely stored on decentralized</p>
                      <p>ledgers, empowering you to define and </p>{" "}
                      <p> express yourself authentically.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Vision;