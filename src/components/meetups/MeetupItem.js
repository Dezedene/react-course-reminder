import Card from './../userInterface/Card'

import meetupItemStyle from './MeetupItem.module.css'

const MeetupItem = (props) => {
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
            <button>To favorites</button>
        </div>
        
      </Card>
    </li>
  )
}

export default MeetupItem