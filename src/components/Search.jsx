import { useContext } from "react"
import { useForm } from "react-hook-form"

import { SearchContext } from "../App"

const API_KEY = process.env.REACT_APP_API_TOKEN

const Search = search => {

	const context = useContext(SearchContext)

	const onSubmit = data => {

		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${API_KEY}`)
			.then(res => res.json()).then(res => {

				if (res.cod === "400")
					context.setCity({ error : res.cod })
				else
					context.setCity(res)
				
			}).catch(e =>
				context.setCity({})
			)
	}

	const {
		register, handleSubmit, watch, formState : { errors }

	} = useForm()

	return(

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
	)
}

export default Search