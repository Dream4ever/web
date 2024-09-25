import { useState, useEffect, useMemo, useRef } from "react"
import { throttle } from 'lodash'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

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
      <span className="text-ssm md:text-xl font-bold leading-tight tracking-[.2em] text-primary-light">
        {sectionName}
      </span>
      <span className="font-medium text-2.5xl md:text-4.5xl leading-tight md:text-center">
        {title}
      </span>
      {subTitle && (
        <span className="text-lg md:text-2xl leading-tight md:text-center md:w-[600px] xl:w-auto text-gray-light">
          {subTitle}
        </span>
      )}
    </div>
  )
}

function Para({ title, content, classes, titleClasses }
  : { title: string, content: string, classes?: string, titleClasses?: string }) {
  return (
    <div className={`flex flex-col gap-y-2 px-4 md:px-0 font-Outfit ${classes || ''}`}>
      <span className={`text-xl md:text-2.5xl font-semibold leading-tight ${titleClasses || ''}`}>
        {title}
      </span>
      <span className="leading-tight md:text-xl md:text-gray-light">
        {content}
      </span>
    </div>
  )
}

function FlatButton({ text, imgSrc, url }: { text: string, imgSrc: string, url: string }) {
  return (
    <div className="flex items-center justify-center w-full h-16 border cursor-pointer md:w-60 rounded-xl bg-primary-dark2 border-gray-light3">
      <a className="flex items-center justify-center gap-x-2" href={url} target="_blank">
        <img className="w-6 h-auto md:w-auto md:h-7" src={imgSrc} alt="icon" />
        <span className="text-base font-medium text-white md:text-xl font-Outfit">
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

function FooterFollow() {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-sm font-semibold">Follow us</span>
      <div className="flex items-center gap-x-4">
        <XIcon />
        <DiscordIcon />
      </div>
    </div>
  )
}

function FooterLinks() {
  return (
    <>
      {links.map((item, i) => (
        <Links
          key={i}
          title={item.title}
          links={item.links}
        />
      ))}
    </>
  )
}

function FooterCopyright() {
  return (
    <a className="text-sm md:text-base" href="https://househaeds.com/" target="_blank" rel="noreferrer">
      Copyright © 2024 TowneSquare. All rights reserved.
    </a>
  )
}

function MainV3() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  const main = useRef(null)
  const cardsRef = useRef(null)

  const isTabletOrAbove = useMediaQuery({ query: '(min-width: 768px)' })
  const cardHeight = isTabletOrAbove ? 112 : 80

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

  useMemo(() => {
    ScrollTrigger.create({
      trigger: '#cards',
      start: 0,
      end: 200,
      onUpdate: (self) => {
        if (cardsRef.current) {
          const cards = gsap.utils.toArray('.card')
          cards.forEach((card, i) => {
            // only change marginTop of 2nd to 4th elements
            if (i === 0) {
              return
            }
            // change style works, change className not
            (card as HTMLElement).style.marginTop = `-${Math.floor(cardHeight + self.progress * cardHeight)}px`
          })
        }
      },
    })
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
      <div ref={main} className="flex flex-col items-center w-full pb-8 bg-cover md:pb-20 xl:pb-40 pt-36 md:pt-50 bg-index-s1-bg">
        {/* content on the left and right */}
        <div className="flex flex-col items-center xl:flex-row gap-y-12 md:gap-y-24 xl:gap-x-20">
          {/* slogon */}
          <div className="flex flex-col px-5 xl:w-180 gap-y-4 md:gap-y-8 md:px-15 xl:px-0">
            <span className="text-2.5xl md:text-[43px] font-semibold leading-tight font-Outfit">
              <span className="text-primary-light">Onboard anyone</span> to your Web3 app, anywhere anytime
            </span>
            <span className="text-lg leading-normal tracking-wide md:text-2xl text-gray-light font-Outfit">
              Creating distribution channels for Web3 applications with customizable onboarding links.
            </span>
            <span className="flex items-center text-base font-semibold leading-normal gap-x-1 text-gray-light">
              POWERED BY
              <img className="w-auto h-4" src="/assets/main_v3/monad.png" alt="mona" />
            </span>
          </div>
          <div id="cards" ref={cardsRef} className={`flex flex-col`}>
            <img
              className="z-50 h-auto w-grad-card md:w-grad-card_xl card"
              src="/assets/main_v3/hero-1.png"
              alt="hero"
            />
            <img
              className="z-40 h-auto w-grad-card md:w-grad-card_xl card"
              style={{ marginTop: `-${cardHeight}px` }}
              src="/assets/main_v3/hero-2.png"
              alt="hero"
            />
            <img
              className="z-30 h-auto w-grad-card md:w-grad-card_xl card"
              style={{ marginTop: `-${cardHeight}px` }}
              src="/assets/main_v3/hero-3.png"
              alt="hero"
            />
            <img
              className="z-20 h-auto w-grad-card md:w-grad-card_xl card"
              style={{ marginTop: `-${cardHeight}px` }}
              src="/assets/main_v3/hero-4.png"
              alt="hero"
            />
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
                  <span className={`text-base md:text-lg xl:text-xl md:leading-tight ${i !== activeFeature && 'md:hidden'}`}>
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
          <div className="hidden md:block md:w-80 md:h-80 xl:w-120 xl:h-120">
            <img
              src={`/assets/main_v3/feature-${activeFeature + 1}.png`}
              alt="feature-img"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      {/* section links */}
      <div
        className="z-10 flex flex-col items-center w-full px-5 pt-16 pb-8 md:pb-36 md:pt-44 md:px-7 xl:px-0"
        id="onboarding-links"
      >
        <SectionHeader
          sectionName="ONBOARDING LINKS"
          title="Onboarding Links to bring users from anywhere to your DApp"
          subTitle="Generate your onboarding links that contain onboarding actions for your app"
        />
        <div className="flex flex-col items-center mt-16 gap-y-18 font-Outfit">
          <div className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-8 xl:gap-x-14">
            <img className="w-full md:w-[306px] xl:w-[470px] h-auto" src="/assets/main_v3/link-1.png" alt="link" />
            <Para
              title="Customizable actions"
              content="Each link contains customizable modular features to onboard users from any setting with a series of actions, all in one flow."
              classes="md:w-[343px]"
            />
          </div>
          <div className="flex flex-col-reverse items-center gap-y-6 md:flex-row md:gap-x-8 xl:gap-x-14">
            <Para
              title="Sharable anywhere"
              content="Share them easily on social media and other platforms, both Web2 and Web3"
              classes="md:w-[314px] xl:w-[343px]"
            />
            <img className="w-full px-4 md:w-[310px] xl:w-[406px] h-auto" src="/assets/main_v3/link-2.png" alt="link" />
          </div>
        </div>
      </div>
      {/* section dapp */}
      <div
        className="z-20 flex flex-col items-center w-full px-5 pt-16 pb-20 md:px-0 bg-dark-md md:bg-dark-base/30 md:pt-44 rounded-b-section"
        id="dapp-bastraction"
      >
        <SectionHeader
          sectionName="DAPP ABSTRACTION"
          title="Pioneering Dapp Abstraction"
          subTitle="TownSquare is using Dapp abstraction to power onboarding experiences"
        />
        <div className="flex flex-col w-full mt-14 md:mt-20 xl:flex-row md:w-120 xl:w-auto gap-x-24 gap-y-18 md:gap-y-25 xl:gap-y-0">
          <div className="flex flex-col-reverse items-center md:flex-col gap-y-8">
            <img className="w-auto h-[210px]" src="/assets/main_v3/dapp-1.png" alt="dapp" />
            <Para
              title="Highly customizable with minimum coding"
              content="Each onboarding link is an app that contains customizable features abstracted from other applications, allowing an onboarding app to be created with minimum development."
              classes="px-0 pl-4 flex gap-x-4 border-l-4 border-primary-light md:border-none xl:w-120"
              titleClasses="text-primary-light md:text-white"
            />
          </div>
          <div className="flex flex-col-reverse items-center md:flex-col gap-y-8">
            <img className="w-auto h-[210px]" src="/assets/main_v3/dapp-2.png" alt="dapp" />
            <Para
              title="Feature modularity"
              content="Each feature is a primitive abstracted from a Dapp into a library, which can be leveraged by any developer to build new applications"
              classes="px-0 pl-4 flex gap-x-4 border-l-4 border-primary-light md:border-none xl:w-120"
              titleClasses="text-primary-light md:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-white mt-18 md:mt-25 xl:mt-10 gap-y-3 font-Outfit">
          <button className="flex items-center justify-center h-12 text-sm font-medium w-button rounded-4xl bg-primary-dark">
            Check out DApp Abstraction Library
          </button>
          <span className="font-medium">COMING SOON</span>
        </div>
      </div>
      {/* section social */}
      <div className="relative z-10 flex flex-col items-center w-full px-5 py-20 pt-20 md:px-0 md:pt-44 md:pb-40">
        <img className="absolute w-full md:w-[240%] md:max-w-none xl:w-full h-auto left-0 bottom-0" src="/assets/main_v3/bg-curve-bottom.png" alt="bg" />
        <div className="z-20 flex flex-col justify-start px-5 md:items-center md:px-0 gap-y-4 md:gap-y-2 font-Outfit">
          <span className="text-2.5xl md:text-4.5xl font-medium leading-tight">
            Find us on socials
          </span>
          <span className="text-lg leading-tight md:text-2xl md:w-150 text-gray-light md:text-white md:text-center xl:w-auto">
            TownSquare is using Dapp abstraction to power onboarding experiences
          </span>
        </div>
        <div className="z-20 flex flex-col items-center w-full mt-8 md:mt-20 md:flex-row gap-y-4 md:gap-x-9 md:w-auto">
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
      {/* footer above mobile */}
      <div className="z-20 justify-between hidden w-full px-8 py-8 md:flex xl:px-40 bg-primary-dark3">
        {/* content */}
        <div className="flex justify-between w-full">
          {/* content on the left */}
          <div className="flex flex-col justify-between">
            <FooterFollow />
            <FooterCopyright />
          </div>
          {/* content on the right */}
          <div className="flex gap-x-24">
            <FooterLinks />
          </div>
        </div>
      </div>
      {/* footer on mobile */}
      <div className="z-20 flex flex-col w-full px-5 py-8 md:hidden gap-y-12 bg-primary-dark3">
        <img src="/assets/main_v3/ts-logo.png" className="w-40 h-auto" alt="logo" />
        <div className="flex justify-between">
          <FooterLinks />
          <FooterFollow />
        </div>
        <FooterCopyright />
      </div>
    </div>
  )
}

export default MainV3
