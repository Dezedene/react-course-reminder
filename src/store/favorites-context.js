// this component aim to initialize the store of the application and contain logics to edit it

import { createContext, useState } from 'react'


// Here are global values
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

// The component is here to update/ add /removed context values as its still a regular component
// so we can still add him a regular state

// when working with useState, the update is schedule and the update is not done instantly
// sometimes the state snapshot does not really reflect the real latest version as it is
// maybe not updated yet, and the update of our state depend of this latest state snapshot

// if we depend of the previous version of a state, there is an alternative way of updating the state 
// than just using setUserFavorites here for example, instead of passing the new value: setState(value),
// we sould pass a function to the state updating function:
// this way we are sure that react will execute things in the correct order, and we sure that
// we are working on the latest version of the state snapshot

export function FavoritesContextProvider (props) {
    const [ userFavorites , setUserFavorites ] = useState([]);


    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetupIp) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupIp)
        })
    }

    // .some test if one element at least pass the test returning true of false
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites:userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    // wrapping 'props.children' in FavoritesContext.Provider allow us to wrap any component 
    // with <FavoritesContext.Provider />
  return (
    <FavoritesContext.Provider value={context}>
        { props.children }
    </FavoritesContext.Provider>
  )
}


export default FavoritesContext