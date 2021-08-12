import { toC } from "../App"

const City = city => 

	<div className="card col-4 mx-auto">
		<div className="card-header">
			{city.data.name}
		</div>

		<div className="card-body">
			<h5 className="card-title">
				{toC(city.data.main.temp)}°C
			</h5>

			<p className="card-text">
				{city.data.weather[0].description}
			</p>

			<a href="favorite.html" className="btn btn-primary">
				Add Favorite
			</a>
		</div>

	</div>


export default City
