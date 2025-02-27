import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    
import { useState } from 'react';




export default function Pays(){
    const [capital, setCapital] =  useState("Bangui")
    return(
        <div>
            <button className='btn btn-dark ms-4' onClick={() => setCapital("Bangui")}> RCA </button>
            <button className='btn btn-dark ms-3' onClick={() => setCapital("Brazzaville")}> CONGO</button> 
            <button className='btn btn-dark ms-4' onClick={() => setCapital("Kinshasa")}> RDC</button>
            <button className='btn btn-dark ms-3' onClick={() => setCapital("Kigali")}> RWANDA </button>
            <button className='btn btn-dark ms-3' onClick={() => setCapital("Ouagadougou")}> BURKINA FASO </button>  
            <p className='ms-3 mt-3'>Capital: {capital}</p>
        </div>
    )
}
