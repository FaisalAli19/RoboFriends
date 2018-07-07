import React from 'react'

import Card from './Card'

const CardList = ({ robots }) => {
	const cardArray = robots.map((robot, i) => {
		return (
			<Card 
				key={i} 
				id={robot.id} 
				name={robot.name} 
				email={robot.email}
			/>
	);
	})
	return (
		<div>
			{ cardArray }
		</div>
	);
}

export default CardList;