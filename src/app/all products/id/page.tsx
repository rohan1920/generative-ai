import Footer from "@/components/footer";
import Quantity from "@/components/quantity";
import { Button } from "@/components/ui/button";
import { ProductsData } from "@/utils/moke";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

function getProductDetails(id: string | number) {
  return ProductsData.filter((product) => product.id == id);
}

const sizes = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetails(params.id);
  return (
    <div className="flex flex-col mt-20 mb-10">
      <div className="flex justify-center items-center">
        {/* add to cart div */}
        {result.map((item) => (
          <div key={item.id} className="flex gap-y-3 gap-x-5 flex-col lg:flex-row  ">
            {/* Image  */}
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="lg:w-600 lg:h-600 md:w-400 md:h-400 "
              />
            </div>
            {/* content  */}
            <div className="p-5 mt-5">
              <div>
                <h1 className="text-2xl ">{item.title}</h1>
                <p className="font-semibold text-xl text-gray-400">{item.category}</p>
              </div>

              {/* sizes */}
              <div className="mt-8">
                <h3 className="text-sm font-bold">SELECT SIZE</h3>

                <div className="flex gap-3 mt-3">
                  {sizes.map((item, index) => (
                    <div
                      className="w-10 h-10 mt-2 rounded-full flex justify-center items-center hover:shadow-xl border duration-300 "
                      key={index}
                    >
                      <span className="font-semibold text-center text-[15px] text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* quantity */}
              <div className="flex items-center mt-10 gap-x-5">
                <div className="font-bold text-md">Quantity:</div>
                <Quantity />
              </div>

              {/* add to cart */}
              <div className="flex items-center gap-x-6 mt-10">
                <Button className="bg-black h-10 px-5 rounded-none">
                  <ShoppingCart className="mr-2" />
                  Start Shopping
                </Button>

                <h2 className="font-bold text-2xl">{item.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* below div */}

      <div className="bg-[#fcfcfc] p-20 lg:mx-32 m-0 mt-20 ">
        <h2 className="mt-10 scroll-m-20 border-b pb-8 border-gray-500  text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Product Information{" "}
        </h2>




        {/* below line */}
        <div className="mt-10 flex flex-col gap-y-10 ">


          {/* left side */}
          <div className="flex lg:flex-row flex-col gap-x-48 ">
          <h2 className=" scroll-m-20 pb-2 pt-6 text-xl font-semibold text-gray-500 tracking-tight transition-colors first:mt-0">
              Product Details
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>



          {/* Right Side */}
          <div className="flex lg:flex-row flex-col gap-x-36">
          <h2 className=" scroll-m-20 pb-2 text-xl font-semibold text-gray-500 tracking-tight transition-colors first:mt-0">
              Product Care
            </h2>
            
            <ul className="list-disc [&>li]:mt-2 ">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}