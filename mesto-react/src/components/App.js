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
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
} 

const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false)

function handleAddPlaceClick () {
  setIsAddPlaceOpen(!isAddPlaceOpen)
}

const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false)

function handleEditAvatarClick(){
  setIsEditAvatarOpen(!isEditAvatarOpen)
}

function closeAllPopups() {
  setIsEditProfilePopupOpen(false)
  setIsAddPlaceOpen(false)
  setIsEditAvatarOpen(false)
  setIsImagePopupOpen(false)
}

const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleCardClick(selectedCard) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(selectedCard)
  }
  
  
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}>
     
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
      <ImagePopup  url={selectedCard.link} title={selectedCard.name} isOpen={isImagePopupOpen} onClose={closeAllPopups}>
      </ImagePopup>
      </Main>
      
      <Footer />
    </div>
  );
}

export default App;

























// function App() {
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
//     false
//   );

//   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

//   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
//     false
//   );

//   const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

//   const [selectedCard, setSelectedCard] = React.useState();

//   function handleCardClick(selectedCard) {
//     setSelectedCard(selectedCard);
//     setIsImagePopupOpen(!isImagePopupOpen);
//   }

//   function handleEditAvatarClick() {
//     setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
//   }

//   function handleEditProfileClick() {
//     setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
//   }

//   function handleAddPlaceClick() {
//     setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
//   }

//   function closeAllPopups() {
//     setIsEditProfilePopupOpen(false);
//     setIsEditAvatarPopupOpen(false);
//     setIsAddPlacePopupOpen(false);
//     setIsImagePopupOpen(false);
//   }

//   return (
//     <div className="page">
//       <Header />
//       <Main
//         onEditAvatar={handleEditAvatarClick}
//         onEditProfile={handleEditProfileClick}
//         onAddPlace={handleAddPlaceClick}
//         onCardClick={handleCardClick}
//       />
//       <Footer />
//       <PopupWithForm
//         name="profile"
//         title="Редактировать профиль"
//         isOpen={isEditProfilePopupOpen}
//         onClose={closeAllPopups}
//       >
//         <fieldset className="form__set">
//           <label className="form__field">
//             <input
//               type="text"
//               className="form__input form__input_name"
//               id="name-input"
//               required
//               minLength="2"
//               maxLength="40"
//             />
//             <span className="form__input-error" id="name-input-error"></span>
//           </label>
//           <label className="form__field">
//             <input
//               type="text"
//               className="form__input form__input_description form__input_type_bottom"
//               id="description-input"
//               required
//               minLength="2"
//               maxLength="200"
//             />
//             <span
//               className="form__input-error"
//               id="description-input-error"
//             ></span>
//           </label>
//           <button
//             className={`form__submit-button form__submit-button_type_profile`}
//           >
//             Сохранить
//           </button>
//         </fieldset>
//       </PopupWithForm>
//       <PopupWithForm
//         name="place"
//         title="Новое место"
//         isOpen={isAddPlacePopupOpen}
//         onClose={closeAllPopups}
//       >
//         <fieldset className="form__set">
//           <label className="form__field">
//             <input
//               type="text"
//               className="form__input form__input_title"
//               id="title-input"
//               placeholder="Название"
//               required
//               minLength="1"
//               maxLength="30"
//             />
//             <span className="form__input-error" id="title-input-error"></span>
//           </label>
//           <label className="form__field">
//             <input
//               type="url"
//               className="form__input form__input_link"
//               id="link-input"
//               placeholder="Ссылка на картинку"
//               required
//             />
//             <span className="form__input-error" id="link-input-error"></span>
//           </label>
//           <button className="form__submit-button form__submit-button_type_place">
//             Создать
//           </button>
//         </fieldset>
//       </PopupWithForm>
//       <PopupWithForm
//         name="avatar"
//         title="Обновить аватар"
//         isOpen={isEditAvatarPopupOpen}
//         onClose={closeAllPopups}
//       >
//         <fieldset className="form__set">
//           <label className="form__field">
//             <input
//               type="url"
//               className="form__input form__input_avatar"
//               id="avatar-input"
//               placeholder="Ссылка на картинку"
//               required
//             />
//             <span className="form__input-error" id="avatar-input-error"></span>
//           </label>
//           <button className="form__submit-button form__submit-button_type_avatar">
//             Сохранить
//           </button>
//         </fieldset>
//       </PopupWithForm>
//       <PopupWithImage
//         name={selectedCard}
//         isOpen={isImagePopupOpen}
//         onClose={closeAllPopups}
//       />
//     </div>
//   );
// }







