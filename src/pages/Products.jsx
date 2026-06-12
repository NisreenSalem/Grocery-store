import { useMemo  , useState } from 'react'
import {useProducts} from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/categories'

const Products = () => {

  const {allProducts} = useProducts()
  const [search , setSearch] = useState("")
  const [selectedCategory , setSelectedCategory] = useState("All")
 const [sort , setSort] = useState("")
 const [maxPrice , setMaxPrice] = useState(300)

  const filteredProducts = useMemo(() =>{
    let filteredData = [...allProducts]
  
      if(search.trim() !== "" ) {
        filteredData = filteredData.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      
     }
    
     if(selectedCategory !== "All") {
      filteredData = 
      filteredData.filter((p) => p.category === selectedCategory)
     }

      if(sort == "low-high") 
      filteredData.sort((a,b) => a.price - b.price)
   
    if(sort == "high-low")  filteredData.sort((a,b) => b.price - a.price)
     

    filteredData = filteredData.filter((p) => p.price <= maxPrice )
    
    return filteredData
  },[allProducts, search , selectedCategory, sort , maxPrice])

  return (
    <div className='max-w-6xl mx-auto'>
       <h2 className='text-3xl font-bold mb-6'>All Products</h2>
   <div className='grid md:grid-cols-4 mb-10 gap-6'>
     <input 
     type="text" 
     placeholder='Search Products ...' 
     className='border border-gray-300 rounded-md px-2 py-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
     />
     <select  className='border border-gray-300 rounded-md px-2 py-1' 
     value={selectedCategory}
     onChange={(e) => setSelectedCategory(e.target.value)}
     >
        <option value="All">All </option>
        {categories.map( (cat) => (
            <option  key={cat.id} value={cat.value} >{cat.name}</option>
        ))}
     </select>


     

     {/* sorting */}
      <select className='border border-gray-300 rounded-md px-2 py-1'
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price (Lowest)</option>
        <option value="high-low">Price (Highest)</option>
      </select>
      <div className='border border-gray-300 rounded-md px-2 py-1'>
        <label>Max Price : LE . {maxPrice}</label>
        <input  min="20" max="300"  type="range" className='w-full '
        value={maxPrice} 
        onChange={(e) => setMaxPrice(e.target.value)}
         />
      </div>

   </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
       {filteredProducts.length > 0 ?
       (
           filteredProducts.map((p) =>(
               <ProductCard key={p.id} product={p}/>
           ))
       ) : 
       (
           <h4 className='text-red-600'>No Products Found</h4>
       )
       }
    </div>

    </div>
  )
}

export default Products
 