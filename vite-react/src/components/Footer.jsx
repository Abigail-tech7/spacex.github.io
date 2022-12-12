import React from 'react';

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='noteCotainer'>
            <i class='bx bx-info-circle'></i>
            <p>You cannot book a one way ticket. <br />
            The ticket price includes a round-trip flight.</p>
            </div>
           <button>Next step</button>
        </footer>
    )
}