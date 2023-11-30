import { createContext, useState } from 'react'


// Here are global values
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

// The component is here to update/ add /removed context values as its still a regular component
// so we can still add him a regular state
const FavoritesContextProvider = (props) => {
    const [ userFavorites , setUserFavorites ] = useState([]);

    const context = {
        favorites:userFavorites,
        totalFavorites: userFavorites.length,
    };

    // wrapping 'props.children' in FavoritesContext.Provider allow us to wrap any component 
    // with <FavoritesContext.Provider />
  return (
    <FavoritesContext.Provider value={context}>
        { props.children }
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider

