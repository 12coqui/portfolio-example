import React from 'react';
import '../styles/experience.css';
import { MdOutlineVerified } from 'react-icons/md';

function Experience() {
	return (
		<section id='experience'>
			<h5>Whats Skills I Have</h5>
			<h2>My Experience</h2>
			<div className='experience__container'>
				<div className='experience__front-end'>
					<h3>Front-end Development</h3>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>HTML</h3>
							<h6>Advanced</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>CSS</h3>
							<h6>Advanced</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>JavaScript</h3>
							<h6>Advanced</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>React</h3>
							<h6>Advanced</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<span>
							<h3>TypeScript</h3>
							<h6>Intemediate</h6>
						</span>
					</div>
				</div>
				<div className='experience__back-end'>
					<h3>Back-end Development</h3>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>Node.js</h3>
							<h6>Intemediate</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>MongoDB</h3>
							<h6>Intermediate</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>PHP</h3>
							<h6>Basic</h6>
						</div>
					</div>
					<div className='experience__skill'>
						<MdOutlineVerified className='icon'/>
						<div>
							<h3>MySQL</h3>
							<h6>Basic</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
