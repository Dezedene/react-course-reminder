import MeetupList from "../components/meetups/MeetupList";

const fakeData = [
      {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://images.unsplash.com/photo-1527896573815-b7dd74893deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdlZWt8ZW58MHx8MHx8fDA%3D',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://images.unsplash.com/photo-1575821116307-0b37e2ab65b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdlZWt8ZW58MHx8MHx8fDA%3D',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
    ];

const AllMeetups = () => {
  return (
    <>
      <section>
        <h1>AllMeetups page</h1>
        <MeetupList meetups={ fakeData }/>
      </section>
    </>
  )
}

export default AllMeetups
