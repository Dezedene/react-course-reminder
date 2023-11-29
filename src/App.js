import { Route, Switch } from 'react-router-dom'

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation'

import './App.css';

// 'exact' propertie is here to avoid Switch to go to "/" if we type '/favorites'
// for example as it goes directly to the page at first match, here the '/' of '/favorites'


function App() {
  return (
    <>
      <MainNavigation />
      <Switch>

        <Route path='/' exact={ true }>
          <AllMeetups />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>

      </Switch>
    </>
  );
}

export default App;
