import Capital  from './capital';
import Etudiant  from './Etudiant';
import Bienvenue  from './Bienvenue';

export default function App02(){
    
    return(
        <div>
            <h1>Capital</h1>
              <Capital pays='France' Capital='Paris' />

            <h1>Etudiant</h1>
              <Etudiant nom='OUAFETE' prenom='Yann' numero='123456' />

            <h1>Bienvenue</h1>
              <Bienvenue lang='en' nom='Yann' prenom='OUAFETE' />
              <Bienvenue lang='fr' nom='Juvence' prenom='OUAFETE' />
              <Bienvenue lang='es' nom='Alice' prenom='Deninga' />
        </div>
      
    );
}