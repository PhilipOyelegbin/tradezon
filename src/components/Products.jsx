import { productData } from './data';

const Products = () => {
  return (
    <section className="py-10 px-5 md:px-20">
      <h2 className="text-2xl text-center font-bold">Our Products</h2>
      <div id='products' className='md:w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto mt-3'>
        {productData?.map(obj =>
          (
            <figure className='card' key={obj.id}>
              <img className='rounded-t-2xl w-full h-60' src={obj.image} alt="product-image" />
              <figcaption className='p-2'>
                <h3 className='text-center text-2xl'>{obj.title}</h3>
                <p className='text-sm mb-3'>{obj.description}</p>
                <a className="btn" href={obj.link} target="_blank">Buy Now</a>
              </figcaption>
            </figure>
          )
        )}
      </div>
    </section>
  )
}

export default Products
