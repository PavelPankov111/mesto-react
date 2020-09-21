import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props){
    const {onClose, isOpen} = props

    function handleInputChange(evt){

    }

    return(
    <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isOpen} close={onClose} onSubmit={}>
        <div className="popup__inputs">
            
        <input type="text" autoComplete="off" id="user-name" name="profileName" className="popup__input" placeholder="Имя"  required ="2" maxLength="40" onChange={handleInputChange} />
        <span id="user-name-error" className="error"></span>

        <input type="text" autoComplete="off" id="about-user" name="info" className="popup__input" placeholder="О себе"  required ="2" maxLength="200" onChange={handleInputChange}/>
        <span id="about-user-error" className="error"></span>
    </div>    
    </PopupWithForm>
    )
}

export default EditProfilePopup;