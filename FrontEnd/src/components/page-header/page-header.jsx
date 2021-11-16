import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import './page-header.scss';
import 'typeface-roboto';


class PageHeader extends Component 
{
        render() {
            return (
                <header className="header row center">

                    <div className="logo">
                    <img src={logo} alt=""/>
                        <div>
                            <div className="address-text">ADDRESS</div>
                            <div className="address-text address-book">BOOK</div>
                        </div>
                    </div>

                </header>
            )
        }
}

export default PageHeader;



