import React from 'react';
import headerLogo from '../images/vector.svg'

function Header() {
    return(
        <header className="header">
            <img className="header__logo" alt="Место Россия" src={headerLogo} />
        </header>
    )
}

export default Header;