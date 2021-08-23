import { useContext } from "react"

import { SearchContext } from "../App"

import Search from "../components/Search"
import City from "../components/City/City"

import "./Home.css"

const Home = () => { 

	const context = useContext(SearchContext)

	return (
		<main className="container-fluid">
			<div className="row">
				
				<div className="col-4 ms-5 text-center">

						{
							Object.keys(context.currentCity).length > 0
							?
								!context.currentCity.error
								?
									<City data ={context.currentCity} />
								:
									null
							: null
						}

				</div>

				<div className="col-6 text-center">
					<Search />
				</div>

			</div>
			
		</main>
		
	)
}

export default Home