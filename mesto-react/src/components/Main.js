import React from 'react';
import profileVectorButton from '../images/vector1.svg'
import profileVectorAdd from '../images/vector2.svg'
import popupDeleteVector from '../images/close__icon.svg';
import Card from './Card'
import {api} from '../utils/Api';

function Main(props){
  const [userInfo, setUserInfo] = React.useState(false)
  const [userDescription, setUserDescription] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState();

React.useEffect(() =>{ 
  api.getUserInfo()
  .then( res =>{
    setUserInfo(res.name)
    setUserDescription(res.about)
    setUserAvatar(res.avatar)
  })
  .catch((err) => {
    console.log(err); 
});     
}, [])

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
  .catch((err) => {
    console.log(err); 
});     
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
</main>
)
}

export default Main;