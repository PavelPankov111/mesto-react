import React from 'react';
import profileVectorButton from '../images/vector1.svg'
import profileVectorAdd from '../images/vector2.svg'
import Api from './Api';
import popupDeleteVector from '../images/close__icon.svg';
import Card from './Card'


export const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-13',
    headers: {
    'Content-Type': 'application/json',
    authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f',
    }
})

function Main(props){
  const [userInfo, setUserInfo] = React.useState(false)
  const [userDescription, setUserDescription] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState();

  api.getUserInfo()
  .then( res =>{
    setUserInfo(res.name)
    setUserDescription(res.about)
    setUserAvatar(res.avatar)
  })
  .catch( err =>{
    return Promise.reject(err.message)
  })

  const [cards, setCards] = React.useState([]);
  React.useEffect( () =>{
  api.getInitialCards()
  .then( (data) =>{
    setCards(
    data.map((item) =>({
        id: item._id,
        url: item.link,
        title: item.name,
        count: item.likes.length,
    }))
    )
  })
 }, [])

  return(
    <main>
    <section className="profile">
    <div className="profile__avatar-info">
    <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
    <img name="avatar" className="profile__avatar" alt="Здесь должна быть аватарка" src={userAvatar}  />
    </div>
    <div className="profile__info">
    <div className="profile__button">
    <h1 name="name" className="profile__title">{userInfo}</h1>
    <button type="button" className="profile__edit-button" title="Редактировать">
    <img className="profile__vector-button" src={profileVectorButton} alt="карандашек" onClick={props.onEditProfile} />
    </button>
    </div>
    <p name="about" className="profile__subtitle">{userDescription}</p>
    </div>
    </div>
    <button type="button" className="profile__button-add" title="Добавить" onClick={props.onAddPlace}>
    <img className="profile__vector-add" src={profileVectorAdd} alt="плюсик" />
    </button>
    </section>
    <div className="loading"></div>
    <section className="elements">
    {cards.map(({ id, ...whatever }) => <Card key={id} {...whatever} onCardClick={props.onCardImage}/> )}
    </section>
    {props.children}
      
    {/* <div className="popup">
    <form name="OpenForm" method="get" action="#" className="form popup__container popup__form" novalidate>
        <button type="reset" className="popup__vector-button">
        <img className="popup__vector" src={popupVector} alt="кнопка закрытия" />
        </button>
        <div className="popup__content">
            <h3 className="popup__title">Редактировать профиль</h3>
            <div className="popup__inputs">
               
            <input type="text" autocomplete="off" id="user-name" name="profileName" className="popup__input" placeholder="Имя"  required minlength="2" maxlength="40" />
            <span id="user-name-error" className="error"></span>

            <input type="text" autocomplete="off" id="about-user" name="info" className="popup__input" placeholder="О себе"  required minlength="2" maxlength="200" />
            <span id="about-user-error" className="error"></span>

            
        </div>
       <button type="submit" className="popup__button popup__button_disabled">
        Сохранить
       </button>
       </div>
    </form>
</div>
<div className="popup-pluse popup">
<form id="popupPluse" name="pluseForm" className="form popup-pluse__container popup__form" novalidate>
    <button type="reset" className="popup__vector-button">
        <img className="popup-pluse__vector" src={popupPluseVector} alt="кнопка закрытия" />
        </button>
        <div className="popup-pluse__content">
            <h3 className="popup-pluse__title">Новое место</h3>
            <div className="popup-pluse__inputs">
            <input type="text" autocomplete="off" id="name-card" name="name" className="popup-pluse__input popup__input" placeholder="Название" required minlength="1" maxlength="30" /> 

            <span id="name-card-error" className="error"></span>

            <input  type="url" autocomplete="off" id="link" name="link" className="popup__input  popup-pluse__input-link" placeholder="Ссылка на картинку" required /> 

            <span id="link-error" className="error"></span>
        </div>
        <button type="submit" className="popup__button popup-pluse__button popup__button_disabled"> 
           Создать
        </button>
        </div>
</form>
</div>
<div className="popup popup-avatar">
    <form id="popupAvatar" name="avatarForm" className="form popup__form popup-avatar__container" novalidate>
        <button type="reset" className="popup__vector-button">
            <img className="popup-avatar__vector" src={popupAvatarVector} alt="кнопка закрытия" />
        </button>
        <div className="popup-avatar__content">
        <h3 className="popup-avatar__title">Обновить аватар</h3>
        <input type="url" autocomplete="off" id="avatar-link" name="avatar-link" className="popup__input popup-avatar__input-link" placeholder="Ссылка на картинку" required /> 
        <span id="avatar-link-error" className="error"></span>
        <button type="submit" className="popup__button popup-avatar__button popup__button_disabled"> 
            Сохранить
         </button>
        </div>
    </form>
</div>
<div className="popup popup-delete">
    <form className="form popup__form popup-delete__container"> 
        <button type="reset" className="popup__vector-button">
            <img className="popup-delete__vector" src={popupDeleteVector} alt="кнопка закрытия" />
        </button>
        <div className="popup-delete__content">
            <h3 className="popup-delete__title">Вы уверены?</h3>
            <button type="submit" className="popup-delete__button"> 
                Да
            </button>
</div>
</form>
</div>
<template className="element-template">
<div className="element">
    <img className="element__image" />
<button className="element__trashs" type="reset">
 </button>
    <div className="element__title-like">
        <h2 className="element__title"></h2>
    <div className="element__like-counter">
        <button type="button" className="element__button-like">

        </button>         
        <p className="element__counter">0</p>
    </div>
    </div>
</div>
</template>
<div className="popup-element popup">
    <div className="popup__element-container">
    <img className="popup__element-image"  alt="" />
    <h2 className="popup__element-text"></h2> 
    <button type="reset" className="popup__vector-button">
        <img className="popup__vector-element" src={popupVectorElement} alt="кнопка закрытия" />
    </button>
</div>
</div> */}
</main>
)
}

export default Main;