import Etudiant from "../02/Etudiant"
import Bienvenue from "../02/Bienvenue";


interface Person {
    name: string;
    prenom: string
}

function Transform(valeur: Person, index: number) {
    return(
        <Bienvenue nom={valeur.name} key={index} prenom={valeur.prenom}/>
    )
}

export default function App03() {
    
    const personne = [
        {name: "Yann", prenom: "OUAFETE"},
        {name: "Juvence" , prenom: "OUAFETE"},
        {name: "Alice" , prenom: "Deninga"}
    ]
     
    const WelcomePersonne = personne.map(Transform) 


    return (
        <div>
            <h1>App03</h1>
            <h2>Affichage avec map</h2>
            {WelcomePersonne}
            
        </div>
    )
}