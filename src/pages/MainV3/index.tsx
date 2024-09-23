import { useState, useEffect } from "react"
import { throttle } from 'lodash'

const features = [
  {
    title: 'Modular on-chain actions',
    description: 'Use features from any DApp to power your onboarding experience',
    w: 436,
  },
  {
    title: 'Customizable onboarding flow creation',
    description: 'Embed multiple actions from DEX, bridge, etc. in your onboarding channel',
    w: 599,
  },
  {
    title: 'Sharable anytime anywhere',
    description: 'Generate an onboarding action link for your onboarding app for anyone, anywhere',
    w: 523,
  },
  {
    title: 'Support multiple wallet onboard options',
    description: 'Meet your users with both Web3 & Web2 signing options',
    w: 678,
  },
]

const links = [
  {
    title: 'Legal',
    links: [
      {
        text: 'Terms of Service',
      },
      {
        text: 'Legal',
      },
      {
        text: 'Privacy Policy',
      },
    ]
  },
  {
    title: 'Community',
    links: [
      {
        text: 'Twitter',
        link: 'https://x.com/TowneSquarexyz',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/yMRmqFzrDW',
      },
    ]
  },
]

function SectionHeader({ sectionName, title, subTitle }: { sectionName: string, title: string, subTitle?: string }) {
  return (
    <div className="flex flex-col w-full md:items-center gap-y-3 font-Outfit md:px-14 xl:px-0 xl:w-section-header">
      <span className="text-xl font-bold leading-tight text-primary-light">
        {sectionName}
      </span>
      <span className="font-medium text-2.5xl md:text-4.5xl leading-tight md:text-center">
        {title}
      </span>
      {subTitle && (
        <span className="text-2xl leading-tight text-center text-gray-light">
          {subTitle}
        </span>
      )}
    </div>
  )
}

function Para({ title, content, width }: { title: string, content: string, width: number }) {
  return (
    <div
      className="flex flex-col gap-y-2 font-Outfit"
      style={{ width: `${width}px` }}
    >
      <span className="text-2.5xl font-semibold leading-tight">
        {title}
      </span>
      <span className="text-xl leading-tight text-gray-light">
        {content}
      </span>
    </div>
  )
}

function FlatButton({ text, imgSrc, url }: { text: string, imgSrc: string, url: string }) {
  return (
    <div className="flex items-center justify-center h-16 border cursor-pointer w-60 rounded-xl bg-primary-dark2 border-gray-light3">
      <a className="flex items-center justify-center gap-x-2" href={url} target="_blank">
        <img className="w-auto h-[29px]" src={imgSrc} alt="icon" />
        <span className="text-xl font-medium text-white font-Outfit">
          {text}
        </span>
      </a>
    </div>
  )
}

type LINK = {
  text: string;
  link?: string;
}
function Links({ title, links }: { title: string, links: LINK[] }) {
  return (
    <div className="flex flex-col text-sm font-Outfit gap-y-2">
      {/* title */}
      <span className="font-semibold text-white">{title}</span>
      {links.map((item, i) => (
        <a
          className="text-gray-light2"
          key={i}
          href={item.link || ''}
          target="_blank"
        >{item.text}</a>
      ))}
    </div>
  )
}

function XIcon() {
  return (
    <a href="https://x.com/TowneSquarexyz" target="_blank">
      <img src="/assets/main_v3/x.png" className="w-5 h-auto md:w-6" alt="logo" />
    </a>
  )
}

function DiscordIcon() {
  return (
    <a href="https://discord.gg/yMRmqFzrDW" target="_blank">
      <img src="/assets/main_v3/discord.png" className="w-6 h-auto md:w-[30px]" alt="logo" />
    </a>
  )
}

