import List from "@/components/List"
import { Product } from "@/components/List";

const FlashSaleSection = () => {
  let products: Product[] = [
    {
      name: "Product Name 1",
      price: 1000,
      oldprice: 2000,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    },
    {
      name: "productname 2",
      price: 1010,
      oldprice: 2050,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    },
    {
      name: "productname 3",
      price: 2900,
      oldprice: 3900,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    },
    {
      name: "productname 4",
      price: 1900,
      oldprice: 3000,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    },
    {
      name: "productname 5",
      price: 5000,
      oldprice: 10000,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    },
    {
      name: "productname 6",
      price: 1050,
      oldprice: 2500,
      currency: "Rs",
      image: "/wrap.png",
      link: "#"
    }
  ]
  return (
    <section className="bg-white pt-2 grid grid-cols-6 items-center gap-x-3 justify-center relative">
      {
        products.map((item) => {
          return (
            <div className="flex-row inline-flex items-stretch">
            <List name={item.name} price={item.price} oldprice={item.oldprice} link={item.link} image={item.image} currency={item.currency}/>
            </div>
          )
        })
      }
    </section>
  )
}

export default FlashSaleSection