// function Main(props) {

//   const [userName, setUserName] = React.useState();
//   const [userDescription, setUserDescription] = React.useState();
//   const [userAvatar, setUserAvatar] = React.useState();

//   React.useEffect(() => {
//     api.getUserInfo().then((result) => {
//       setUserName(result.name);
//       setUserDescription(result.about);
//       setUserAvatar(result.avatar);
//     });
//   });

//   const [cards, setCards] = React.useState([]);

//   React.useEffect(() => {
//     api.getInitialCards().then((result) => {
//       setCards(result);
//     });
//   }, []);

//   return (
//     <main className="main">
//       <section className="profile">
//         <div className="profile__container">
//           <img
//             className="profile__image"
//             alt="Аватар вашего профиля"
//             onClick={props.onEditAvatar}
//             src={userAvatar}
//           />
//           <img className="profile__image-back" src={editButton} />
//         </div>
//         <div className="profile__streamer">
//           <div className="profile__info">
//             <h1 className="profile__author">{userName}</h1>
//             <button
//               type="button"
//               className="profile__edit-button"
//               onClick={props.onEditProfile}
//             ></button>
//           </div>
//           <p className="profile__description">{userDescription}</p>
//         </div>
//         <button
//           type="button"
//           className="profile__add-button"
//           onClick={props.onAddPlace}
//         ></button>
//       </section>
//       <section className="elements">
//         {cards.map((card) => (
//           <Card card={card}
//             onCardClick={props.onCardClick}
//             _id={card.id}
//             link={card.link}
//             name={card.name}
//             likes={card.likes.length}
//           />
//         ))}
//       </section>
//     </main>
//   );
// }





// function Card(props) {

//   function handleClick() {
//     props.onCardClick(props.card);
//   }


//   return ( 
//             <div className="element" key={props._id}>
//         <img className="element__image" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick} />
//         <div className="element__description">
//           <p className="element__heading">{props.name}</p>
//           <div className="element__like-container">
//             <button type="button" className="element__like-button"></button>
//             <p className="element__like-number">{props.likes}</p>
//           </div>
//         </div>
//         <button type="button" className="element__delete-button"></button>
//         </div>
//   );
// }





// function PopupWithImage(props) {

//   React.useEffect(() => {
//     function handleEscClose(evt) {
//       if (evt.key === "Escape") {
//         props.onClose();
//       }
//     }

//     function closeByClick(evt) {
//       if (evt.target.classList.contains("popup__overlay-black")) {
//         props.onClose();
//       }
//     }

//     document.addEventListener("keydown", handleEscClose);
//     document.addEventListener("click", closeByClick);

//     return () => {
//       document.removeEventListener("keydown", handleEscClose);
//       document.removeEventListener("click", closeByClick);
//     };
//   }, [props.isOpen]);

//   return (
// <>
//   <div className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`}>
//     <div className="popup__case">
//       <img className="popup__image" 
//       style={{ backgroundImage: `url(${props.card.link})` }}
//        />
//       <p className="popup__description">
//       {props.card.name}
//         </p>
//       <button
//         type="button"
//         className="popup__close-button popup__close-button_type_image"  onClick={props.onClose}
//       ></button>
//     </div>
//     <div className="popup__overlay-black popup__overlay-black_type_image"></div>
//   </div>
//   </>
//   );
// }