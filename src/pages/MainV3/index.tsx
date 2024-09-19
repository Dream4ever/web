import { useState } from "react"

import GradientBorderCard from "../../components/GradientBorderCard"

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

function SectionHeader({ sectionName, title, subTitle }: { sectionName: string, title: string, subTitle?: string }) {
  return (
    <div className="flex flex-col items-center gap-y-3 font-Outfit w-section-header">
      <span className="text-xl font-bold leading-tight text-primary-light">
        {sectionName}
      </span>
      <span className="font-medium text-4.5xl leading-tight text-center">
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

function FlatButton({ text, imgSrc }: { text: string, imgSrc: string }) {
  return (
    <div className="flex items-center justify-center h-16 border w-60 gap-x-2 rounded-xl bg-gray-light2 border-gray-light3">
      <img className="w-auto h-[29px]" src={imgSrc} alt="icon" />
      <span className="text-xl font-medium text-white font-Outfit">
        {text}
      </span>
    </div>
  )
}

function MainV3() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    // page wrapper
    <div className="relative flex flex-col items-center bg-dark-lg">
      <div className="fixed pointer-events-none">
        <img className="h-auto w-bg-lines" src="/assets/main_v3/bg-lines.png" alt="bg-line" />
      </div>
      {/* header */}
      <div className="fixed flex items-center justify-between px-16 w-header h-header rounded-header mt-header bg-header-bg z-max">
        <img src="/assets/main_v3/ts-logo.png" className="w-[220px] h-auto" alt="logo" />
        <div className="flex items-center gap-x-14 font-Outfit">
          <a href="#features">Features</a>
          <a href="#onboarding-links">Onboarding Links</a>
          <a href="#dapp-bastraction">Dapp Abstraction</a>
        </div>
        <div className="flex items-center gap-x-6 pl-[52px]">
          <img src="/assets/main_v3/x.png" className="w-auto h-6" alt="logo" />
          <img src="/assets/main_v3/discord.png" className="w-[30px] h-auto" alt="logo" />
        </div>
      </div>
      {/* section banner */}
      <div className="flex flex-col items-center w-full h-screen pt-56 pb-40 bg-cover bg-index-s1-bg">
        {/* content on the left and right */}
        <div className="flex items-center gap-x-20">
          <div className="flex flex-col gap-y-8">
            <span className="text-[43px] font-semibold leading-tight font-Outfit">
              <span className="text-primary-light">Onboard anyone</span> to your Web3 app,<br />anywhere anytime
            </span>
            <span className="text-2xl leading-normal tracking-wide text-gray-light font-Outfit">
              Creating distribution channels for Web3 applications<br />with customizable onboarding links.
            </span>
          </div>
          <div className="flex flex-col -space-y-10">
            <GradientBorderCard text="users" />
            <GradientBorderCard primary={true}>
              <img src="/assets/main_v3/ts-logo.png" className="w-[220px] h-auto" alt="logo" />
            </GradientBorderCard>
            <GradientBorderCard text="web3 dapps" />
            <GradientBorderCard text="chains" last={true} />
          </div>
        </div>
      </div>
      {/* section features */}
      <div className="flex flex-col items-center w-full bg-dark-base/30 pt-25 pb-50 rounded-t-section">
        <SectionHeader
          sectionName="FEATURES"
          title="Embed however many onboarding actions in one singular onboarding flow"
        />
        <div className="flex items-center mt-32 gap-x-20">
          {/* feature list on the left */}
          <div className="flex flex-col border-l w-feature-list border-l-gray-base">
            {features.map((feature, i) => (
              // feature item
              <div key={i} className={`flex flex-col gap-y-1.5 pl-8 -ml-px cursor-pointer
                ${i === activeFeature ? 'py-7 border-l-4 border-primary-light' : 'py-11'}
              `} onClick={() => setActiveFeature(i)}>
                <span className={`text-2xl
                  ${i === activeFeature ? 'text-primary-light font-semibold' : 'text-gray-light'}
                `}>{feature.title}</span>
                {i === activeFeature && (
                  <span className="text-xl">{feature.description}</span>
                )}
              </div>
            ))}
          </div>
          <div className="w-fit h-[614px]">
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
      <div className="flex flex-col items-center w-full pt-25">
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
            <img className="w-[550px] h-auto" src="/assets/main_v3/link-2.png" alt="link" />
          </div>
        </div>
      </div>
      {/* section dapp */}
      <div className="flex flex-col items-center w-full pb-20 bg-dark-base/30 pt-25 rounded-b-section">
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
      <div className="relative flex flex-col items-center w-full py-20">
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
          />
          <FlatButton
            text="TownSquare"
            imgSrc="/assets/main_v3/discord.png"
          />
        </div>
      </div>
    </div>
  )
}

export default MainV3
