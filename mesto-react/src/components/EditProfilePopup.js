import React, {useState, useEffect, useCallback} from 'react';
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditProfilePopup(props){
    const [name, setName] =  React.useState('')
    const [description, setDescription] = React.useState('')

    const [editProfilePopupValues, setEditProfilePopupValues] = useState({
        name: "", 
        description: ""
    });

    const [editProfilePopupValidity, setEditProfilePopupValidity] = useState({
        nameValid: false,
        aboutValid: false
    });

    const handleInputValidation = useCallback(
        (e) => {
          const { name, value } = e.target;
          setEditProfilePopupValues((prevState) => ({ ...prevState, [name]: value }));
        },[editProfilePopupValues]
    );

    useEffect(
        function validateInputs() {
        const isUserNameFilled = editProfilePopupValues.name.length > 2;
        const isUserNameValid = isUserNameFilled;

        const isDescriptionFilled = editProfilePopupValues.description.length > 2;
        const isDescriptionValid = isDescriptionFilled;

        setEditProfilePopupValidity(() => ({
            nameValid: isUserNameValid,
            aboutValid: isDescriptionValid
        }));
        },
        [editProfilePopupValues, setEditProfilePopupValidity]
    );


    const { nameValid, aboutValid } = editProfilePopupValidity;

    const isSubmitDisabled = !nameValid || !aboutValid;

    const handleDisableButton = (
        `${isSubmitDisabled ? 'popup__button_disabled' : ''}`
    )

    const currentUser = React.useContext(CurrentUserContext);
    
    const {onClose, isOpen, onUpdateUser} = props
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function handleInputChange(evt){
        evt.preventDefault()
        onUpdateUser({
            name , 
            about: description
        });
        handleInputValidation()
    }

    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleChangeDescription(e){
        setDescription(e.target.value)
    }
    return(
    <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isOpen} close={onClose} onSubmit={handleInputChange} disabled={isSubmitDisabled} onDisabled={handleDisableButton}>
        <div className="popup__inputs">
        <input type="text" autoComplete="off" id="user-name" value={name}   name="profileName" className="popup__input" placeholder="Имя"  required ="2" maxLength="40" onChange={handleChangeName}  />
        <span id="user-name-error" className="error"></span>
        <input type="text" autoComplete="off" id="about-user"  value={description} name="info" className="popup__input" placeholder="О себе"  required ="2" maxLength="200" onChange={handleChangeDescription} />
        <span id="about-user-error" className="error"></span>
    </div>    
    </PopupWithForm>
    )
}

export default EditProfilePopup;