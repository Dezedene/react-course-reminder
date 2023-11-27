import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'


function Todo(props) {
  const [modalIsOPen, setModalIsOpen] = useState(false)

  function deleteHandler () {
    setModalIsOpen(true)
  }

  function closeModalHandler () {
    setModalIsOpen(false)
  }

  return(
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">Delete</button>
      </div>
      { modalIsOPen ? <Modal onCancel={ closeModalHandler } onConfirm={ closeModalHandler }/> : null }
      { modalIsOPen ? <Backdrop onCancel={ closeModalHandler }/> : null }
    </div>
  )
}

export default Todo