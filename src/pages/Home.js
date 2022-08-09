import HeroSection from '../layouts/heroSection'
import Jumbotron from '../components/jumbotron'
import FestivalCard from '../components/festivalCard'
import Carousel from '../components/carousel'
import TitleViewAll from '../components/titleViewAll'
import { GiftsRow1, GiftsRow2 } from '../layouts/gittsLayouts'

export default function Home() {
  return (
    <>
      <Jumbotron />
      {/* <HeroSection> */}
      <div className='festivalCards flex gap-2 justify-center mt-section'>
        <FestivalCard
          src='https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/RB_4x_9fb5f7d645.png'
          class='card1 festivalCard'
          cardName='Rakhi'
        />
        <FestivalCard
          class='card2 festivalCard'
          src='https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/Asset_1_4x_b31c30a962.png'
          cardName='Shrawan'
        />
        <FestivalCard
          class='card3 festivalCard'
          src='https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/Food_3_360b192c85.png'
          cardName='Khaja'
        />
        <FestivalCard
          class='card4 festivalCard'
          src='https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/Frame_de30b70d22.png'
          cardName='Birthday'
        />
        <FestivalCard
          class='card5 festivalCard'
          src='https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/anniversary_7220e27989.png'
          cardName='Valentine'
        />
      </div>
      {/* </HeroSection> */}

      <HeroSection>
        <Carousel />
        <TitleViewAll title='Rakhsya Bandhan' />
        <GiftsRow1 />
        <GiftsRow2 />
      </HeroSection>
    </>
  )
}
