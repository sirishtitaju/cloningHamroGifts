// import HandleAddToCart from "../functions/handleAddtoCart"
import React ,{useState} from 'react'
import { Badge } from '@mui/material';

export default function GiftItem (props) {
  const [itemCount, setItemCount] = React.useState(null);
  // console.log("ItemCount",itemCount);
  return (
    <div className='giftItem'>
      <img className='text-center' src={props.src} width='100%' height='100%' />
      <h2 className='mt-component text-primary font-medium'>{props.title}</h2>
      <div className='giftPricing mt-component'>
        <h1 className='text-secondary font-light'>{props.price}</h1>
        <Badge color="secondary" badgeContent={itemCount}>
        <svg
          className='addCartSvg'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={()=> setItemCount(itemCount + 1)}
        >   
          <path d='M6.01 16.136L4.141 4H3a1 1 0 0 1 0-2h1.985a.993.993 0 0 1 .66.235.997.997 0 0 1 .346.627L6.319 5H14v2H6.627l1.23 8h9.399l1.5-5h2.088l-1.886 6.287A1 1 0 0 1 18 17H7.016a.993.993 0 0 1-.675-.248.998.998 0 0 1-.332-.616zM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0-18a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V6h-1a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1z' />
        </svg>
        </Badge>
      </div>
    </div>
  )
}
