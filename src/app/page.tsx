import Header from '@/components/Header'
import Hero from '@/components/hero'
import FlashSaleSection from '@/components/FlashSaleSection'
import CountdownTimer from "@/components/CountDownTimer"
import JustForYou from '@/components/JustForYouSection';

export default function Home() {

  return (
    <div className='bg-[#e7e8ec]'>
      <Header />
      {/* Main Body Content Division */}
      <div className='mt-5 mx-20'>
        <Hero />
        {/* Flash Sale Section */}
        <h4 className='text-2xl mt-5'>Flash Sale</h4>
        <div className='border relative items-center flex text-sm h-[60px] bg-white'> {/* Flash Sale timer Box*/}
          <span className='mx-3 text-[#f85606]'>On Sale Now</span>
          <span className='ml-12'>Ending in</span>
          <CountdownTimer initialTime={7200}/>
          <button className='mx-5 px-3 py-1.5 border border-[#f85606] text-[#f85606] ml-auto'>SHOW MORE</button>
        </div>
        <FlashSaleSection />

        {/* Just For You Section */}
        <h4 className='text-2xl mt-5'>Just For You</h4>
        <JustForYou />
      </div>
    </div>
  );
}
