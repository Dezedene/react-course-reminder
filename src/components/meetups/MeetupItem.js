import { useContext } from 'react'

import Card from './../userInterface/Card'
import meetupItemStyle from './MeetupItem.module.css'

import FavoritesContext from '../../store/favorites-context'


// we need to import useContext hooks to be able to access it and edit
// distant variables
const MeetupItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={ meetupItemStyle.item }>
      <Card>

        <div className={ meetupItemStyle.image }>
          <img src={ props.image } alt={ props.title }/>
        </div>

        <div className={ meetupItemStyle.content }>
          <h3>{ props.title }</h3>
          <address>{ props.adress }</address>
          <p>{ props.description }</p>
        </div>

        <div className={ meetupItemStyle.actions }>
          <button onClick={ toggleFavoritesStatusHandler }>
            { itemIsFavorite ? 'Remove from favorites' : 'To favorites' }
          </button>
        </div>
        
      </Card>
    </li>
  )
}

export default MeetupItem;
