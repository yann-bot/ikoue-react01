
interface Props{
    nom: string;
    prenom: string;
    numero: string;                             
}


export default  function Etudiant(props: Props){
    const {nom, prenom, numero} = props;
    return(
           <ul>
               Nom: <strong>{nom}</strong> <br />
               Prenom:<strong> {prenom}</strong> <br />
               Numero: <strong>{numero}</strong>
           </ul>
    )
}