function MainV3() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'onboarding-links', 'dapp-bastraction']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    const throttledHandleScroll = throttle(handleScroll, 200)
    window.addEventListener('scroll', throttledHandleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // page wrapper
    <div className="relative flex flex-col items-center overflow-hidden bg-dark-lg">
      <div className="fixed z-0 pointer-events-none">
        <img className="h-auto w-bg-lines" src="/assets/main_v3/bg-lines.png" alt="bg-line" />
      </div>
      {/* header */}
      <div className="fixed flex justify-center w-full px-3 mt-6 md:px-4 xl:px-0 md:mt-header z-max">
        <div className="flex items-center justify-between w-full px-4 md:px-8 xl:px-16 xl:w-header_xl h-header md:h-header_md rounded-header bg-header-bg">
          <img src="/assets/main_v3/ts-logo.png" className="w-[169px] md:w-[154px] xl:w-[220px] h-auto" alt="logo" />
          {/* hide on mobile */}
          <div className="items-center hidden text-center md:flex md:gap-x-6 xl:gap-x-14 font-Outfit">
            <a
              href="#features"
              className={activeSection === 'features' ? 'text-primary-light font-semibold' : 'text-gray-light2'}
            >Features</a>
            <a
              href="#onboarding-links"
              className={activeSection === 'onboarding-links' ? 'text-primary-light font-semibold' : 'text-gray-light2'}
            >Onboarding Links</a>
            <a
              href="#dapp-bastraction"
              className={activeSection === 'dapp-bastraction' ? 'text-primary-light font-semibold' : 'text-gray-light2'}
            >Dapp Abstraction</a>
          </div>
          <div className="flex items-center gap-x-6">
            <XIcon />
            <DiscordIcon />
          </div>
        </div>
      </div>
      {/* section banner */}
      <div className="flex flex-col items-center w-full pb-8 bg-cover md:pb-20 xl:pb-40 pt-36 md:pt-50 bg-index-s1-bg">
        {/* content on the left and right */}
        <div className="flex flex-col items-center xl:flex-row gap-y-12 md:gap-y-24 xl:gap-x-20">
          {/* slogon */}
          <div className="flex flex-col px-5 gap-y-4 md:gap-y-8 md:px-14 xl:px-0">
            <span className="xl:w-[720px] text-[28px] md:text-[43px] font-semibold leading-tight font-Outfit">
              <span className="text-primary-light">Onboard anyone</span> to your Web3 app, anywhere anytime
            </span>
            <span className="text-lg leading-normal tracking-wide md:text-2xl text-gray-light font-Outfit">
              Creating distribution channels for Web3 applications<br />with customizable onboarding links.
            </span>
          </div>
          <div className="flex flex-col -space-y-20 xl:-space-y-28">
            <img className="z-50 h-auto w-grad-card xl:w-grad-card_xl" src="/assets/main_v3/hero-1.png" alt="hero" />
            <img className="z-40 h-auto w-grad-card xl:w-grad-card_xl" src="/assets/main_v3/hero-2.png" alt="hero" />
            <img className="z-30 h-auto w-grad-card xl:w-grad-card_xl" src="/assets/main_v3/hero-3.png" alt="hero" />
            <img className="z-20 h-auto w-grad-card xl:w-grad-card_xl" src="/assets/main_v3/hero-4.png" alt="hero" />
          </div>
        </div>
      </div>
      {/* section features */}
      <div
        className="z-10 flex flex-col items-center w-full px-5 pt-16 pb-12 xl:pt-44 bg-dark-base/30 md:pb-40 xl:pb-50 rounded-t-section md:rounded-t-section_md"
        id="features"
      >
        <SectionHeader
          sectionName="FEATURES"
          title="Embed however many onboarding actions in one singular onboarding flow"
        />
        <div className="flex flex-col items-center mt-16 md:mt-32 md:flex-row md:px-16 xl:px-0 md:justify-between xl:justify-normal gap-x-20">
          {/* feature list on the left */}
          <div className="flex flex-col gap-y-16 md:gap-y-0 md:border-l xl:w-feature-list_xl md:w-feature-list_md md:border-l-gray-base">
            {features.map((feature, i) => (
              // feature item
              <div className="flex flex-col gap-y-8" key={i}>
                <div className={`flex flex-col gap-y-1.5 pl-4 md:pl-8 md:-ml-px cursor-pointer border-l-4 border-primary-light
                  ${i === activeFeature ? 'md:py-7 md:border-l-4 md:border-primary-light' : 'md:py-11 md:border-none'}
                `} onClick={() => setActiveFeature(i)}>
                  <span className={`text-xl xl:text-2xl text-primary-light font-semibold
                    ${i === activeFeature ? 'md:text-primary-light md:font-semibold' : 'md:text-gray-light'}
                  `}>
                    {feature.title}
                  </span>
                  <span className={`text-base md:text-lg xl:text-xl ${i !== activeFeature && 'md:hidden'}`}>
                    {feature.description}
                  </span>
                </div>
                <img
                  className="w-full h-auto md:hidden"
                  src={`/assets/main_v3/feature-${i + 1}.png`}
                  alt="feature-img"
                />
              </div>
            ))}
          </div>
          {/* feature img shown on tablet and desktop */}
          <div className="hidden md:block md:w-80 d:h-auto xl:w-fit xl:h-[614px]">
            <img
              src={`/assets/main_v3/feature-${activeFeature + 1}.png`}
              alt="feature-img"
              style={{
                width: `${features[activeFeature].w}px`,
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      {/* section links */}
      <div
        className="z-10 flex flex-col items-center w-full pt-44"
        id="onboarding-links"
      >
        <SectionHeader
          sectionName="ONBOARDING LINKS"
          title="Onboarding Links to bring users from anywhere to your DApp"
          subTitle="Generate your onboarding links that contain onboarding actions for your app"
        />
        <div className="flex flex-col items-center mt-16 font-Outfit">
          <div className="flex items-center gap-x-14">
            <img className="w-[550px] h-auto" src="/assets/main_v3/link-1.png" alt="link" />
            <Para
              title="Customizable actions"
              content="Each link contains customizable modular features to onboard users from any setting with a series of actions, all in one flow."
              width={343}
            />
          </div>
          <div className="flex items-center gap-x-14">
            <Para
              title="Sharable anywhere"
              content="Share them easily on social media and other platforms, both Web2 and Web3"
              width={343}
            />
            <img className="w-[406px] h-auto" src="/assets/main_v3/link-2.png" alt="link" />
          </div>
        </div>
      </div>
      {/* section dapp */}
      <div
        className="z-10 flex flex-col items-center w-full pb-20 bg-dark-base/30 pt-44 rounded-b-section"
        id="dapp-bastraction"
      >
        <SectionHeader
          sectionName="DAPP ABSTRACTION"
          title="Pioneering Dapp Abstraction"
          subTitle="TownSquare is using Dapp abstraction to power onboarding experiences"
        />
        <div className="flex mt-20 gap-x-24">
          <div className="flex flex-col items-center gap-y-8">
            <img className="w-auto h-[210px]" src="/assets/main_v3/dapp-1.png" alt="dapp" />
            <Para
              title="Highly customizable with minimum coding"
              content="Each onboarding link is an app that contains customizable features abstracted from other applications, allowing an onboarding app to be created with minimum development."
              width={436}
            />
          </div>
          <div className="flex flex-col items-center gap-y-8">
            <img className="w-auto h-[210px]" src="/assets/main_v3/dapp-2.png" alt="dapp" />
            <Para
              title="Feature modularity"
              content="Each feature is a primitive abstracted from a Dapp into a library, which can be leveraged by any developer to build new applications"
              width={484}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 text-white gap-y-3 font-Outfit">
          <button className="flex items-center justify-center h-12 text-sm font-medium w-button rounded-4xl bg-primary-dark">
            Check out DApp Abstraction Library
          </button>
          <span className="font-medium">COMING SOON</span>
        </div>
      </div>
      {/* section social */}
      <div className="relative z-10 flex flex-col items-center w-full py-20">
        <img className="absolute w-full h-auto -top-48" src="/assets/main_v3/bg-curve-bottom.png" alt="bg" />
        <div className="z-20 flex flex-col items-center gap-y-2 font-Outfit">
          <span className="text-4.5xl font-medium leading-tight">Find us on socials</span>
          <span className="text-2xl leading-tight">
            TownSquare is using Dapp abstraction to power onboarding experiences
          </span>
        </div>
        <div className="z-20 flex items-center mt-20 gap-x-9">
          <FlatButton
            text="@TowneSquarexyz"
            imgSrc="/assets/main_v3/x.png"
            url="https://x.com/TowneSquarexyz"
          />
          <FlatButton
            text="TownSquare"
            imgSrc="/assets/main_v3/discord.png"
            url="https://discord.gg/yMRmqFzrDW"
          />
        </div>
      </div>
      {/* footer */}
      <div className="z-20 flex justify-between w-full px-40 py-8 bg-primary-dark3">
        {/* content */}
        <div className="flex justify-between w-full">
          {/* content on the left */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-semibold">Follow us</span>
              <div className="flex items-center gap-x-4">
                <XIcon />
                <DiscordIcon />
              </div>
            </div>
            <a href="https://househaeds.com/" target="_blank" rel="noreferrer">
              Copyright © 2024 TowneSquare. All rights reserved.
            </a>
          </div>
          {/* content on the right */}
          <div className="flex gap-x-24">
            {links.map((item, i) => (
              <Links
                key={i}
                title={item.title}
                links={item.links}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainV3
