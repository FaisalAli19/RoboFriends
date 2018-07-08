import React from 'react'
import { connect } from 'react-redux';

const Scroll = (props) => {
	let children;
	if (props.isPending) children = <h1 style={{'fontFamily': 'SEGA LOGO FONT', 'fontWeight': '200', color:' #0ccac5'}}>Loading...</h1>
	else children = props.children
	return (
		<div style={{overflowY: 'auto', border: '1px solid #000', height: '600px'}}>
			{children}
		</div>
	);
}

const mapStateToProps = ({ requestsRobots }) => {
	return {
		isPending: requestsRobots.isPending
	};
}

export default connect(mapStateToProps)(Scroll);