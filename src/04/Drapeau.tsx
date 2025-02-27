import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

export default function Drapeau(){
    const [image, setImage] = useState("img/nigeria.png")
    const anglais = () => setImage("img/nigeria.png")
    
    const français = () => setImage("/img/cameroun.png")
    
    return(
      <div>
         <button className='btn btn-dark ms-3' onClick={anglais}> Anglais </button>
         <button className='btn btn-dark ms-3' onClick={français}> Français</button>
         <div><img src={image} width={200} height={200} className='border'/></div>
      </div>
    )
}