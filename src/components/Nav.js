import React from 'react'
import '../styles/nav.css'
import {BiHome} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {IoMdContacts} from 'react-icons/io'
import {RiServiceLine} from 'react-icons/ri'
import {SlBadge} from 'react-icons/sl'

function Nav() {
  return (
    <nav>
    <a href="#"><BiHome className='nav__icon'/></a>
    <a href="#about"><SiAboutdotme /></a>
    <a href="#experience"><SlBadge /></a>
    <a href="#portfolio"><RiServiceLine /></a>
    <a href="#contact"><IoMdContacts /></a>
    </nav>
  )
}

export default Nav