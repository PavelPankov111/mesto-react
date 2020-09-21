import React from 'react';
import PopupWithForm from './PopupWithForm'

function DeletePopup(props) {
    const {title, namePopup, titleButton, isOpen, close} = props

    function handleDelete(event){
        event.preventDefault();
        props.onDeleteCard()
    }

    return(
    <PopupWithForm title={title} namePopup={namePopup} titleButton={titleButton} isOpen={isOpen} close={close} onSubmit={handleDelete} />
    )
}

export default DeletePopup