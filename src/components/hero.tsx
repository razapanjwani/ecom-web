"use client"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerImg from "/public/banner.png"
import { useState } from "react";
const Hero = () => {
    const categories = [{id:1,name:"Groceries & Pets",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:2,name:"Health & Beauty",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:3,name:"Men's Fashion",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:4,name:"Women's Fashion",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:5,name:"Mother & Baby",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:6,name:"Home & Lifestyle",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:7,name:"Electronic Devices",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:8,name:"Electronic Accessories",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:9,name:"TV & Home Appliances",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:10,name:"Sports & Outdoor",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:11,name:"Watches, Bags & Jewellery",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]},{id:12,name:"Automotive & Motorbike",subCat:["subcat1","subcat2","subcat3","subcat4","subcat5","subcat6"]}]
    const slider = [
        {
            src:bannerImg,
            link:""
        },
        {
            src:bannerImg,
            link:""
        },
        {
            src:bannerImg,
            link:""
        },
        {
            src:bannerImg,
            link:""
        }
    ]
    
    return(
        <section className="flex flex-col md:flex-row max-w-[1350px] mx-auto gap-4 mt-8 justify-center items-center">
        {/* this section wiil show the categpries */}
            <div className="relative">
                <nav>
                    <ul className="rounded-md w-[270px] shadow-2xl flex flex-col justify-center pl-5 py-5 h-[400px] gap-[0.5rem]">
                        {categories.map((item)=>{
                            return(
                                <>
                                    <li className="group " >
                                        <Link href={"#"}  className=" text-[16px] text-gray-500 hover:text-orange-500 delay-100">{item.name}</Link>
                                        <ul className={`rounded-md w-[150px] shadow-2x1 justify-start pl-5  py-5 group-hover:flex hidden group-hover:flex-col absolute gap-[0.5rem] bg-white -right-36 z-30 top-0 h-[400px]`}>
                                            {item.subCat.map((item)=>{
                                                return(
                                                    <>
                                                        <li><Link href={"#"} className={`text-[16px] text-gray-500 hover:text-orange-500 delay-100`}>{item}</Link></li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        {/* this will be the slider section */}
            <div>
                <Carousel autoPlay showThumbs={false} >
                    {slider.map((items)=>{
                        return(
                            <>
                                <div>
                                    <Image src={items.src} width={500} height={500} alt="my banner"/>
                                </div>
                            </>
                        )
                    })}
                </Carousel>
            </div>
        </section>
    )
}
export default Hero