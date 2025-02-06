import './style.css'
import logo from './react.png'
export default function App01(){
    return(
        <div className='text'>
            <img src={logo} alt='react-logo' />
            Mon premier composant React
        </div>
    );
}