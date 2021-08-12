import { useForm } from "react-hook-form"

import "./Home.css"

const Home = props => { 

    const {
        register, handleSubmit, watch, formState : { errors }

    } = useForm()

    const onSubmit = data => {
        props.handleSearch(data)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="" {
                ...register("city", { require : true })
            } />

            { errors.city && <p>Problème</p> }
        </form>
    )
}

export default Home