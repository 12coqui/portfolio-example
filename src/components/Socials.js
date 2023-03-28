import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
function Socials() {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/leandro-serra92'>
				<CiLinkedin />
			</a>
			<a href='https://www.github.com/12coqui'>
				<FaGithub />
			</a>
			<a href='#'>
				<BsTwitter />
			</a>
		</div>
	);
}

export default Socials;
