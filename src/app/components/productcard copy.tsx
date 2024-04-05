import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
function ProductCard(props:{id:number,title:string,price:string,image:any,category?:string,gender?:string}) {
  return (
    <Link href={`/allProducts/${props.id}`}>
<div className='hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer mb-20'>
    <Image src={props.image} alt="ProductImage" width={380} height={400}/>
    <h1 className='font-bold text-xl mt-5'>{props.title}</h1>
    <p className='font-bold text-xl'>{props.category}</p>
    <p className='font-bold text-xl'>{props.gender}</p>
    <p className='font-bold text-xl'>{props.price}</p>
    </div>
    </Link>
  )
  
}

export default ProductCard;