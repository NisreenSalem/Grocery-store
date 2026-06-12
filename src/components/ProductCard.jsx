import { useCart } from '../context/CartContext'


const ProductCard = ({product}) => {
  const {addToCart} = useCart();
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden '> 
      <img src={product.image} alt={product.image} />

      <div className='h-35 w-full object-cover '>

        <div className='px-2 pt-1.5 '>
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <p className='text-gray-600'> {product.category}</p>
          <div className='flex justify-between items-center mt-3'>
          <span className='text-gray-600 font-bold'>Rs. {product.price}</span>
          <button className='bg-green-600 text-white px-3 rounded-lg hover:bg-green-700 cursor-pointer transition'
          onClick={()=> addToCart(product, 1)}
          >
            Add
          </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCard
