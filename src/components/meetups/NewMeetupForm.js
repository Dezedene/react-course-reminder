import { useRef } from 'react'

import Card from './../userInterface/Card'
import NewMeetupFormStyle from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

function submitHandler(event) {
  event.preventDefault();
  const enteredTitle = titleInputRef.current.value;
  const enteredImage = imageInputRef.current.value;
  const enteredAddress = addressInputRef.current.value;
  const enteredDescription = descriptionInputRef.current.value;

  const meetupData = {
    title: enteredTitle,
    image: enteredImage,
    address: enteredAddress,
    description: enteredDescription
  }

  props.onAddMeetup(meetupData)
  console.log('🤖💬 ~ submitHandler ~ meetupData:', meetupData);
}


  return (
    <Card>
      <form className={NewMeetupFormStyle.form} onSubmit={ submitHandler }>

        <div className={NewMeetupFormStyle.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>

        <div className={NewMeetupFormStyle.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>

        <div className={NewMeetupFormStyle.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressInputRef}/>
        </div>

        <div className={NewMeetupFormStyle.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            id='description'
            required rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={ NewMeetupFormStyle.actions }>
          <button>Add Meetup</button>
        </div>

      </form>
    </Card>
  )
}

export default NewMeetupForm
