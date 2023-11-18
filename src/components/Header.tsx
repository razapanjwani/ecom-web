import React from 'react';
import Image from 'next/image';
import img1 from '@/assets/daraz.png'
// import img1 from 'src\assets\daraz.png'

const Header = () => {
  return (
    // <header className={styles.header}>
    <>
        <header className="flex justify-between items-center px-20 py-2.5 bg-orange-600 text-white h-24">
            <div className='flex-row absolute text-sm top-1'>
                <nav className="flex gap-2 top-1">
                    <a href="#" className="no-underline text-white font-bold">Become a Seller</a>
                    <a href="#" className="no-underline text-white font-bold">Daraz Affiliate Program</a>
                    <a href="#" className="no-underline text-white font-bold">Help & Support</a>
                </nav>
                <a  href="#" className="no-underline text-white font-bold">Save More on App</a>
            </div>
            <div className="flex items-center gap-2.5">
                {/* <!-- Replace with your actual logo path --> */}
                <Image src={img1} alt="Daraz Logo" width={100} height={90} className="w-[100px] h-[90px] z-1" />
                {/* <span>Daraz</span> */}
            </div>
            <div className="flex">
                <input type="text" placeholder="Search in Daraz" className="py-1 px-2 border-none rounded-md" />
                <button type="submit" className="py-1 px-2 bg-gray-300 border-none rounded-md text-gray-800">
                    <Image src="" alt="Cart" className="w-8 h-8 mr-1" />
                </button>
            </div>
            <div className="flex gap-2.5">
                <button className="py-1 px-2 bg-transparent border border-white text-white">Login</button>
                <button className="py-1 px-2 bg-transparent border border-white text-white">Sign Up</button>
                <select name="languages" id="language-select" className="py-1 bg-transparent border border-white text-white">
                    <option value="en">EN</option>
                {/* <!-- Add other language options here --> */}
                </select>
                <a href="/cart" className="flex items-center no-underline text-white">
                <Image src="" alt="Cart" className="w-8 h-8 mr-1" />
                </a>
            </div>
        </header>
    </>
  );
};

export default Header;
