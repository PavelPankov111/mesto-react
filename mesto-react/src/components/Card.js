import React from 'react';

function Card(props) {
const {title, count, url, onCardClick} = props;

function handleClick() {
    onCardClick(url , title)
}

return(
<div className="element">
    <img className="element__image" alt={title}  src={url} onClick={handleClick}/>
    <button className="element__trashs" type="reset">
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