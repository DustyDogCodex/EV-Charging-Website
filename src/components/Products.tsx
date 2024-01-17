import ProductCard from "./ProductCard"
import EVCharger from "/public/assets/EVCharger.jpg"

/* types for product objects in product array */
type ProductProps = {
    image: string,
    title: string,
    subtitle: string
}

/* array with product images, titles and subtitles */
const products: ProductProps[] = [
    {
        image: EVCharger,
        title: 'Product 1',
        subtitle: 'This is a product'
    },
    {
        image: EVCharger,
        title: 'Product 2',
        subtitle: 'This is a product'
    },
    {
        image: EVCharger,
        title: 'Product 3',
        subtitle: 'This is a product'
    },
    {
        image: EVCharger,
        title: 'Product 4',
        subtitle: 'This is a product'
    }
]

function Products() {
  return (
    <section
        id="products"
        className="h-screen flex items-center justify-center w-full"
    >
        <div className="w-4/5 h-4/5 flex flex-col items-center">
            <h2 className="text-6xl text-center">Wide selection of products to fit every need</h2>

            {/* products section */}
            <div className="w-full h-4/5 flex items-center gap-12 mt-16">
                {products.map(product => 
                    <ProductCard image={product.image} title={product.title} subtitle={product.subtitle} /> 
                )}
            </div>
        </div>
    </section>
  )
}

export default Products