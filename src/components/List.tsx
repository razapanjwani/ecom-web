import Image from "next/image"
import Link from "next/link"

export interface Product{
    // id:number;
    name:string;
    price:number;
    oldprice:number,
    currency: string;
    image: string | any;
    link:string;
}

const List = (props: Product) => {
  return (
        <section className="w-[189px] h-[320px] border hover:shadow-lg cursor-pointer">
            <Link href={`${props.link}`} className="delay-100" />
            <Image src={`${props.image}`} width={189} height={189} alt="wrap"/>
            <div className="px-2">
                <h4 className="relative text-base text-gray-500 mt-[10px]">{`${props.name}`}</h4>
                <span className="relative text-base text-[#f85606]">{`${props.currency}.${props.price}`}</span><br />
                <span className="text-[#9e9e9e] text-xs line-through mt-1">{`${props.currency} ${props.oldprice}`}</span>
                <span className="text-[#9e9e9e] text-xs">{` ${(props.price-props.oldprice)/100}%`}</span>
            </div>
        </section>
  )
}

export default List