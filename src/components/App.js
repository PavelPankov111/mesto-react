import React, { useCallback } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../pages/index.css'
import ImagePopup from './ImagePopup'
import {api} from '../utils/Api';
import Card from './Card'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import DeletePopup from './DeletePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

function App() {
const popupDeletSubmitButton = document.querySelector('.popup-delete__button')
const popupPluseButton = document.querySelector('.popup-pluse__button')
const popupAvatarButton = document.querySelector('.popup-avatar__button')
const popupButton = document.querySelector('.popup__button')

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
const [currentUser, setCurrentUser] = React.useState({
  name: '',
  avatar: '',
  about: '',
  _id: ''
});

React.useEffect(() =>{ 
  api.getUserInfo()
  .then( res =>{
    setCurrentUser(res)
  })
  .catch((err) => {
    console.log(err); 
});     
}, [])

const handleEditProfileClick = useCallback(()=>{
  setIsEditProfilePopupOpen(true)
}, [isEditProfilePopupOpen]) 

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
  setIsPopupDeleteOpen(false)
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

  const [cards, setCards] = React.useState([]);

  React.useEffect( () =>{
  api.getInitialCards()
  .then((data)=>{
    setCards(data)
  })
  .catch((err) => {
    console.log(err); 
  });     
  }, [])

  function handleClickLike(props) {
  const isLiked = props.likes.some(i => i._id === currentUser._id);

    if(!isLiked){
      api.setLike(props._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === props._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err); 
      });  
    } else {
      api.removeLike(props._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === props._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err); 
      });  
    }
  }

  const [isPopupDeleteOpen, setIsPopupDeleteOpen] = React.useState(false)
  const [cardDelete, setCardDelete] = React.useState([])

  function handleDeleteItem(item){
    setCardDelete(item)
    handleDeleteOpen()
  }

  function handleDeleteOpen(){
    setIsPopupDeleteOpen(true)
  }
 
  function handleDeleteCard(evt){
  evt.preventDefault()
  popupDeletSubmitButton.textContent= 'Удаление...'
  api.deleteCard(cardDelete._id)
  .then(() =>{
    const newCards = cards.filter(function(c){
      popupDeletSubmitButton.textContent= 'Да'
      return c._id !== cardDelete._id;
    })
    setIsPopupDeleteOpen(false)
    setCards(newCards)
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  function handleUpdateUser(item) {
    popupButton.textContent="Сохранение..."
    api.changeUserInfo(item)
    .then( (obj) =>{
      setCurrentUser(obj)
      setIsEditProfilePopupOpen(false)
      popupButton.textContent="Сохранить"
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  function handleUpdateAvatar(obj){
    popupAvatarButton.textContent="Сохранение..."
    api.changeAvatar(obj)
    .then((res)=>{
      setCurrentUser(res)
      setIsEditAvatarOpen(false)
      popupAvatarButton.textContent="Сохранить"
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  function handleAddPlaceSubmit(item){
    popupPluseButton.textContent="Сохранение..."
    api.addCard(item)
    .then((res)=>{
      setCards([res, ...cards]); 
      setIsAddPlaceOpen(false)
      popupPluseButton.textContent="Сохранить"
    })
    .catch((err) => {
      console.log(err); 
    }); 
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <DeletePopup title="Вы уверенны?" namePopup="-delete" titleButton="Да" isOpen={isPopupDeleteOpen} close={closeAllPopups} handleSubmit={handleDeleteCard}/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} > 
      </Main>
      <section className="elements">
        {cards.map(({ ...whatever}) => <Card {...whatever} key={whatever._id} onCardDelete={() => handleDeleteItem(whatever)} onCardClick={handleCardClick} onClickLike={() => {handleClickLike(whatever)}}  /> )}
      </section>
      <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPlaceOpen} close={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarOpen} close={closeAllPopups} />
      <ImagePopup  url={selectedCard.url} title={selectedCard.title} isOpen={isImagePopupOpen} onClose={closeAllPopups}>
      </ImagePopup>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
