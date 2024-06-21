function Join() {
  return (
    <div id='earlyAccessDiv' className="early-access component" data-component="Early">
      <div className='z-20'>
        <div className='relative w-full h-screen overflow-hidden lg:overflow-visible'>
          <div className="flex justify-center pt-20 pb-40">
            <div className="hidden md:block">
              {/* <img src="/images/footer.png" alt="" /> */}
              <div className="flex w-[944px] h-[414px] border rounded-2xl border-[#FFF]/30" style={{ backgroundImage: 'linear-gradient(101deg, rgba(94, 64, 158, 0.40) 20.36%, rgba(119, 92, 178, 0.40) 53.12%, rgba(94, 64, 158, 0.40) 96.24%)' }}>
                <div className="z-20 flex flex-col pl-8 py-14">
                  <p className="text-[#FFF] text-[40px] font-semibold">Join the Web3 revolution</p>
                  <p className="text-[#FFF] text-[23px] font-medium">Download TowneSquare now!</p>
                  <div className="py-12">
                    <button
                      className="px-4 py-2.5 w-[211px] h-[51px] text-base text-[#121212] font-medium leading-none bg-[#00EEFD] hover:bg-[#388b91] active:bg-[#AAAAAA] rounded-full cursor-pointer"
                    >
                      Download TowneSquare
                      <p className="text-sm">Coming soon</p>
                    </button>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="/images/home/btn_google_play.svg" alt="" />
                    <img src="/images/home/btn_app_store.svg" alt="" />
                  </div>
                </div>
                <img src="/images/join/first_line.svg" alt="" className="absolute mt-4 ml-[285px]" />
                <img src="/images/join/sec_line.svg" alt="" className="absolute" />
                <img src="/images/join/join.png" alt="" className="absolute ml-[630px] -mt-[65px]" />
              </div>
            </div>
            <div className="z-30 block md:hidden">
              <div className="flex w-[95vw] h-[414px] border rounded-2xl bg-[url('../public/images/join/back.png')]">
                <div className="z-20 flex flex-col items-center justify-center text-center py-14">
                  <p className="text-[#FFF] text-[40px] font-semibold">Join the Web3 revolution</p>
                  <p className="text-[#FFF] text-[23px] font-medium">Download TowneSquare now!</p>
                  <div className="py-10">
                    <button
                      className="px-4 py-2.5 w-[211px] h-[51px] text-base text-[#121212] font-medium leading-none bg-[#00EEFD] hover:bg-[#388b91] active:bg-[#AAAAAA] rounded-full cursor-pointer"
                    >
                      Download TowneSquare
                      <p className="text-sm">Coming soon</p>
                    </button>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="/images/home/btn_google_play.svg" alt="" />
                    <img src="/images/home/btn_app_store.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
};

export default Join
