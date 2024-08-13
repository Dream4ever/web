import { Link } from "react-router-dom";
import { CardType } from "..";
import Header from "../../../components/Header";
import Card from "../Card";
import Footer from "../../../components/Footer";
import "./index.css";
import Slider from "react-slick";

const Detail = () => {
  const settings = {
    infinite: false,
    slidesToShow: 1.4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="bg-black">
      <Header />
      <div id="join" className="z-20 flex justify-center w-full ">
        <div className=" mt-[70px] flex flex-col  gap-12 px-4 md:px-[60px] py-8 z-50">
          <div className="mx-4 md:mx-32">
            <div className="hidden gap-3 mb-12 md:flex">
              <Link to="/blog" className="text-base font-medium leading-[150%] font-Outfit text-primary-default hover:text-primary-default/30">
                Town Blog
              </Link>
              <div className="border-x"></div>
              <p className="text-base font-normal leading-[150%] font-Outfit text-[#999]">Composable NFTs? Yes, its possible!</p>
            </div>
            <div className="">
              <button className=" h-8 px-[12px] py-[6px] bg-primary-default text-sm font-Outfit font-medium leading-[20px] rounded-md mb-2 md:mb-5">Composable NFT</button>
              <p className="text-4xl font-semibold leading-[40px] font-Outfit py-4">Composable NFTs? Yes, its possible!</p>
              <p className="text-base font-normal font-Outfit leading-[24px] text-[#999] -mb-4 md:mb-10">August 20, 2022</p>
            </div>
          </div>
          <div className="flex w-screen md:w-full">
            <img src="/assets/blog/detail.png" className="md:w-[1058px] -mb-4 md:mb-10" alt="" />
          </div>
          <div className="mx-6 md:mx-32 w-[screen] md:w-[800px]">
            <p className="mb-10 text-xl font-normal font-Outfit leading-[160%]">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus metus et tortor feugiat, <span className="text-primary-default">www.coolclosths.com</span> nulla lobortis. Duis feugiat nibh magna, lobortis congue lectus sodales vel. Etiam aliquet nisl quis risus laoreet iaculis. In hac habitasse platea dictumst. Aliquam erat volutpat. Sed auctor aliquet pretium. Vestibulum ut lectus vel nibh fringilla dapibus. Donec mollis nibh at lorem volutpat pulvinar. Quisque pellentesque diam eu neque volutpat, vitae pharetra dui viverra.</p>
            <p className="text-xl font-normal font-Outfit leading-[160%]">Aliquam quis massa nisi. Aliquam convallis, purus et varius tristique, tortor magna efficitur neque, non dictum diam nunc sed dolor. Vivamus lobortis id neque at iaculis. Aenean tempor, quam ac dignissim blandit, quam lacus facilisis erat, sit amet facilisis purus orci eu erat. Maecenas ullamcorper leo eu massa sodales, at commodo metus bibendum. Fusce imperdiet nibh vitae ullamcorper convallis. Etiam finibus eu justo eget ultrices.</p>
            <p className="text-[26px] font-Outfit font-normal leading-[140%] py-10"><span className="text-primary-default">“</span>Sed vehicula tortor mauris, eget finibus ipsum convallis non. Quisque molestie nec nisl ac maximus. Donec dapibu<span className="text-primary-default">”</span></p>
            <p className="text-[27px] font-Outfit font-semibold leading-[28px] mb-4">Why composing NFTs?</p>
            <p className="text-xl font-normal font-Outfit leading-[160%]">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus metus et tortor feugiat, quis pretium nulla lobortis. Duis feugiat nibh magna, lobortis congue lectus sodales vel. Etiam aliquet nisl quis risus laoreet iaculis. In hac habitasse platea dictumst. Aliquam erat volutpat. Sed auctor aliquet pretium. Vestibulum ut lectus vel nibh fringilla dapibus. Donec mollis nibh at lorem volutpat pulvinar. Quisque pellentesque diam eu neque volutpat, vitae pharetra dui viverra.</p>
            <p className="mt-10 text-xl font-normal font-Outfit leading-[160%]">Sed vehicula tortor mauris, eget finibus ipsum convallis non. Quisque molestie nec nisl ac maximus. Donec dapibus tempus molestie. Aliquam at dolor eu odio tempus tincidunt. Nullam elit nunc, venenatis porttitor aliquam quis, pulvinar ut massa. Sed ac laoreet odio. Sed eu urna vel purus fermentum pellentesque ac sit amet justo. Quisque in massa massa. Suspendisse at dignissim enim. Cras <span className="text-primary-default">www.coolclosths.com</span> sed augue hendrerit, vel rhoncus risus fringilla. In hac habitasse platea dictumst. Integer non massa nec lectus lobortis malesuada. Aenean a egestas tortor.</p>
            <p className="text-[26px] font-Outfit font-normal leading-[140%] py-10"><span className="text-primary-default">“</span>Sed vehicula tortor mauris, eget finibus ipsum convallis non. Quisque molestie nec nisl ac maximus. Donec dapibu<span className="text-primary-default">”</span></p>

            <img src="/assets/blog/resource.png" className="w-[800px]" alt="" />

            <p className="py-10 font-Outfit text-[27px] font-semibold leading-[28px]">Lore ipsum dolor</p>

            <p className="mt-10 text-xl font-normal font-Outfit leading-[160%] mb-10">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus metus et tortor feugiat, quis pretium nulla lobortis. Duis feugiat nibh magna, lobortis congue lectus sodales vel. Etiam aliquet nisl quis risus laoreet iaculis. In hac habitasse platea dictumst. Aliquam erat volutpat. Sed auctor aliquet pretium. Vestibulum ut lectus vel nibh fringilla dapibus. Donec mollis nibh at lorem volutpat pulvinar. Quisque pellentesque diam eu neque volutpat, vitae pharetra dui viverra.</p>

            <p className="mt-10 text-xl font-normal font-Outfit leading-[160%] mb-10">Aliquam quis massa nisi. Aliquam convallis, purus et varius tristique, tortor magna efficitur neque, non dictum diam nunc sed dolor. Vivamus lobortis id neque at iaculis. Aenean tempor, quam ac dignissim blandit, quam lacus facilisis erat, sit amet facilisis purus orci eu erat. Maecenas ullamcorper leo eu massa sodales, at commodo metus bibendum. Fusce imperdiet nibh vitae ullamcorper convallis. Etiam finibus eu justo eget ultrices.</p>

            <p className="mt-10 text-xl font-normal font-Outfit leading-[160%] mb-20">Sed vehicula tortor mauris, eget finibus ipsum convallis non. Quisque molestie nec nisl ac maximus. Donec dapibus tempus molestie. Aliquam at dolor eu odio tempus tincidunt. Nullam elit nunc, venenatis porttitor aliquam quis, pulvinar ut massa. Sed ac laoreet odio. Sed eu urna vel purus fermentum pellentesque ac sit amet justo. Quisque in massa massa. Suspendisse at dignissim enim. Cras <span className="text-primary-default">www.coolclosths.com</span> sed augue hendrerit, vel rhoncus risus fringilla. In hac habitasse platea dictumst. Integer non massa nec lectus lobortis malesuada. Aenean a egestas tortor.</p>
          </div>
          <div className="flex-col hidden md:flex">
            <p className="text-[22px] font-medium leading-[28px] mb-8">You might also be interested in</p>
            <div className="flex-col hidden grid-cols-3 mb-20 md:grid">
              {CardLists.map((card, index) => (
                <Card data={card} key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:hidden">
            <p className="text-[22px] font-medium text-center leading-[28px] mb-8">You might also be interested in</p>
            <div className="grid w-full grid-cols-3 mb-20 md:hidden blog-details">
              <Slider {...settings}>
                {CardLists.map((card, index) => (
                  <Card data={card} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CardLists: CardType[] = [
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

export default Detail;