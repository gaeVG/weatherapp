import { useContext } from "react"
import styled from 'styled-components'

import iClearDay from "./icons/clear_day.png"

import { toC } from "../../App"
import { FavoriteContext } from "../../App"

const City = city => {

	const context = useContext(FavoriteContext)

	const getIcon = (weather) => {
	
		switch (weather) {
			case "clear sky":
				return "clear_day";
			default:
				return false;
		}
	}

	const toC = K => {
		return Math.floor(K - 273.15)
	}

	const Icon = styled.span`
		background-image : ${iClearDay};
	`;

	const addFavorite = () => {
		let favorites = context.favorites

		if (favorites.length < 3) {

			if (!favorites.includes(city.data.name)) {
				favorites.push(city.data.name)
			}
		}

		context.setFavorites(favorites)	
	}


	return (
		<div className="card col-12">
			<div className="card-header">
				{city.data.name}
			</div>

			<div className="card-body">
				<h5 className="card-title">
					<Icon /> {toC(city.data.main.temp)}°C
				</h5>

				<p className="card-text">
					{city.data.weather[0].description}
				</p>

				<div className="d-flex justify-content-around">
					<button className="btn btn-primary" onClick={addFavorite}>
						Add Favorite
					</button>

					{
						context.favorites.includes(city.data.name)
						?
							<button className="btn btn-danger" onClick={addFavorite}>
								Remove Favorite
							</button>
						:
							null
					}
				</div>

				
			</div>

		</div>
	)
}

export default City
