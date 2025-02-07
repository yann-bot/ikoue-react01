
interface Props{
    lang?: string
    nom: string;
    prenom: string;
    
}

export default function Bienvenue(props: Props){
    const {lang, nom, prenom} = props;
    if(lang === 'en'){
        return(
            <div>
                Welcome {nom} {prenom}
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
            Bienvenue {nom} {prenom}
        </div>
    );
    

}