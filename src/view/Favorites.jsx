import { useContext } from "react"

import { FavoriteContext } from "../App"

const Favorites = () => { 

	const favorites = useContext(FavoriteContext)

	return (
		<main className="container">
			<div className="row">

				{
                    favorites.length > 0
                    ?
                        <div>
                            Coucou
                        </div>
                    :
                        <div>
                            Pas de favoris
                        </div>
                }
			</div>
		</main>
	)
}

export default Favorites