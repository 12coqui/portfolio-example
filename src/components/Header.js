import React from 'react';
import '../styles/header.css';
import cv from '../assets/cv.pdf';
import profile from '../assets/image/me.png';
import Socials from './Socials';

function Header() {
	return (
		<header>
			<div className='container header__container'>
				<h5 className='text-light'>Hello I'm</h5>
				<h1>Leandro Serra</h1>
				<h5 className='text-light'>Front End Dev</h5>
				<div className='cta'>
					<a href={cv} download className='btn'>
						Download
					</a>
					<a href='#contact' className=' btn btn-primary'>
						Let's talk
					</a>
				</div>
				<Socials />
				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
				<div><img className='me' src={profile} alt='' /></div>
			</div>
		</header>
	);
}

export default Header;
