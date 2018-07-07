import React from 'react'

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'auto', border: '1px solid #000', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;