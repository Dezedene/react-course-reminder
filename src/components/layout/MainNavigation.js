import { useContext } from 'react'

import { Link } from 'react-router-dom'

import mainNavigationStyle from './MainNavigation.module.css'
import FavoritesContext from './../../store/favorites-context'

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={ mainNavigationStyle.headerStyle }>
      <div className={ mainNavigationStyle.logo }>React Meetups</div>
      <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetup'>New Meetup</Link>
            </li>
            <li>
              <Link to='/favorites'>
                  Favorites
                  <span className={ mainNavigationStyle.badge }>{ favoritesCtx.totalFavorites }</span>
              </Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default MainNavigation