import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../pages/index.css'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import {api} from '../utils/Api';
import Card from './Card'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function App() {
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

  const [cards, setCards] = React.useState([]);
  React.useEffect( () =>{
  api.getInitialCards()
  .then( (data) =>{
    setCards(
    data.map((item) =>({
        _id: item._id,
        link: item.link,
        name: item.name,
        likes: item.likes,
        owner: item.owner
    }))
    )
  })
  .catch((err) => {
    console.log(err); 
  });     
  }, [])


  function handleClickLike(props) {
    console.log(props)

    const isLiked = props.likes.some(i => i._id === currentUser._id);
  
    if(!isLiked){
      console.log(props._id)
      console.log(props)

      api.setLike(props._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === props._id ? newCard : c);
        setCards(newCards);
      })
    } else {
      api.removeLike(props._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === props._id ? newCard : c);
        setCards(newCards);
      })
    }
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}> 
      </Main>
      <section className="elements">
        {cards.map(({ id, ...whatever }) => <Card key={id} onCardClick={handleCardClick} onClickLike={() => {handleClickLike(whatever)}} {...whatever}/> )}
     </section>
      <PopupWithForm title="Редактировать профиль" namePopup="" titleButton="Сохранить" isOpen={isEditProfilePopupOpen} close={closeAllPopups}>
            <div className="popup__inputs">
               
            <input type="text" autoComplete="off" id="user-name" name="profileName" className="popup__input" placeholder="Имя"  required ="2" maxLength="40" />
            <span id="user-name-error" className="error"></span>

            <input type="text" autoComplete="off" id="about-user" name="info" className="popup__input" placeholder="О себе"  required ="2" maxLength="200" />
            <span id="about-user-error" className="error"></span>
        </div>    
        </PopupWithForm>
        <PopupWithForm title="Новое место" namePopup="-pluse" titleButton="Создать" isOpen={isAddPlaceOpen} close={closeAllPopups}>
      <div className="popup-pluse__inputs">
            <input type="text" autoComplete="off" id="name-card" name="name" className="popup-pluse__input popup__input" placeholder="Название" required ="1" maxLength="30" /> 

            <span id="name-card-error" className="error"></span>

            <input  type="url" autoComplete="off" id="link" name="link" className="popup__input  popup-pluse__input-link" placeholder="Ссылка на картинку" required /> 

            <span id="link-error" className="error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" namePopup="-avatar" titleButton="Сохранить" isOpen={isEditAvatarOpen} close={closeAllPopups}>
      <input type="url" autoComplete="off" id="avatar-link" name="avatar-link" className="popup__input popup-avatar__input-link" placeholder="Ссылка на картинку" required /> 
        <span id="avatar-link-error" className="error"></span>
      </PopupWithForm>
      <ImagePopup  url={selectedCard.url} title={selectedCard.title} isOpen={isImagePopupOpen} onClose={closeAllPopups}>
      </ImagePopup>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

























