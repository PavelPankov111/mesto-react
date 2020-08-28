import React from 'react';
import profileVectorButton from '../images/vector1.svg'
import profileVectorAdd from '../images/vector2.svg'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import {api} from '../utils/Api';

function Main(props){
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    avatar: '',
    about: ''
  });
console.log(currentUser)
React.useEffect(() =>{ 
  api.getUserInfo()
  .then( res =>{
    setCurrentUser(res)
  })
  .catch((err) => {
    console.log(err); 
});     
}, [])


return(
<CurrentUserContext.Provider value={currentUser}>
<main>
    <section className="profile">
    <div className="profile__avatar-info">
    <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
    <img name="avatar" className="profile__avatar" alt="Здесь должна быть аватарка" src={currentUser.avatar}  />
    </div>
    <div className="profile__info">
    <div className="profile__button">
    <h1 name="name" className="profile__title">{currentUser.name}</h1>
    <button type="button" className="profile__edit-button" title="Редактировать">
    <img className="profile__vector-button" src={profileVectorButton} alt="карандашек" onClick={props.onEditProfile} />
    </button>
    </div>
    <p name="about" className="profile__subtitle">{currentUser.about}</p>
    </div>
    </div>
    <button type="button" className="profile__button-add" title="Добавить" onClick={props.onAddPlace}>
    <img className="profile__vector-add" src={profileVectorAdd} alt="плюсик" />
    </button>
    </section>
    <div className="loading"></div>
</main>
</CurrentUserContext.Provider>
)
}

export default Main;