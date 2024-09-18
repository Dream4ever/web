import GradientBorderCard from "../../components/GradientBorderCard"

function MainV3() {
  return (
    // page wrapper
    <div className="relative flex flex-col items-center bg-dark-lg">
      <div className="fixed">
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
      <div className="flex flex-col items-center w-full h-screen pt-48 pb-40 bg-cover bg-index-s1-bg">
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
          <div className="flex flex-col">
            <GradientBorderCard text="users" />
            <GradientBorderCard primary={true}>
              <img src="/assets/main_v3/ts-logo.png" className="w-[220px] h-auto" alt="logo" />
            </GradientBorderCard>
            <GradientBorderCard text="web3 dapps" />
            <GradientBorderCard text="chains" last={true} />
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-dark-md"></div>
    </div>
  )
}

export default MainV3
