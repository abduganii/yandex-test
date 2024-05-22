import React from 'react'

import Container from '../container'
import { BurgerIcons } from '../icons'
import Lang from '../lang'
import SiteBar from '../site-bar'

export default function Header() {
  return (
    <header className='fixed w-full top-0 ' style={{"zIndex":10000}}>
      <Container >
        <div className={'flex border-b items-center bg-zinc-950 border-zinc-700 py-[24px] gap-[40px]  xl:gap-[104px]'} >
          
        <div className='flex items-center gap-4'>
          <img src='/logo.svg' alt='img' width={40} height={ 40} />
            <h4 class="text-white text-[23px] font-medium leading-loose">TrueGis</h4>
        </div>
        <SiteBar />
          <Lang className="ml-auto" />
          <div className='cursor-pointer  lg:hidden'>
            <BurgerIcons/>
          </div>
        </div>
      </Container>
    </header>
  )
}
