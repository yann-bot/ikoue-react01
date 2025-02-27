
import { useState } from 'react'

export default function App(){

    const [chiffre, setChiffre] = useState(100)
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChiffre(Number(event.target.value));
    }

    return(
        <div className='flex flex-col'>
            <h1 className="ml-3">Formulaire</h1>
            <div className='m-3'>
                Chiffre:
                <input className="w-50 border " value={chiffre} onChange={handleChange} />
            </div>
            <div>
                {chiffre * 2}
            </div>
           
            
        </div>
    )
}