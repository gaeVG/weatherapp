import { toC } from "../../App"
import styled from "styled-component"


const City = city => {

	const getIcon = (weather) => {
	
		switch (weather) {
			case "clear sky":
				return "clear_day";
			default:
				return false;
		}
	}

	const Icon = styled.div`
		background-image : url("./icon/${getIcon(city.data.weather[0].description)}");
	`;

	

	return (
		<div className="card col-4 mx-auto">
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

				<a href="favorite.html" className="btn btn-primary">
					Add Favorite
				</a>
			</div>

		</div>
	)
}

export default City
