
import { 
	CHANGE_SEARCH_FILED, 
	REQUEST_ROBOTS_FAILED, 
	REQUEST_ROBOTS_PENDING, 
	REQUEST_ROBOTS_SUCCESS 
} from '../constants/constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FILED,
	payload: text
})

export const requestsRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });

	return fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
			})
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}