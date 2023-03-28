import React from 'react';
import '../styles/about.css';
import { SlBadge } from 'react-icons/sl';
import { IoMdPeople } from 'react-icons/io';
import { BsFolder2Open } from 'react-icons/bs';
import me_about from '../assets/image/me_about.jpg'

function About() {
	return (
		<section id='about'>
			<h5>Get To Know </h5>
			<h2>About Me</h2>
			<div className='container container__about'>
				<div className='img-box'>
					<img src={me_about} alt='' />
				</div>
				<div className='info__about'>
					<div className='cards'>
						<div className='card__about'>
							<SlBadge id='icon' />
							<h4>Experience</h4>
							<h6>3+ Years Working</h6>
						</div>
						<div className='card__about'>
							<IoMdPeople id='icon' />
							<h4>Clients</h4>
							<h6>300+ Worldwide</h6>
						</div>
						<div className='card__about'>
							<BsFolder2Open id='icon' />
							<h4>Projects</h4>
							<h6>10+ Completed</h6>
						</div>
					</div>
					<p className='description__about'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ab
						similique nulla molestias, soluta ex consectetur officiis vitae nemo
						atque. Id laudantium qui ipsam odit officia explicabo quam quis
						ullam! Aspernatur voluptatum qui voluptatibus accusamus quisquam
						tempora aperiam quidem? Vero asperiores, libero sed ipsum quasi odit
						quis.
					</p>
					<a href='#contact' className=' btn btn-primary about__btn'>
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
