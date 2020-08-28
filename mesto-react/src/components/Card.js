import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) { 
    const {title, count, url, onCardClick, owner} = props; 
     
function handleClick() { 
    onCardClick(url , title) 
} 

const cardId = React.useContext(CurrentUserContext);
console.log(CurrentUserContext)


const isOwn = owner._id === cardId._id;
    
const cardDeleteButtonClassName = (
  `element__trashs ${isOwn ? 'element__trashs_visible' : ''}`
);  

return( 
<div className="element"> 
    <img className="element__image" alt={title}  src={url} onClick={handleClick}/> 
    <button className={cardDeleteButtonClassName} type="reset"> 
    </button> 
    <div className="element__title-like"> 
        <h2 className="element__title">{title}</h2> 
    <div className="element__like-counter"> 
    <button type="button" className="element__button-like"> 
    </button>          
    <p className="element__counter">{count}</p> 
    </div> 
    </div> 
    </div> 
)     
} 

export default Card;

