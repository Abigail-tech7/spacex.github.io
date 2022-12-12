import React from 'react';

export default function Navbar(){
    return(
        <header>
            <nav className='nav-bar'>
                <div className='nav-container'>
                <div className="logo">Spacex</div>
                <ul className='nav-links showLinks'>
                    <li><a href="#">Falcon 9</a> </li>
                    <li><a href="#">Falcon Heavy</a> </li>
                    <li><a href="#">Dragon</a> </li>
                    <li><a href="#">Starship</a> </li>
                    <li><a href="#">Rideshare</a> </li>
                </ul>
                </div>
                
                <button className='requestBtn'>Request a flight</button>
            </nav>
        </header>
    )
}