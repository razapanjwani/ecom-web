import Image from "next/image"
import Link from "next/link"
import img from "@/assets/daaa.png"
import img1 from "@/assets/SVG.svg"
import img2 from "@/assets/place.png"

const Header = () => {
  return (
    <>
      <header className="px-20 pb-2.5 bg-[#F85606] text-white h-24">
        {/* Upper Header */}
        <div className="w-[1188px] h-[25px] relative top-0 pt-0 pb-1">
          <div className="left-0 top-0 absolute text-white text-xs font-normal font-['Roboto'] leading-normal">
            <Link href="#">Become a Seller</Link>
          </div>
          <div className="left-[111px] top-0 absolute text-white text-xs font-normal font-['Roboto'] leading-normal">
            <Link href="#">Daraz Affiliate Program</Link>
          </div>
          <div className="left-[259.30px] top-0 absolute text-white text-xs font-normal font-['Roboto'] leading-normal">Help & Support</div>
          <div className="pl-[4.75px] object-top pr-[6.64px] py-0.5 left-[1043px] absolute bg-black bg-opacity-30 rounded-bl-lg rounded-br-lg justify-center items-start gap-[7.61px] inline-flex">
            <Image className="w-5 h-5 relative" src={img2} alt="savemoreonapp"/>
            <div className="text-right top-0 text-white text-[13px] font-normal font-['Roboto'] leading-[25px] justify-items-center">Save More on App</div>
          </div>
          <div className="w-10 h-9 relative">
            <div className="w-7 h-6 left-[1150px] top-[35px] absolute flex-col justify-start items-start inline-flex">
                <div className="w-7 h-7 relative" />
                <Image src={img1} alt="cart" />
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-96 h-16 px-20 pt-2.5 pb-1.5 flex-col justify-start items-center inline-flex">
          <div className="w-96 h-12 relative">
            <div className="pr-5 left-0 top-[-7px] absolute justify-start items-start inline-flex">
              <div className="flex-col justify-center items-start inline-flex">
                <Image className="w-28 h-12 relative" src={img} alt="Daraz Logo"/>
              </div>
            </div>
            <div className="h-9 left-[142.98px] top-0 absolute bg-white rounded-xl justify-start items-start inline-flex">
              <div className="w-96 h-11 relative">
                <div className="relative">
                  <form>
                      <input name="Search Bar" placeholder="Search in Daraz" className="w-[770px] h-9 left-0 top-0 absolute bg-white rounded-xl text-black text-sm font-normal font-['Roboto'] pl-5" />
                  </form>
                </div>
                <div className="h-7 pr-1.5 left-[690px] top-0 absolute flex-col justify-start items-start inline-flex">
                  <div className="w-12 h-7 relative rounded-lg">
                    <div className="top-[13px] left-3 absolute text-center text-black text-xs font-normal font-['Inter'] leading-3">
                      <Link href="#">SEARCH</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 h- left-[876.98px] top-[-2px] absolute justify-start items-start gap-12 inline-flex">
              <div className="h-10 justify-start items-start flex">
                <div className="self-stretch pr-4 rounded-lg flex-col justify-start items-start inline-flex">
                  <div className="w-20 h-10 relative">
                    <div className="left-[60px] top-[1px] absolute text-white text-xs font-bold font-['Roboto'] leading-9">
                    <Link href="#">Login</Link>
                    </div>
                  </div>
                </div>
                <div className="self-stretch pl-1.5 pt-0.5 flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xs font-normal font-['Roboto'] leading-9">|</div>
                </div>
                <div className="pl-5 pt-2.5 inline-flex">
                    <div className="text-center text-white text-xs font-bold font-['Roboto'] hover:shadow-slate-500">
                      <Link href="#">SignUp</Link>
                    </div>
                </div>
              </div>
              <div>
                <select name="languages" id="language-select" className="py-1.5 bg-transparent border-white text-white">
                  <option value="en">EN</option>
                  <option value="ur">UR</option>
                </select> 
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header