import { motion } from 'framer-motion'
type ProductProps = {
    image: string,
    title: string,
    subtitle: string
}

function ProductCard({ image, title, subtitle }: ProductProps) {
    return (
        <div className="bg-slate-200 p-5 h-full w-1/4 flex flex-col items-center justify-center rounded-2xl hover:shadow-lg hover:shadow-amber-500 hover:-translate-y-12 transition duration-300">
            {/* product image */}
            <motion.img 
                src={image} 
                alt="product image" 
                className="w-full h-80 object-cover rounded-2xl"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                }}
            />

            {/* product title */}
            <h3 className="text-2xl">{title}</h3>

            {/* product subtitle */}
            <span className="text-xl">{subtitle}</span>
        </div>
    )
}

export default ProductCard