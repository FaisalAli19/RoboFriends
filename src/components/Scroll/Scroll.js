import React from 'react';

const Scroll = (props) => {
	let children;
	if (props.isPending) children = <h1 className="loading" style={{'fontFamily': 'SEGA LOGO FONT', 'fontWeight': '200', color:' #0ccac5'}}>Loading...</h1>
	else children = props.children
	return (
		<div style={{overflowY: 'auto', border: '1px solid #000', height: '550px'}}>
			{children}
		</div>
	);
}

export default Scroll;