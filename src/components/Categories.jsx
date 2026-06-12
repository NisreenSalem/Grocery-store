import { categories } from '../data/categories'

const Categories = () => {



  return (
  <section className='max-w-6xl mx-auto px-5 py-12'>

  <h2 className='text-3xl font-black mb-8 text-gray-800'>
    Shop by Category
  </h2>

  <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-3'>

    {categories.map((cat) => (

      <div
        key={cat.id}
        className='
        bg-white
        p-5
        shadow-sm
        rounded-2xl
        border border-green-100
        text-center
        cursor-pointer
        transition-all
        duration-300
        hover:bg-green-50
        hover:border-green-300
        hover:shadow-xl
        hover:-translate-y-1
        '
      >

        <p className='font-semibold text-gray-700 hover:text-green-700 transition'>
          {cat.name}
        </p>

      </div>

    ))}

  </div>

</section>
  )
}

export default Categories
