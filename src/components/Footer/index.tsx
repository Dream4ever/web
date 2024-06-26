import { Link } from "react-router-dom";

const Footer = (props: any) => {
  return (
    <footer className="w-full relative z-50 pt-8 md:h-[279px] flex flex-col justify-between pb-4 bg-[#211738]">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="grid grid-cols-6 pb-12 max-md:grid-cols-1 max-md:px-12">
          <div></div>
          <div>
            <div className="pb-2 text-lg font-semibold text-white font-Outfit">
              Follow us
            </div>
            <div className="flex">
              <a
                className="items-center justify-center pr-3 mt-1 mr-3"
                href="https://twitter.com/TowneSquarexyz"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/twitter.svg" alt="twitter_image" />
              </a>
              <a
                className="items-center justify-center pr-3 mt-1 mr-3"
                href="https://discord.gg/yMRmqFzrDW"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/discord.svg" alt=""/>
              </a>
              <a
                className="items-center justify-center pr-3 mt-1 mr-3"
                href="https://github.com/TowneSquare"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:px-12 ">
          <div className="block max-md:hidden"></div>
          <div className="flex flex-col space-y-3">
            <div className="text-lg font-bold text-white font-Outfit">Docs</div>
            <div className="text-[#CCCCCC] text-lg font-Outfit flex flex-col space-y-2">
              <a
                href="https://github.com/TowneSquare"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://docs.townesquare.xyz/townesquare-whitepaper/"
                target="_blank"
                rel="noreferrer"
              >
                Gitbook
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-lg font-bold text-white font-Outfit">
              Legal
            </div>
            <div className="text-[#CCCCCC] text-lg font-Outfit flex flex-col space-y-2">
              <Link to="/TermsOfService">Terms of Service</Link>
              <Link to="/">Legal</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-lg font-bold text-white font-Outfit">
              Community
            </div>
            <div className="text-[#CCCCCC] text-lg font-Outfit flex flex-col space-y-2">
              <a
                href="https://twitter.com/TowneSquarexyz"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/yMRmqFzrDW"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
              <a href="https://medium.com/" target="_blank" rel="noreferrer">
                Medium
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 max-md:grid-cols-1 max-md:px-12 max-md:py-12">
        <div></div>
        <div className="text-[#CCCCCC] text-lg font-Outfit col-span-11">
          Copyright © {new Date().getFullYear()} TowneSquare. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
