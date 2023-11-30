import { useState, useEffect } from 'react'

import MeetupList from "../components/meetups/MeetupList";

// if we fetch data and asign data to a state part, the state will be updated and the component
//will render again => the fetch will be done again, and the state updated again => component
//rendered again = infinite loop.

// TO PREVENT THIS BEHAVIOUR: 
// useEffect hook can prevent the render of the component by restrict when a code
// part should run, so we can place the fetch as first argument of our useEffect
// like below and make sure that we specify a second argument to tell the useEffect
// when to be executed. After the first  load of the component, useEffect will
// check if the second argument has changed after refresh, if not the component will
// not be rendered again.


const AllMeetups = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadedMeetups, setLoadedMeetups ] = useState();

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-udemy-ddf77-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
  )
    .then((response) => {
      return response.json();
    } ).then ((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    });
  }, [])

  

    if (isLoading) {
      return (
        <section>
          <p>Loading ...</p>
        </section>
      )
    }

  return (
    <>
      <section>
        <h1>All Meetups page</h1>
        <MeetupList meetups={ loadedMeetups }/>
      </section>
    </>
  )
}

export default AllMeetups
