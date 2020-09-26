import React from 'react';
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditProfilePopup(props){
    console.log("w[rokfoprf")
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] =  React.useState('')
    const [description, setDescription] = React.useState('')
    const {onClose, isOpen, onUpdateUser} = props
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function handleInputChange(evt){
        evt.preventDefault()
        console.log(name)
        console.log(description)

        onUpdateUser({
            name , 
            about: description
        });
    }

    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleChangeDescription(e){
        setDescription(e.target.value)
    }

    return(
    <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isOpen} close={onClose} onSubmit={handleInputChange}>
        <div className="popup__inputs">
            
        <input type="text" autoComplete="off" id="user-name" name="profileName" className="popup__input" placeholder="Имя"  required ="2" maxLength="40" onChange={handleChangeName} />
        <span id="user-name-error" className="error"></span>

        <input type="text" autoComplete="off" id="about-user"  name="info" className="popup__input" placeholder="О себе"  required ="2" maxLength="200" onChange={handleChangeDescription}/>
        <span id="about-user-error" className="error"></span>
    </div>    
    </PopupWithForm>
    )
}

export default EditProfilePopup;