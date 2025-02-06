import Capital  from './capital';
import Etudiant  from './Etudiant';
import Bienvenue  from './Bienvenue';

export default function App02(){
    return(
        <div>
              
              <Bienvenue lang='en' nom='Yann' prenom='OUAFETE' />
              <Bienvenue lang='fr' nom='Juvence' prenom='OUAFETE' />
              <Bienvenue lang='es' nom='Alice' prenom='Deninga' />
             
        </div>
      
    );
}