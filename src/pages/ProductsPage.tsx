import ProductCard from "../components/ProductCard"
import EVCharger from "/public/assets/EVCharger.jpg"
/* types for product objects in product array */
type ProductProps = {
    image: string,
    title: string,
    subtitle: string
}

const Brands: ProductProps[] = [
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

function ProductsPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container">
                <h1 className="text-5xl mb-5">Commercial Charging Solutions For Every Need</h1>

                {/* display for brand names */}
                <div className="flex items-center justify-center gap-5">
                    {Brands.map((brand,index) => <ProductCard key={index} image={brand.image} title={brand.title} subtitle={brand.subtitle} />)}
                </div>
            </div>
        </div>
    )
}
export default ProductsPage