import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetup = () => {

  function addMeetupHandler(meetupData) {
    fetch('https://react-udemy-ddf77-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'content-Type': 'application/json'
      }
    }
    );
  }

  return (
    <>
      <h1>Add New Meetup</h1>
      <div><NewMeetupForm onAddMeetup={ addMeetupHandler }/></div>
    </>
  )
}

export default NewMeetup
