import React, { Component } from 'react';
import shakespeare from './shakespeare.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
            <div className='header-content'>

                <img src={shakespeare} alt='shakespeare logo'/>
                <h1><span>S</span>hakespeare <span>r</span>eviews</h1>
            </div>
            </div>
        );
    }
}

export default Header;