import React from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
import {useState} from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    function openModal() {
      setIsOpen(true);
    }
  

  
    function closeModal() {
      setIsOpen(false);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const newMovie = {
        id:Math.random(),
        name,
        date,
        rating,
        image,

      }
      add(newMovie)
      closeModal()
    }
    const handleRating = (x)=> setRating(x)
  return (
    <div>
         <button className='btn-add'     onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
        <form>
            <label onSubmit={handleSubmit}> Name </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label> Date </label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <label> Rating </label>
            <StarRating handleRating={handleRating} rating={rating}/>
            <label> Poster </label>
            <input type="url" value={image}  onChange={(e)=>setImage(e.target.value)}/>
            <button>Confirm</button>
            <button>Cancel</button>
            
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie