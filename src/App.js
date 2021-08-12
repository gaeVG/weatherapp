import React, { createContext, useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './view/Home';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchContext = createContext();
export const FavoriteContext = createContext();

export const toC = K => {
	return Math.floor(K - 273.15)
}

const API_KEY = process.env.REACT_APP_API_TOKEN


const App = () => {

	const [ city, setCity] = useState({})
	const [ favorites, setFavorites ] = useState([])

	const searchCity = s => {

		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s.city}&appid=${API_KEY}`)
			.then(res => res.json()).then(res => {

				if (res.cod === "400")
					setCity({ error : res.cod })
				else
					setCity(res)
				
			})
			.catch(e => {
				setCity({})
			})
		//setSearch(s)
		// Utiliser l'API pour trouver la ville recherchée
	}
  
	return (
	  
		<div>
			<BrowserRouter>
				<Header />

				<Switch>
					<SearchContext.Provider value ={
						{
							currentCity : city,
							search : searchCity 
						}
					}>
						<Route exact path="/" render ={ () => <Home /> }/>
					</SearchContext.Provider>

					<FavoriteContext.Provider value ={
						{
							favorites : favorites,
							setFavorite : setFavorites
						}
					}>
						<Route
							exact path="/"
							render ={ props =>
								<Home /> 
							}
						/>
					</FavoriteContext.Provider>
				</Switch>

				<Footer />
			</BrowserRouter>

		</div>
  	);
}

export default App;
