import React from 'react';
import '../styles/contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

function Contact() {
	return (
		<section id='contact'>
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className='container container__contact'>
				<div className='email'>
					<div className='icon-title'>
						<AiOutlineMail />
						<h3>E-mail</h3>
					</div>
					<h5>
						<a href='mailto:serraln.92@gmail.com'>serraln.92@gmail.com</a>
					</h5>
				</div>
				<div className='whatsapp'>
					<div className='icon-title'>
						<AiOutlineWhatsApp />
						<h3>Whatsapp</h3>
					</div>
					<h5>
						<a href='https://wa.link/6zy7f0'>+549 3382-465225</a>
					</h5>
				</div>
				<div className='instagram'>
					<div className='icon-title'>
						<AiOutlineInstagram />
						<h3>Instragram</h3>
					</div>
					<h5>
						<a href='https://www.instagram.com/12coqui'>@12coqui</a>
					</h5>
				</div>
				<div className='twitter'>
					<div className='icon-title'>
						<AiOutlineTwitter />
						<h3>Twitter</h3>
					</div>
					<h5>
						<a href='https://www.twiter.com'>@12coqui_</a>
					</h5>
				</div>
			</div>
		</section>
	);
}

export default Contact;
