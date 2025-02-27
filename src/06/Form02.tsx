import { useState } from "react"



export default function Form02(){

    const [destinataire, setDestinataire] = useState("")
    const [sujet, setSujet] = useState("")
    const [message, setMessage] = useState("")
    
    const handleDestinaire = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestinataire(event.target.value);
    }
    const handleSujet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSujet(event.target.value);
    }

    const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }
    const effacer = () => {
        setDestinataire("");
        setMessage("");
        setSujet("");   
    }
    const envoyer = () => {
        alert("Votre message a été envoyé");
        effacer()
    }
    return(
        <div className=" ml-100 mt-10">
        <form action="" onSubmit={envoyer} className="flex flex-col space-y-2">
           
            <div className="flex flex-col">
                <label htmlFor="destinataire">Destinaire *</label>
                <input type="email" 
                       required name="destinataire" 
                       id="destinataire"  
                       placeholder="contact@gmail.com"
                       className="p-1 w-[200px] border" 
                       value={destinataire} 
                       onChange={handleDestinaire}/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="sujet">Sujet du message *</label>
                <input type="text"  required name="sujet" id="sujet" value={sujet} placeholder="Sujet du message"className="p-1 w-[200px] border" onChange={handleSujet}/>
            </div>

            <div className="flex flex-col" >
                <label htmlFor="message">Message *</label>
                <textarea name="message" required id="message"  value={message} placeholder="Votre message"cols={50} rows={4} className=" p-1 w-[200px] border" onChange={handleMessage}></textarea>
            </div>

            <div className="flex space-x-2 ">
               <button type="submit" className="bg-black text-white p-[5px] rounded-md ">Envoyer</button>
                <button type="reset" onClick={effacer} className="text-gray-400" >Effacer</button>
            </div>
           
        </form>
           
        </div>
    )
}