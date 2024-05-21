import React from 'react'
import { Outlet } from "react-router-dom";

import Header from '../../ui/header';

export default function MainLayout() {
  return (
      <>
          <Header/>
          <div className='mt-[150px]'>
            <Outlet />
           </div>
        </>
  )
}
