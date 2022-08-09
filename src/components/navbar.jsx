import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@mui/material';

let itemCount = 0;

export default function NavBar(props) {
  return (
    <>
      <ul className='nav-list'>
        <div className='left'>
          <CustomLink href='/'>
            <div className='flex items-center gap-1'>
              <img
                src='https://gifts.hamropatro.com/c1e874ca4c847b70678ce61fe8a3ab3c.png'
                width='60px'
              />
              <h4 className='text-uppercase'> Hamro Store </h4>
            </div>
          </CustomLink>
        </div>
        <div className='middle text-secondary'>
          <span className='font-light'>Search Product</span>
        </div>
        <div className='right'>

          <CustomLink href='/cart'>
            <Badge color='secondary' badgeContent={itemCount}>Cart 🛒</Badge>
          </CustomLink>
        </div>
      </ul>
    </>
  )
}

function CustomLink({ href, children }) {
  const path = window.location.pathname

  return (
    <li className={path === href ? 'active' : ''}>
      <Link className='' to={href}>
        {children}
      </Link>
    </li>
  )
}
