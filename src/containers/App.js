import React, { Component } from 'react'
import { connect } from 'react-redux';

import MainPage from '../components/MainPage/MainPage';

import { setSearchField, requestsRobots } from '../actions/actions';

class App extends Component {
	render() {
		return <MainPage { ...this.props } />;
	}
}

const mapStateToProps = ({ searchRobots, requestsRobots }) => {
	return {
		searchField: searchRobots.searchField,
		robots: requestsRobots.robots,
		error: requestsRobots.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
		onRequestRobots: () => dispatch(requestsRobots())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
