import { products } from '../data/products'
import ProductCard from './ProductCard'

const ProductGrid = () => {
  return (
    <section className='max-w-6xl mx-auto px-5 pt-10 '>
      <h2 className='text-2xl font-bold mb-5'>Popular</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
         {products.map( (p) =>(
            <ProductCard key={p.id} product={p}/>
         ))}
      </div>
    </section>
  )
}

export default ProductGrid
