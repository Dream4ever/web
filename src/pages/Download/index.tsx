import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Suspense } from "react";

const Download = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="hidden md:block">
        <div id="join" className="relative z-20 flex justify-center w-full">
          <div className=" mt-[100px] mb-[210px] w-[1037px] flex flex-col border-b rounded-2xl h-[817px] gap-12 px-[60px] py-8">
            <div className="relative">
              <div className="absolute -right-4 top-[280px] z-10">
                <img src="/assets/join/downloadApp.svg" className="w-[298px]" alt="" />
              </div>
              <div className="absolute top-[453px] -left-14 z-0">
                <img src="/assets/join/download_first_line.svg" className="w-[474px]" alt="" />
              </div>
              <div className="absolute top-[376px] right-6 z-0">
                <img src="/assets/join/download_sec_line.svg" className="" alt="" />
              </div>
            </div>
            <div className="z-50 flex flex-col -mt-10">
              <p className="text-5xl font-bold leading-[150.3%]">Download</p>
              <p className="text-5xl font-bold leading-[150.3%] mb-10">TowneSquare</p>
              <div className="flex gap-2 mb-6">
                <p className="text-[29px] font-bold leading-[150.3%]">for</p>
                <img src="/assets/join/android_robot.svg" alt="" />
                <p className="text-[29px] font-bold leading-[150.3%]">android</p>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <img src="/assets/join/android_qr_code.png" className="w-[173px] rounded-xl" alt="" />
                </div>
                <div className="w-[370px] -mt-4">
                  <p className="mb-1 text-base font-semibold leading-normal uppercase">Minimal requirements:</p>
                  <p className="text-base font-normal leading-[150%] mb-4">Android OS 8.1 or higher</p>
                  <p className="mb-1 text-base font-semibold leading-normal uppercase">APK public key (SHA-256 digest):</p>
                  <p className="font-normal text-baes leading-[150%] text-wrap break-words">E662A2BD23934450DE3D8FBAE430FEFD1963C9ECEAB1F0BCD02074B73770EAE0</p>
                  <div className="z-30 mt-4">
                    <a
                      href="https://storage.googleapis.com/townesquare/Townesquare_Android.apk"
                      target="_blank"
                      rel="noreferrer"
                      className="hidden md:block justify-center items-center text-center px-6 py-4 text-base text-white w-[280px] h-[50px] leading-4 font-medium bg-secondary-cyan hover:bg-[#00EEDC] active:bg-[#AAAAAA] rounded-full cursor-pointer text-[#121212]">
                      Download APK package
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-10">
                <p className="text-[29px] font-bold leading-[150.3%]">for</p>
                <img src="/assets/join/apple.svg" alt="" />
                <p className="text-[29px] font-bold leading-[150.3%]">iOS</p>
              </div>
              <div className="mt-6 mr-6">
                <img src="/assets/join/app_store.png" className="w-[173px] rounded-xl" alt="" />
              </div>
            </div>
            <div className="flex flex-col mt-14">
              <p className="text-base font-semibold leading-normal uppercase text-[#AAAAAA]">notice:</p>
              <p className="text-base font-normal leading-[150%] text-[#AAAAAA]">As our app is not yet available on Google Play, you can download the official APK file directly from our website. Please be aware that downloading APK files from unofficial sources may pose a risk to your device's security, as they may contain malware or not be supported. To ensure a safe and smooth experience, we recommend downloading the APK file from our official website.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="relative z-0">
          <img src="/assets/join/mobile_download_first_line.svg" className="absolute w-screen top-[340px]" alt="" />
          <img src="/assets/join/mobile_download_sec_line.svg" className="absolute w-screen top-[200px]" alt="" />
        </div>
        <div className="py-[80px] px-3 flex flex-col">
          <p className="text-5xl font-bold leading-[150.3%] mb-10">
            Download<br></br>
            TowneSquare
          </p>
          <div className="flex gap-2 mb-6">
            <p className="text-[29px] font-bold leading-[150.3%]">for</p>
            <img src="/assets/join/android_robot.svg" alt="" />
            <p className="text-[29px] font-bold leading-[150.3%]">android</p>
          </div>
          <div className="z-30 flex items-center justify-center w-full">
            <a
              href="https://storage.googleapis.com/townesquare/Townesquare_Android.apk"
              target="_blank"
              rel="noreferrer"
              className="justify-center items-center text-center px-6 py-4 text-base text-white w-full h-[50px] leading-4 font-medium bg-secondary-cyan hover:bg-[#00EEDC] active:bg-[#AAAAAA] rounded-full cursor-pointer text-[#121212]">
              Download APK package
            </a>
          </div>
          <div className="z-50 mt-4">
            <p className="mb-1 text-base font-semibold leading-normal uppercase">Minimal requirements:</p>
            <p className="text-base font-normal leading-[150%] mb-4">Android OS 8.1 or higher</p>
            <p className="mb-1 text-base font-semibold leading-normal uppercase">APK public key (SHA-256 digest):</p>
            <p className="font-normal text-baes leading-[150%] text-wrap break-words">E662A2BD23934450DE3D8FBAE430FEFD1963C9ECEAB1F0BCD02074B73770EAE0</p>
          </div>
          <div className="flex gap-2 mt-10 mb-6">
            <p className="text-[29px] font-bold leading-[150.3%]">for</p>
            <img src="/assets/join/apple.svg" alt="" />
            <p className="text-[29px] font-bold leading-[150.3%]">iOS</p>
          </div>
          <div className="z-30 flex items-center justify-center w-full mb-10">
            <a
              href="https://apps.apple.com/us/app/townesquare/id6504888208"
              target="_blank"
              rel="noreferrer"
              className="justify-center items-center text-center px-6 py-4 text-base text-white w-full h-[50px] leading-4 font-medium bg-secondary-cyan hover:bg-[#00EEDC] active:bg-[#AAAAAA] rounded-full cursor-pointer text-[#121212]">
              Go to App Store
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-semibold leading-normal uppercase text-[#FFFFFF]">notice:</p>
            <p className="text-base font-normal leading-[150%] text-[#FFFFFF]">As our app is not yet available on Google Play, you can download the official APK file directly from our website. Please be aware that downloading APK files from unofficial sources may pose a risk to your device's security, as they may contain malware or not be supported. To ensure a safe and smooth experience, we recommend downloading the APK file from our official website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default Download;