import { Route } from 'react-router-dom'

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

import './App.css';

function App() {
  return (
    <>
      <Route path='/'>
        <AllMeetups />
      </Route>

      <Route path='/new-meetup'>
        <NewMeetup />
      </Route>

      <Route path='/favorites'>
        <Favorites />
      </Route>
    </>
  );
}

export default App;
