import { ProductsData } from '@/utils/moke';
import React from 'react'
import ProductCard from '@/components/productCard';

function ProductsPage() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-5 mt-20">
      {ProductsData.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default ProductsPage;