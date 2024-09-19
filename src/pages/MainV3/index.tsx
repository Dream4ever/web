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
    w: 436,
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
      {/* section 1 */}
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
      {/* section 2 */}
      <div className="flex flex-col items-center w-full h-screen bg-dark-base/30 pt-25 rounded-3xl">
        <div className="flex flex-col items-center gap-y-3 w-[729px]">
          <span className="text-xl font-bold leading-tight font-Outfit text-primary-light">FEATURES</span>
          <span className="font-Outfit font-medium text-4.5xl leading-tight text-center">Embed however many onboarding actions in one singular onboarding flow</span>
        </div>
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
  )
}

export default MainV3
