import React from 'react';

function Card(props) {

function handleClick() {
    onCardClick( props.url, props.title);
    
}
    
return(
<div className="element">
    <img className="element__image" src={props.url} onClick={handleClick}/>
    <button className="element__trashs" type="reset">
    </button>
    <div className="element__title-like">
        <h2 className="element__title">{props.title}</h2>
    <div className="element__like-counter">
    <button type="button" className="element__button-like">
    </button>         
    <p className="element__counter">{props.count}</p>
    </div>
    </div>
    </div>
)    
}

export default Card;