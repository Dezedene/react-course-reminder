import MeetupItem from './MeetupItem'

import meetupListStyle from './MeetupList.module.css'

const MeetupList = (props) => {
  return (
    <ul className = { meetupListStyle.list }>
      { props.meetups.map((meetup, i) => 
        <MeetupItem
          key={i}
          id={ meetup.id }
          image={ meetup.image }
          title={ meetup.title }
          adress={ meetup.adress }
          description={ meetup.description }
        />
      ) }
    </ul>
  )
}

export default MeetupList