function Join() {
  return (
    <div
      id="join"
      className="mt-[100px]"
      data-component="Early"
    >
      <div className="z-20">
        <div className="relative w-full h-[55vh] overflow-hidden lg:overflow-visible">
          <div className="flex justify-center">
            <div className="hidden md:block">
              <div
                className="flex w-[944px] h-[414px] border rounded-2xl border-[#FFF]/30"
                style={{
                  backgroundImage:
                    "linear-gradient(101deg, rgba(94, 64, 158, 0.40) 20.36%, rgba(119, 92, 178, 0.40) 53.12%, rgba(94, 64, 158, 0.40) 96.24%)",
                }}
              >
                <div className="z-20 flex flex-col pl-8 py-14">
                  <p className="text-[#FFF] text-[40px] font-semibold">
                    Join the Web3 revolution
                  </p>
                  <p className="text-[#FFF] text-[23px] font-medium">
                    Download TowneSquare now!
                  </p>
                  <div className="py-12">
                    <button className="px-4 py-2.5 w-[211px] h-[51px] text-base text-[#121212] font-medium leading-none bg-[#00EEFD] hover:bg-[#388b91] active:bg-[#AAAAAA] rounded-full cursor-pointer">
                      Download TowneSquare
                      <p className="text-sm">Coming soon</p>
                    </button>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img
                      src="/assets/home/btn_google_play.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                    <img
                      src="/assets/home/btn_app_store.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <img
                  src="/assets/join/first_line.svg"
                  alt=""
                  className="absolute mt-4 ml-[285px]"
                />
                <img
                  src="/assets/join/sec_line.svg"
                  alt=""
                  className="absolute"
                />
                <img
                  src="/assets/join/join.png"
                  alt=""
                  className="absolute ml-[630px] -mt-[65px]"
                />
              </div>
            </div>
            <div className="z-30 block md:hidden">
              <div className="flex w-[338px] h-[416px] border rounded-2xl">
                <img
                  src="/assets/join/back.png"
                  alt=""
                  className="absolute w-100vw"
                />
                <div className="z-20 flex flex-col items-center justify-center text-center py-14">
                  <p className="text-[#FFF] text-[40px] font-semibold">
                    Join the Web3 revolution
                  </p>
                  <p className="text-[#FFF] text-[23px] font-medium">
                    Download TowneSquare now!
                  </p>
                  <div className="py-10">
                    <button className="px-4 py-2.5 w-[211px] h-[51px] text-base text-[#121212] font-medium leading-none bg-[#00EEFD] hover:bg-[#388b91] active:bg-[#AAAAAA] rounded-full cursor-pointer">
                      Download TowneSquare
                      <p className="text-sm">Coming soon</p>
                    </button>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img
                      src="/assets/home/btn_google_play.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                    <img
                      src="/assets/home/btn_app_store.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Join;
