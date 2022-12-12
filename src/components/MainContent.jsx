import React from 'react'
import ReturnAndDeparture from './ReturnAndDeparture'
export default function Main(){
    return(
        <main>
            <p className='backContain'><a className='backLink' href="#"><i class='bx bx-arrow-back'></i> Back</a></p>
            <ReturnAndDeparture />
        </main>
    )
}