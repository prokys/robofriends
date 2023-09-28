import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/Scroll.jsx'
import ErrorBoundry from '../components/ErrorBoundry.jsx'
import './App.css';


function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => setRobots(users));
	}, [])

	const onSearchChange = (event) => {
		setSearchField(event.target.value)
		
	}

	const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return !robots.length ?
		<h1>Loading</h1> :
	(
	<div className='tc'>
	<h1 className='f1'>Robofriends</h1>
	<SearchBox searchChange={onSearchChange} />
	<Scroll>
		<ErrorBoundry>
		<CardList robots={filteredRobots} />
		</ErrorBoundry>
	</Scroll>
	</div>
	);	
}

export default App;