import { HomeCarousel } from "@/components/shared/home/home-carousel"
import { HomeCard } from "@/components/shared/home/home-card"
import { getAllCategories, getProductsByTag, getProductsForCard } from "@/lib/actions/product.actions"
import data from "@/lib/data"
import { toSlug } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import ProductSlider from "@/components/shared/product/product-slider"

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The homepage of the e-commerce website.
 *
 * The page displays a carousel at the top, followed by a section with 4 cards
 * that link to different categories, new arrivals, best sellers, and featured
 * products. Below that, there are two sections that display products that are
 * tagged with 'todays-deal' and 'best-seller' respectively.
 *
 * The page uses the `getAllCategories` and `getProductsByTag` functions to fetch
/*******  561be446-fe31-4dad-90df-11d6112180b0  *******/export default async function page() {
    const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
  })
  const featureds = await getProductsForCard({
    tag: 'featured',
  })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
  })
  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More' ,
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Discover Best Sellers',
      items: bestSellers,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: 'Featured Products',
      items: featureds,
      link: {
        text: 'Shop Now',
        href: '/search?tag=new-arrival',
      },
    },
  ]

const todaysDeals = await getProductsByTag({tag: 'todays-deal'})
const bestSellingProducts = await getProductsByTag({tag: 'best-seller'})

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />

        <Card className= 'w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
           </CardContent> 
        </Card>

        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider
              title='Best Selling Products'
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

