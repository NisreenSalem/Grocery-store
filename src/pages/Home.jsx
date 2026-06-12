import Categories from '../components/Categories'
import ProductGrid from '../components/ProductGrid'


const Home = () => {
  return (
  <div>
      <section className='bg-green-100 py-16'>
     <div className='max-w-6xl mx-auto px-5 text-center'>
       <h1 className='text-4xl md:text-5xl font-bold mb-4'>
        Fresh Groceries Delivered to your doorstep
       </h1>
       <p className='text-gray-600  text-lg mb-4'> 
    buy fresh vegs , fruits , dairy , snakes and more 
       </p>
       <button className='bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700'>
        Show Now
       </button>
     </div>
      
    </section>


       <Categories/>
    
       <ProductGrid/>
       
  </div>


  )
}

export default Home
