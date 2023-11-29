import { Link } from 'react-router-dom'

import mainNavigationStyle from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
      <header className={ mainNavigationStyle.headerStyle }>
        <div className={ mainNavigationStyle.logo }>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Some links</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Newmeetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
      </header>
  )
}

export default MainNavigation