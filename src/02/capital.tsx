
interface Props{
    pays: string;
    Capital: string;
}


export default  function Capital(props: Props){
    return(
           <div>
              La capital de {props.pays} est {props.Capital}
           </div>
    )
}