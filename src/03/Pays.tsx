

interface  Props{
    nom: string,
    Capital: string,
    population: number,
    drapeau?:  string
        
}

function Transform(p: Props, index: number) {
    return( 
        <div key={index}> 
           <div>
            Pays:{p.nom} <br/>  
            Capital: {p.Capital}<br/> 
            Population: {p.population} <br/>
            drapeau: <img src={p.drapeau} />
           </div> <br/>
        </div>
    )

}




export default function Pays(){
    const Infopays = [ 
        {nom: "France",Capital: "Paris",population: 10000000, drapeau:""},
        {nom: "Centrafrique",Capital: "Bangui",population: 600000, drapeau: "drapeau2"},
        {nom: "RDC",Capital: "Kinshassa",population: 30000000, drapeau: "drapeau3"} 
    ]
    
    const listePays = Infopays.map(Transform)

    return(
           <div>
              {listePays}
           </div>
    )
}