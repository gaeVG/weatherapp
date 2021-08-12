import { useContext } from "react"
import { useForm } from "react-hook-form"

import { SearchContext } from "../App"
import City from "../components/City"

import "./Home.css"

const Home = () => { 

	const context = useContext(SearchContext)

	const {
		register, handleSubmit, watch, formState : { errors }

	} = useForm()

	const onSubmit = data => {
		context.search(data)
	}

	return (
		<div className="container">
			<div className="row">

				<form onSubmit={handleSubmit(onSubmit)}>
					<input defaultValue="" {
						...register("city", { require : true })
					} />
					{
						Object.keys(context.currentCity).length > 0
						?
							context.currentCity.error
							?
								<small>Erreur {context.currentCity.error}</small>
							:
								null
						:
							null
					}
					{ errors.city && <small>Problème</small> }
				</form>

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
			

		</div>
	)
}

export default Home