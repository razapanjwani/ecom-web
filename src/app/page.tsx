import Header from '@/components/Header'
import Hero from '@/components/hero'
import HomePageProducts from '@/components/HomePageProducts'
import CountdownTimer from "@/components/CountDownTimer"

export default function Home() {

  return (
    <div className=''>
      <Header />
      <div className='mt-5 mx-20'>
        <Hero />
        <h4 className='text-2xl mt-5'>Flash Sale</h4>
        <div className='border relative items-center flex text-sm h-[60px] mb-1'>
          <span className='mx-3 text-[#f85606]'>On Sale Now</span>
          <span className='ml-12'>Ending in</span>
          <CountdownTimer initialTime={7200}/>
          <button className='mx-5 px-3 py-1.5 border border-[#f85606] text-[#f85606] ml-auto'>SHOW MORE</button>
        </div>
        <HomePageProducts />
      </div>
    </div>
  );
}
