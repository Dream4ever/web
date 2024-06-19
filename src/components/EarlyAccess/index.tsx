function EarlyAccess() {
  return (
    <div id='earlyAccessDiv' className="early-access component" data-component="Early">
      <div className='z-20'>
        <div className='relative w-full h-screen overflow-hidden lg:overflow-visible'>
          <div className="flex justify-center pt-20 pb-40">
            <div className="hidden md:block">
              <img src="/images/footer.png" alt="" />
            </div>
            <div className="block md:hidden">
              <img src="/images/home/early.png" className="ml-2" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
};

export default EarlyAccess
