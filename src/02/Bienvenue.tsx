
interface Props{
    lang?: string
    nom: string;
    prenom?: string;
    
}

export default function Bienvenue(props: Props){
    const {lang, nom, prenom} = props;
    if(lang === 'en'){
        return(
            <div>
                Welcome <strong>{nom} {prenom}</strong>
            </div>
        );
    }
    if(lang== 'es'){
        return(
            <div>
                Bienvenido {nom} {prenom}
            </div>
        );
    }
    return(
        <div>
              Bienvenue <strong>{nom} {prenom}</strong>
        </div>
    );
    

}