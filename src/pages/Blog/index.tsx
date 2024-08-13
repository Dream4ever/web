import React, { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./Card";

export interface CardType {
  image: string,
  label: string,
  content: string,
  date: string
};

const Blog = () => {

  const contentRef = useRef<any>(null);
  const backgroundRef = useRef<any>(null);

  const toggleMouseOver = () => {
    (contentRef.current as any).style.color = "#B882FF";
    (backgroundRef.current as any).style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))";
  }

  const toggleMouseOut = () => {
    (contentRef.current as any).style.color = "#FFFFFF";
    (backgroundRef.current as any).style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
  }

  const toggleMouseClick = () => {
    (contentRef.current as any).style.color = "#6646AE"
  }

  const toggleMouseUp = () => {
    (contentRef.current as any).style.color = "#FFFFFF"
  }

  return (
    <div className="bg-[#111111]">
      <Header />
      <div id="join" className="relative z-20 flex justify-center w-full">
        <div className="absolute top-0 left-0 z-0 hidden w-full md:block">
          <img src="/assets/blog/back.svg" className="absolute z-0 " alt="" />
          <img src="/assets/blog/line_pink.svg" className="absolute z-0" alt="" />
          <img src="/assets/blog/line_green.svg" className="absolute z-0 top-28" alt="" />
        </div>
        <div className="absolute top-0 left-0 z-0 block w-full md:hidden">
          <img src="/assets/blog/mobile_main_back.svg" className="absolute z-0 w-full" alt="" />
          <img src="/assets/blog/mobile_line_pink.svg" className="absolute z-0 w-full top-16" alt="" />
          <img src="/assets/blog/mobile_line_green.svg" className="absolute top-0 z-0 w-full" alt="" />
        </div>
        <div className=" mt-[70px] w-full flex flex-col  gap-12 px-[16px] py-8 z-50">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="md:text-5xl text-4xl font-bold text-center font-Outfit leading-[150.3%] mb-20 mt-3">Town Blog</p>
            <div className='relative z-50 items-start justify-start hidden mb-12 md:block' onMouseUp={toggleMouseUp} onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOut} onClick={toggleMouseClick}>
              <img src="/assets/blog/main_back.png" className="w-[1216px] inset-0 -z-10" alt=""
              />
              <div ref={backgroundRef} className='absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black'
                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }}
              />
              <div className="items-start justify-start ">
                <button className="absolute bottom-40 left-10 px-[10px] py-1 bg-primary-default rounded-md mb-4 font-Outfit text-sm font-medium leading-[20px]">Monad</button>
                <p ref={contentRef} className="absolute bottom-16 left-10 text-[32px] font-semibold leading-[40px] font-Outfit mb-6 text-start">Monad on rise! How it will change the crypto<br /> as we know it</p>
                <p className="absolute bottom-10 left-10 text-base font-normal font-Outfit leading-[24px]">August 20, 2022</p>
              </div>
            </div>
            <div className="block w-screen mt-4 md:hidden">
              <img src="/assets/blog/mobile_back.png" className="w-[100%]" alt="" />
              <div className="flex flex-col items-start justify-start w-full px-8 py-10">
                <button className="w-20 px-[10px] py-2 bg-primary-default text-sm font-Outfit font-medium leading-[20px] mb-4 rounded-md">Monad</button>
                <p className="font-Outfit text-[29px] font-semibold leading-[34px] text-start">Monad on rise! How it will change the crypto as we know it</p>
                <p className="text-base font-normal leading-[150%] text-[#999] mt-2">August 20, 2022</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {CardList.map((card, index) => (
                <Card data={card} key={index} />
              ))}
            </div>
            <button className="px-6 py-2 mt-10 mb-4 text-base font-bold leading-normal border-2 rounded-full border-primary-default hover:text-primary-default font-Outfit">Load more</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CardList: CardType[] = [
  {
    image: "/assets/blog/card/mobile.png",
    label: "Web3",
    content: "Bridging the gap between the Web2 and Web3 users - the right way!",
    date: "August 20, 2024"
  },
  {
    image: "/assets/blog/card/cool_sloths.png",
    label: "Composable NFT",
    content: "Composable NFTs? Yes, its possible!",
    date: "August 20, 2024"
  },
  {
    image: "/assets/blog/card/chain.png",
    label: "Web3",
    content: "The Impact of Web3 on the Workplace: How Technology is Changing",
    date: "August 20, 2024"
  },
  {
    image: "/assets/blog/card/monad.png",
    label: "Partnership",
    content: "TowneSquare is partnering with Monad!",
    date: "August 20, 2024"
  },
  {
    image: "/assets/blog/card/resource.png",
    label: "Composable NFT",
    content: "Why are the Composable NFTs the next big thing",
    date: "August 20, 2024"
  },
  {
    image: "/assets/blog/card/resource.png",
    label: "Composable NFT",
    content: "Why are the Composable NFTs the next big thing",
    date: "August 20, 2024"
  },
]

export default Blog;