import React from 'react';
import popupVector from '../images/close__icon.svg';

function PopupWithForm(props){
    return(
        <div className={`popup popup${props.namePopup} ${props.isOpen ? 'popup_opened' : ''} `}>
        <form onSubmit={props.onSubmit} name="OpenForm" method="get" action="#" className={`form popup${props.namePopup}__container popup__form`} noValidate>
        <button type="reset" className="popup__vector-button" onClick={props.close}>
        <img className={`popup${props.namePopup}__vector`} src={popupVector} alt="кнопка закрытия" />
        </button>
        <div className={`popup${props.namePopup}__content`}>
        <h3 className={`popup${props.namePopup}__title`}>{props.title}</h3>
        {props.children}
        <button disabled={props.disabled} type="submit" className={`${props.onDisabled} popup${props.namePopup}__button`}>
        {props.titleButton}
        </button>
        </div>
        </form>
    </div>
    )
}

export default PopupWithForm;