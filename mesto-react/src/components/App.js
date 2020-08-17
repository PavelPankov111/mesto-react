import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../pages/index.css'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true)
} 

const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false)

function handleAddPlaceClick () {
  setIsAddPlaceOpen(true)
}

const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false)

function handleEditAvatarClick(){
  setIsEditAvatarOpen(true)
}

function closeAllPopups() {
  setIsEditProfilePopupOpen(false)
  setIsAddPlaceOpen(false)
  setIsEditAvatarOpen(false)
  setIsImagePopupOpen(false)
}

const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleCardClick(link, name) {
    setSelectedCard({
      title:name,
      url:link
    })
    setIsImagePopupOpen(true)
  }
  
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardImage={handleCardClick}> 
      </Main>
      <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isEditProfilePopupOpen} close={closeAllPopups}>
            <div className="popup__inputs">
               
            <input type="text" autocomplete="off" id="user-name" name="profileName" className="popup__input" placeholder="Имя"  required minlength="2" maxlength="40" />
            <span id="user-name-error" className="error"></span>

            <input type="text" autocomplete="off" id="about-user" name="info" className="popup__input" placeholder="О себе"  required minlength="2" maxlength="200" />
            <span id="about-user-error" className="error"></span>
        </div>    
        </PopupWithForm>
        <PopupWithForm title="Новое место" namePopup="-pluse" titleButton="Создать" isOpen={isAddPlaceOpen} close={closeAllPopups}>
      <div className="popup-pluse__inputs">
            <input type="text" autocomplete="off" id="name-card" name="name" className="popup-pluse__input popup__input" placeholder="Название" required minlength="1" maxlength="30" /> 

            <span id="name-card-error" className="error"></span>

            <input  type="url" autocomplete="off" id="link" name="link" className="popup__input  popup-pluse__input-link" placeholder="Ссылка на картинку" required /> 

            <span id="link-error" className="error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" namePopup="-avatar" titleButton="Сохранить" isOpen={isEditAvatarOpen} close={closeAllPopups}>
      <input type="url" autocomplete="off" id="avatar-link" name="avatar-link" className="popup__input popup-avatar__input-link" placeholder="Ссылка на картинку" required /> 
        <span id="avatar-link-error" className="error"></span>
      </PopupWithForm>
      <ImagePopup  url={selectedCard.url} title={selectedCard.title} isOpen={isImagePopupOpen} onClose={closeAllPopups}>
      </ImagePopup>
      <Footer />
    </div>
  );
}

export default App;

























