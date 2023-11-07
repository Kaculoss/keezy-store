import {
  getBrands,
  getFeaturedProducts,
  getNewProducts,
  getTrendingProducts,
} from "@/lib/getFunctions"
import CarouselSlider from "@/components/CarouselSlider"
import FeaturedProducts from "@/components/FeaturedProducts"
import Hype from "@/components/Hype"
import Marquee from "@/components/Marquee"
import NewProducts from "@/components/NewProducts"
import TrendingProducts from "@/components/TrendingProducts"

export default async function Home() {
  const [featuredProducts, trendingProducts, newProducts, brands] =
    await Promise.all([
      getFeaturedProducts(),
      getTrendingProducts(),
      getNewProducts(),
      getBrands(),
    ])

  return (
    <>
      <CarouselSlider trendingProducts={trendingProducts} />
      <div className="mt-6">
        <FeaturedProducts featuredProducts={featuredProducts} />
        <Hype />
        <NewProducts newProducts={newProducts} />
        <TrendingProducts trendingProducts={trendingProducts} />
        <Marquee others={brands} />
      </div>
    </>
  )
}
