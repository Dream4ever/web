function Join() {
  return (
    <div
      id="join"
      className="mt-[100px] mb-[100px] z-20 relative w-full flex justify-center"
    >
      <div className="hidden md:block">
        <div className="relative flex rounded-2xl">
          <img src="/assets/join/join.png" alt="" className="w-[944px]" />
          <div className="absolute z-20 flex flex-col pl-8 pt-[124px]">
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
        </div>
      </div>
      <div className="z-30 block md:hidden">
        <div className="flex w-[338px] h-[416px] border rounded-2xl">
          <img
            src="/assets/join/back.png"
            alt=""
            className="absolute w-[336px]"
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
  );
}

export default Join;
