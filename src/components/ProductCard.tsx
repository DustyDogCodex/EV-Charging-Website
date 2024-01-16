type ProductProps = {
    image: string,
    title: string,
    subtitle: string
}

function ProductCard({ image, title, subtitle }: ProductProps) {
    return (
        <div className="">
            {/* product image */}
            <img 
                src={image} 
                alt="product image" 
                className="w-40"
            />

            {/* product title */}
            <h3>{title}</h3>

            {/* product subtitle */}
            <span>{subtitle}</span>
        </div>
    )
}

export default ProductCard