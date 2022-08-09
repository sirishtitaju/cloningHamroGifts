import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

let list = [
  'https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/Rakhsha_Bandhan_dis_16_9_6eddfd30c2.jpeg',
  'https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/hamrogiftsshrwan1_1_a508c7c003.jpeg',
  'https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/Gift_Banner_big_new_153132dbb1.jpeg',
  'https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/bannerr_48f3dff915.jpeg',
  'https://everestdb.sgp1.digitaloceanspaces.com/strapi/everestdb/strapi/gifts_food_16_9_1_2a9ceee16a.jpeg'
]

export default class MyCarousel extends React.Component {
  render () {
    return (
      <div className='myCarousel'>
        <Carousel
          showArrows={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
        >
          {list.map((el,i) => 
            <div key={i}>
              <img src={el}/>
            </div>
          )}
        </Carousel>
      </div>
    )
  }
}
