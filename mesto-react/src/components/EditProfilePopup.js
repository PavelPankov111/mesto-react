import React, {useState, useEffect, useCallback} from 'react';
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditProfilePopup(props){
    // const [editProfilePopupValues, setEditProfilePopupValues] = useState({
    //     profileName: "",
    //     info: ""
    // });

    // const [editProfilePopupValidity, setEditProfilePopupValidity] = useState({
    //     profileNameValid: false,
    //     infoValid: false
    // });

    // const handleInputValidation = useCallback(
    //     (e) => {
    //       const { name, value } = e.target;
    //       setEditProfilePopupValues((prevState) => ({ ...prevState, [name]: value }));
    //     },[editProfilePopupValues]
    // );

    // useEffect(
    //     function validateInputs() {
    //     const isUserNameFilled = editProfilePopupValues.profileName.length > 2;
    //     const isUserNameValid = isUserNameFilled;

    //     const isDescriptionFilled = editProfilePopupValues.info.length > 2;
    //     const isDescriptionValid = isDescriptionFilled;

    //     setEditProfilePopupValidity(() => ({
    //         profileNameValid: isUserNameValid,
    //         infoValid: isDescriptionValid
    //     }));
    //     },
    //     [editProfilePopupValues, setEditProfilePopupValidity]
    // );

    // const { profileName, info } = editProfilePopupValues;

    // const { profileNameValid, infoValid } = editProfilePopupValidity;

    // const isSubmitDisabled = !profileNameValid || !infoValid;

    // const handleDisableButton = (
    //     `${isSubmitDisabled ? 'popup__button_disabled' : ''}`
    // )

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
        onUpdateUser({
            name , 
            about: description
        });
    }

    function handleChangeInputs(e){
        setName(e.target.value)
        setDescription(e.target.value)

    }


    // disabled={isSubmitDisabled} onDisabled={handleDisableButton}
    return(
    <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isOpen} close={onClose} onSubmit={handleInputChange} >
        <div className="popup__inputs">
        {/* onChange={handleInputValidation} */}
        <input type="text" autoComplete="off" id="user-name" value={name}   name="profileName" className="popup__input" placeholder="Имя"  required ="2" maxLength="40" onChange={handleInputValidation}  />
        <span id="user-name-error" className="error"></span>
        {/* onChange={handleInputValidation} */}
        <input type="text" autoComplete="off" id="about-user"  value={description} name="info" className="popup__input" placeholder="О себе"  required ="2" maxLength="200" onChange={handleInputValidation} />
        <span id="about-user-error" className="error"></span>
    </div>    
    </PopupWithForm>
    )
}

export default EditProfilePopup;