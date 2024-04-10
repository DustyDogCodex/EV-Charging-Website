import { Tabs, Tab,  } from "@mui/material"
import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import Masonry from '@mui/lab/Masonry'
import EVCharger from "/public/assets/EVCharger.jpg"
import EVCharging2 from "/public/assets/EVCharging2.jpg"
import EVCharging3 from "/public/assets/EV charging.jpg"
import EVCharging4 from "/public/assets/HeroImage3.jpg"

/* types for product objects in product array */
type ProductProps = {
    image: string,
    tag: string,
    title: string,
    subtitle: string
}

const Products: ProductProps[] = [
    {
        image: EVCharger,
        tag: 'Level 1',
        title: 'Product 1',
        subtitle: 'This is a product'
    },
    {
        image: EVCharging2,
        tag: 'Level 2',
        title: 'Product 2',
        subtitle: 'This is a product'
    },
    {
        image: EVCharging3,
        tag: 'DCFC',
        title: 'Product 3',
        subtitle: 'This is a product'
    },
    {
        image: EVCharging4,
        tag: 'Level 1',
        title: 'Product 4',
        subtitle: 'This is a product'
    }
]

function ProductsPage() {
    const [value, setValue] = useState<string>('all')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    //determine screensize
    const aboveSmallScreens = useMediaQuery('(min-width: 768px)')

    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-black">
            <div className="container mt-24 text-white flex flex-col items-center">
                {/* heading */}
                <h1 className="text-4xl text-white mt-5">Our Solutions</h1>      

                <p className="mt-3 text-xl text-center"> Explore our cutting-edge solutions designed to power your journey towards a greener future. From advanced charging stations to intuitive charging accessories, we offer the tools to revolutionize your EV charging experience</p>          
                
                {/* Tabs for filtering categories */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="photo gallery"
                    className="my-5"
                >
                    <Tab value="all" label="ALL" />
                    <Tab value="Level 1" label="LEVEL 1" />
                    <Tab value="Level 2" label="LEVEL 2" />
                    <Tab value="DCFC" label="DCFC" />
                </Tabs>

                {/* Masonry grid for images */}
                <div className="overflow-auto w-full p-2">
                    <Masonry columns={ aboveSmallScreens ? 3 : 1 } spacing={2}>
                        {value === 'all' 
                            ?
                            (
                                Products.map((pic, index) => (
                                    <img 
                                        key={index} 
                                        src={pic.image}
                                        alt="image"
                                    />
                                ))
                            )
                            :
                            (
                                Products.filter(pic => pic.tag === value).map((pic,index) => 
                                    <img 
                                        key={index} 
                                        src={pic.image}
                                        alt="image"
                                    />
                                )
                            )
                        }   
                    </Masonry>
                </div>
            </div>
        </div>
    )
}
export default ProductsPage