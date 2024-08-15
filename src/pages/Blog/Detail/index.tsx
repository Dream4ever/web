import { Link } from "react-router-dom";
import { CardType } from "..";
import Header from "../../../components/Header";
import Card from "../Card";
import Footer from "../../../components/Footer";
import "./index.css";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';


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
    <div className="bg-[#111111]">
      <Helmet>
        <meta name="og:title" content="Wtf is a consumer-facing layer? | Notion" data-react-helmet="true" />
        <meta name="description" content="Wtf is a consumer-facing layer? | Notion" data-react-helmet="true" />
        <meta name="og:image" content="https://www.townesquare.xyz/blog_preview.png" data-react-helmet="true" />
      </Helmet>
      <Header />
      <div id="join" className="z-20 flex justify-center w-full ">
        <div className=" mt-[70px] flex flex-col gap-12 px-4 md:px-[60px] py-8 z-50">
          <div className="mx-4 md:mx-32">
            <div className="hidden gap-3 mb-12 md:flex">
              <Link to="/blog" className="text-base font-medium leading-[150%] font-Outfit text-primary-default hover:text-primary-default/30">
                Town Blog
              </Link>
              <div className="border-x"></div>
              <p className="text-base font-normal leading-[150%] font-Outfit text-[#999]">Wtf is a consumer layer?</p>
            </div>
            <div className="">
              <button className=" h-8 px-[12px] py-[6px] bg-primary-default text-sm font-Outfit font-medium leading-[20px] rounded-md mb-2 md:mb-5 mr-4">Consumer</button>
              <button className=" h-8 px-[12px] py-[6px] bg-primary-default text-sm font-Outfit font-medium leading-[20px] rounded-md mb-2 md:mb-5">Social</button>
              <p className="text-4xl font-semibold leading-[40px] font-Georgian py-4">Wtf is a consumer-facing layer?</p>
              <p className="text-base font-normal font-Outfit leading-[24px] text-[#999] -mb-4 md:mb-0">Aug 15th, 2024</p>
            </div>
          </div>
          <div className="flex w-screen md:w-full">
            <img src="/assets/blog/blog_back.svg" className="md:w-[1058px] -mb-4 md:mb-0" alt="" />
          </div>
          <div className="mx-6 md:mx-32 w-[screen] md:w-[800px]">
            <p className="text-4xl font-semibold leading-[40px] font-Georgian mb-4" id="main">Wtf is a consumer-facing layer?</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6"><i>by TowneSquare</i></p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">So the story goes:</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">In Web 3,</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">if you say you are a social app, people can pretty much understand what you are doing.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">If you say you are a consumer app, people also have a rough idea.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">But if you say you are a consumer layer, that confuses the hell out of people.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">But in Web 3, people never get tired of all the different layers - L1, L2, rollups, settlement layer, DA layer…</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">So what is a consumer(-facing) layer?</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-6">By the name, it would be actually quite easy to understand - the layer where consumers actually use. But why is the term such a stranger to us in Web 3?</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mt-6 mb-6">If you think about the overall tech stack in Web 3 in terms of Layers of the Ocean & their levels of accessibility, you have something like:</p>
            <ul className="list-disc pl-9">
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">The Abyss Zone is the Blockchain itself - the hardest for regular consumers to access</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">The Midnight Zone is the various DApps - accessible only for experienced developers</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">The Twilight Zone is the various wallets - accessible to existingWeb 3 users</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-14">For the Sunlight Zone (also called the Epipelagic Zone) is the level where most human activities take place.</p>
              </li>
            </ul>
            <img src="/assets/blog/test_blog_image.png" className="mb-14" alt="" />
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">The issue is, while we have many blockchains, many protocols, many DApps, we don’t really have many tools in the consumer layer.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6">This is fine if you don’t want to scale your products in Web 3 to regular consumers, but obviously most of us do and that’s why we are writing about this.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] my-6 mb-8">Of course in crypto you also get sarcastic memes like this. And clear many people resonate with this message - crypto has generally been failing at attracting non-Web3 consumers.</p>

            <div className="flex items-center justify-center w-full mt-4">
              <article className="flex w-[50%]">
                <blockquote className="twitter-tweet">
                  <a href="https://twitter.com/0xDesigner/status/1750580497745391952?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1750580497745391952%7Ctwgr%5E4ca2073971699a0e12bbac1b00a1576877ba8a2a%7Ctwcon%5Es1_&amp;ref_url=https%3A%2F%2Ftownesquare.notion.site%2FWtf-is-a-consumer-facing-layer-ff922d76ffa443ec87acdeb365cad11d" rel="noopener noreferrer nofollow" target="_blank" aria-label="Visit this post on X" role="link" className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21"></a>
                </blockquote>
              </article>
            </div>

            <p className="text-xl font-normal font-Georgian leading-[160%] my-14">So how do we fix this?</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">Well first, not all consumer-facing attempts have been all failures. Many do have merits to them despite having shortcomings.</p>
            <ul className="list-disc pl-9">
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] my-2">Solana Blinks, for example, enables Web 3 users to transact in crypto directly on Web 2 interfaces with their wallet extensions.</p>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-2">This abstracts the DApp experience from complicated Web 3 interfaces to a few buttons on a simple-to-use Web 2 interface. However, the shortcoming is that only the user has to have the wallet extension to enable the experience.</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] my-2">Tiplink and Aptos Connect for example obviates the need for users to have wallet extensions to interact with DApps with GMail-generated wallet, etc.</p>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-2">This abstracts the Web 3 account experience from a wallet to a keyless Web 2 login experience for users. However, Tiplink and Aptos Connect still require the users to navigate Web 3 experiences across multiple DApp interfaces and in quite technical Web 3 language.</p>
              </li>
            </ul>
            <p className="text-4xl font-semibold leading-[40px] font-Georgian mt-14 mb-2" id="consumer">The Consumer Layer Stack</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-6">To satisfy consumer needs, the consumer layer should have one primary focus: to abstract the complex logic of blockchain, DApps, and wallets to consumer-grade experiences.</p>
            <p className="text-3xl font-semibold leading-[40px] font-Georgian mt-8 mb-0" id="AA">Account abstraction (AA)</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">ERC-4337 has popularized the concept of account abstraction with abstraction wallet. An abstraction wallet is a smart contract wallet that obviates the need for a user to handle the private key to control the assets in the account. Users that use an abstraction wallet has a much higher degree of flexibility in terms of authentication methods, gas fee payment settings, and login options.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">For instance, a Web 2 user can choose to create an abstraction wallet via their Gmail, authenticates Gmail account to sign transactions, and depending on the wallet service provider pay for gas fee in ETH while being on Polygon.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">So you can see that not only is the user experience abstracted from the seed phrase & private key of an externally owned wallet like MetaMask, but each step of using the wallet is abstracted to allow for a more Web2-like user experience.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">AA has been recognized as a more user-friendly wallet login method with native solutions built on many ecosystems.</p>
            <ul className="list-disc pl-9">
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">Aptos has built Aptos Connect, leveraging OpenID Connect;</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">StarkNet has Braavos using Starknet native smart account;</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-4">Particle has built a universal AA for their L1;</p>
              </li>
              <li>
                <p className="text-xl font-normal font-Georgian leading-[160%] mb-12">For many ecosystems without native solutions, some have chosen WaaS providers like WalletConnect.</p>
              </li>
            </ul>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">It’s interesting to note that the route of choosing a native solution vs using a third-party solution like WalletConnect can depend on the goal of an ecosystem. If the goal is simply offering easy to use wallet connection experience, then third-party services can serve well enough. But if the goal is more strategic in the crypto onboarding game, then a native solution can be a more attractive path.</p>
            <p className="text-3xl font-semibold leading-[40px] font-Georgian mt-8 mb-0" id="dapp">DApp abstraction</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">Once a user onboards to crypto, abstracting the user flows from all the various DApps in the ecosystem into simple-to-use interfaces can help users explore the ecosystem deeper.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">In a way, Web 3 already has abstraction tools with the many DeFi DEX, yield, and NFT aggregators. They all simplify user DApp entry points into one</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">The latest example of DApp abstraction is Solana Blinks, which abstracts user experiences from the DApp webapp to action buttons on third-party platforms like X & Discord. Blinks does it so each DApp can embed one feature - Swap of a trading pair, an NFT offering, one payment transaction etc, - in one post. This massively abstracts away the need for user to navigate a webapp to complete the end action.</p>

            <div className="flex items-center justify-center w-full">
              <article className="flex w-[50%]">
                <blockquote className="twitter-tweet">
                  <a href="https://twitter.com/audius/status/1823430894150898090?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1823430894150898090%7Ctwgr%5E4ca2073971699a0e12bbac1b00a1576877ba8a2a%7Ctwcon%5Es1_&amp;ref_url=https%3A%2F%2Ftownesquare.notion.site%2FWtf-is-a-consumer-facing-layer-ff922d76ffa443ec87acdeb365cad11d" rel="noopener noreferrer nofollow" target="_blank" aria-label="Visit this post on X" role="link" className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21"></a>
                </blockquote>
              </article>
            </div>

            <p className="text-xl font-normal font-Georgian leading-[160%] mt-8 mb-8">The downside of Blinks is that it requires a Web 3 wallet extension to operate, which is an entry barrier compared to an abstraction wallet.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">Tiplink offers another example of what an abstracted DApp flow looks like.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-8">On Tiplink, an array of supported DApps is laid out on the Tiplink frontend for users to access. Users access the DApps, however, not via a simplified interface logic like with Blinks, but by being directed to the webapp site itself. In this case, Tiplink is more of a portal to DApps rather than acting as as a DApp abstraction tool.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">For reference, how Backpack wallet on Solana acts as a portal is similar to Tiplink’s flow.</p>
            <img src="/assets/blog/test_blog_image_2.png" alt="" className="w-[33%] mb-10" />
            <p className="text-3xl font-semibold leading-[40px] font-Georgian  mb-2 " id="layer">What’s the ideal Consumer Layer?</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">Referring back to the analogy of the 4 Layers of the Ocean mentioned in the beginning, the consumer layer should bring the experiences of the crypto user to as close to the ocean surface as possible.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">Account abstraction and DApp abstraction are great ways to bring the wallet experience and the application experience directly to the consumer without the complicated wallet and DApp UX. They solve a big part of the onboarding issue by having a Web2-level UI that internet users have gotten used to over the internet decades.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">For Web 3 to gain further adoptions, the gaps and shortcomings of the existing solutions mentioned above will be some of the key areas to be addressed in the next couple years.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">At TowneSquare, we are closing the gap between Web 2 non-crypto users and Web 3 wallet & DApp experiences so users would be able to access the opportunities in DeFi, NFT, gaming without having to go through the pain points of private key wallets, the complicated Web 3 DApp language, and the blockchain tech itself. And currently, we are building the native solutions stack on Monad, the super-performant EVM L1.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">We will have more details soon.</p>
            <p className="text-3xl font-semibold leading-[40px] font-Georgian  mb-2" id="chain">One more note on chain abstraction</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">Remember that blockchain layer in the 4 Layers of the Ocean analogy? That’s right. There’s one more abstraction model we can apply on the blockchain itself. We’ve touched on plenty of critical topics with AA and DApp abstraction, but chain abstraction is a highly potential method as well to simplify user onboarding to opportunities across many ecosystems. We will just a brief note here on why it has great potential also.</p>
            <p className="text-xl font-normal font-Georgian leading-[160%] mb-10">Chain abstraction allows a user to access opportunities across multiple chains all from a single chain account. This user would use an abstraction account on the onboarding chain, and this chain would allow cross-chain communications for transactions that take place outside the onboarding chain. This abstracts the user from the need to register different accounts on different chains.</p>

            <div className="border-t-[1px] border-t-[#9ca3af] flex w-full pt-16 gap-14">
              <div className="flex">
                <img src="/assets/img/logo.svg" className="w-[350px]" alt="" />
              </div>
              <div className="flex">
                <p>
                  TowneSquare is addressing Web3's onboarding challenge by creating the consumer-facing layer for Web3 with TowneSquare Connect & DApp abstraction. TowneSquare's account SDKs & DApp SDKs allow developers to seamlessly anboard users from Web2 platform with easy-to-use Web 2 logins, without need to manage seed phrase, gas payment, or DApp fragmentation.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-10">
              <p className="text-[#9ca3af]">Website</p>
              <div className="border h-[15px]"></div>
              <p className="text-[#9ca3af]">X</p>
              <div className="border h-[15px]"></div>
              <p className="text-[#9ca3af]">Discord</p>
            </div>

            {/* <p className="mb-10 text-xl font-normal font-Outfit leading-[160%]">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus metus et tortor feugiat, <span className="text-primary-default">www.coolclosths.com</span> nulla lobortis. Duis feugiat nibh magna, lobortis congue lectus sodales vel. Etiam aliquet nisl quis risus laoreet iaculis. In hac habitasse platea dictumst. Aliquam erat volutpat. Sed auctor aliquet pretium. Vestibulum ut lectus vel nibh fringilla dapibus. Donec mollis nibh at lorem volutpat pulvinar. Quisque pellentesque diam eu neque volutpat, vitae pharetra dui viverra.</p>
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

            <p className="mt-10 text-xl font-normal font-Outfit leading-[160%] mb-20">Sed vehicula tortor mauris, eget finibus ipsum convallis non. Quisque molestie nec nisl ac maximus. Donec dapibus tempus molestie. Aliquam at dolor eu odio tempus tincidunt. Nullam elit nunc, venenatis porttitor aliquam quis, pulvinar ut massa. Sed ac laoreet odio. Sed eu urna vel purus fermentum pellentesque ac sit amet justo. Quisque in massa massa. Suspendisse at dignissim enim. Cras <span className="text-primary-default">www.coolclosths.com</span> sed augue hendrerit, vel rhoncus risus fringilla. In hac habitasse platea dictumst. Integer non massa nec lectus lobortis malesuada. Aenean a egestas tortor.</p> */}
          </div>
          {/* <div className="flex-col hidden md:flex">
            <p className="text-[22px] font-medium leading-[28px] mb-8">You might also be interested in</p>
            <div className="flex-col hidden grid-cols-3 gap-4 mb-20 md:grid">
              {CardLists.map((card, index) => (
                <Card data={card} key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:hidden">
            <p className="text-[22px] font-medium text-center leading-[28px] mb-8">You might also be interested in</p>
            <div className="grid w-full grid-cols-3 gap-4 mb-20 md:hidden blog-details">
              <Slider {...settings}>
                {CardLists.map((card, index) => (
                  <Card data={card} key={index} />
                ))}
              </Slider>
            </div>
          </div> */}
        </div>
      </div>
      <div className="fixed top-60 group">
        <img src="/assets/menu.png" alt="" className="rounded-lg hover:cursor-pointer group-hover:hidden" />
        <div className="absolute top-0 left-0 hidden h-full group-hover:flex ">
          <ul className="w-[260px] bg-[#FFFFFF] py-4 px-6 h-[200px] rounded-lg">
            <li className="text-black hover:bg-[#D3D1CB] rounded-md"><a href="#consumer">The Consumer Layer Stack</a></li>
            <li className="ml-4 text-black hover:bg-[#D3D1CB] hover:px-1 rounded-md"><a href="#AA">Account abstraction(AA)</a></li>
            <li className="ml-4 text-black hover:bg-[#D3D1CB] rounded-md"><a href="#dapp">DApp abstraction</a></li>
            <li className="ml-4 text-black hover:bg-[#D3D1CB] rounded-md"><a href="#layer">What's the ideal Consumer Layer?</a></li>
            <li className="ml-4 text-black hover:bg-[#D3D1CB] rounded-md"><a href="#chain">One more note on chain abstraction</a></li>
          </ul>
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