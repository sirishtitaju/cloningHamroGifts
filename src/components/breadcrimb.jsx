import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div className='mt-section iconBreadcrumb' role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Hamro Store
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem' }}
          color="inherit"
          href="/cart"
        >
          <ShoppingCartIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Cart
        </Link>
      </Breadcrumbs>
    </div>
  );
}
