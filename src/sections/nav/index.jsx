import React from 'react'

// components

// styles
import { Wrapper } from './style'

// Assets
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import { ReactComponent as CartIcon } from '../../assets/images/shopping-cart.svg'

const Nav = () => (
    <Wrapper>
        <ul className="nav-group">
            <li>Shop</li>
            <li>About</li>
            <li>Press</li>
        </ul>
        <span className="brand-name">PSTUDIO</span>
        <div className="right">
            <div className="search-input-container">
                <input className="search-input" type="text" placeholder="Search" />
                <SearchIcon />
            </div>
            <CartIcon />
        </div>
    </Wrapper>
)

export default Nav
