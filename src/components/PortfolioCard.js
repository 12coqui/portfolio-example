import React from 'react';

function PortfolioCard(props) {

const {img, title, github, livedemo} = props

	return (
		<div className='card'>
			<img src={img} alt='' />
			<div className="card__btn">
			<h3>{title}</h3>
				<a href={livedemo}className='btn btn-primary'>Live Demo</a>
				<a href={github} className='btn'>Github</a>
			</div>
		</div>
	);
}

export default PortfolioCard;
