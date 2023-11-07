import { Product } from "@/types"

import Banner from "./Banner"
import Carousel from "./carousel/Carousel"

interface IProps {
  trendingProducts: Product[]
}

const CarouselSlider = ({ trendingProducts }: IProps) => {
  const types = [1, 2, 3, 4, 5, 6]
  const AllProducts: React.ReactNode[] = trendingProducts.map(
    (product, index) => (
      <Banner
        key={product._id}
        product={product}
        type={types[index % types.length]}
      />
    )
  )

  return (
    <div className="mt-8 hidden overflow-hidden sm:block">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <Carousel items={AllProducts} auto />
      </main>
    </div>
  )
}

export default CarouselSlider
