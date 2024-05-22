import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteBar() {
  return (
    <ul className='hidden lg:flex items-center  gap-[20px] xl:gap-[40px]'>
      <li className='text-base font-medium  leading-snug'><Link to={'/'}>Bot xususiyatlari</Link> </li>
      <li className='text-base font-medium  leading-snug'><Link to={'/'}>Bizning mijozlar</Link> </li>
      <li className='text-base font-medium  leading-snug'><Link to={'/'}>Fikrlar</Link> </li>
      <li className='text-base font-medium  leading-snug'><Link to={'/'}>Ko’p beriladigan savollar</Link> </li>
    </ul>
  )
}
