import React, { createContext, useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './view/Home';
import Favorites from "./view/Favorites";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export const SearchContext = createContext();
export const FavoriteContext = createContext();


const App = () => {

	const [ city, setCity] = useState({})
	const [ favorites, setFavorites ] = useState([])

	
	useEffect(() => {
		console.log(favorites)		
	}, [favorites])

	return (
	  
		<BrowserRouter>
			<Header />

			<SearchContext.Provider value ={
				{
					currentCity : city,
					setCity : setCity 
				}
			}>
				<FavoriteContext.Provider value ={
					{
						favorites : favorites,
						setFavorites : setFavorites
					}
				}>

					<Switch>
						<Route exact path="/" render ={ () => <Home /> }/>
						<Route exact path="/favorites" render ={ () => <Favorites /> }/>
					</Switch>

				</FavoriteContext.Provider>					
			</SearchContext.Provider>

			<Footer />
		</BrowserRouter>

  	);
}

export default App;
