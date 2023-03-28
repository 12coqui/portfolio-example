import React from 'react';
import PortfolioCard from './PortfolioCard';
import '../styles/portfolio.css';

function Portfolio() {
	return (
		<section id='portfolio'>
			<h5>My Work</h5>
			<h2>Portfolio</h2>
			<div className='container container__portfolio'>
				<PortfolioCard
					className='portfolio__card'
					title='BULL - Stock Market Broker'
					github='https://www.github.com/12coqui'
					livedemo='https://www.github.com/12coqui'
					img='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2tzJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
				/>
				<PortfolioCard
					className='portfolio__card'
					title='Real State Company'
					github='https://www.github.com/12coqui'
					livedemo='https://www.github.com/12coqui'
					img='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMHN0YXRlJTIwY29tcGFueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
				/>
				<PortfolioCard
					className='portfolio__card'
					title='Rock Paper Sissors Game'
					github='https://www.github.com/12coqui'
					livedemo='https://www.github.com/12coqui'
					img='https://images.unsplash.com/photo-1522032662723-6649e699785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
				/>
				<PortfolioCard
					className='portfolio__card'
					title='Admin Dashboard'
					github='https://www.github.com/12coqui'
					livedemo='https://www.github.com/12coqui'
					img='https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWRtaW4lMjBkYXNoYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
				/>
			</div>
		</section>
	);
}

export default Portfolio;
