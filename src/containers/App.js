import React, { Component } from 'react'
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestsRobots } from '../actions';

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots()
	}

	render() {
		const { searchField, onSearchChange, robots } = this.props
		const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
		return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
			)
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
		onRequestRobots: () => requestsRobots(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
