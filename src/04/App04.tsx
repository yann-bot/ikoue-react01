import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';


export default function App04() {
    const [valeur, setValeur] = useState(0)
    
    const augmenter = () => {
        
        setValeur(valeur + 1);
    }

    const diminuer = () => 
        {
            if(valeur>0){
        setValeur(valeur - 1);
            }
    }

    return (
        <div>
            <h1 className='ms-2'>Valeur:{valeur}</h1>
            <button className='btn btn-dark ms-4' onClick={augmenter}> + </button>
            <button className='btn btn-dark ms-3' onClick={diminuer}> -- </button> 
        </div>
    )
}