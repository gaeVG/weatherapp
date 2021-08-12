import { createContext, useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './view/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchContext = createContext();
const App = () => {

	const { search, setSearch } = useState("")
	const { currentCity, setCurrentCity } = useState({})

	const citySearch = s => {
		console.log("Rechercher la ville")
		console.log(s)
		//setSearch(s)
		// Utiliser l'API pour trouver la ville recherchée
	}

	useEffect( () => {
		// setCurrentCity(data)
	}, [search])
  
	return (
	  
		<div>
			<BrowserRouter>
				<Header />
				
				<Switch>

					<Route
						exact path="/"
						render ={ props =>
							<Home
								{...props}
								handleSearch ={citySearch}
							/> 
						}
					/>
				</Switch>

				<Footer />
			</BrowserRouter>

			

		</div>
  	);
}

export default App;
