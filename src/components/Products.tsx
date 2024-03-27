import ProductCard from "./ProductCard"
import EVCharger from "/public/assets/EVCharger.jpg"
import { motion } from "framer-motion"

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
        <div className="container flex flex-col items-center">
            {/* featured product section with section heading */}
            <div className="flex items-center justify-between w-full p-2">
                <h2 className="text-4xl font-semibold">Wide selection of products to fit every need</h2>

                {/* featured product */}
                <div>
                    <h2 className="text-2xl text-center">Our Featured Product</h2>
                    {/* image */}
                    <img 
                        src="/assets/EVCharger.jpg" 
                        alt="Featured product image" 
                        className="w-full h-72 rounded-2xl"    
                    />
                </div>
            </div>

            {/* products section */}
            <motion.div 
                className="w-full h-4/5 flex items-center gap-12 mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 1, scale: 0 }, 
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delayChildren: 0.3, staggerChildren: 0.2 }
                    }
                }}
            >
                {products.map(product => 
                    <ProductCard image={product.image} title={product.title} subtitle={product.subtitle} /> 
                )}
            </motion.div>
        </div>
    </section>
  )
}

export default Products