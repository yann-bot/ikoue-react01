import { useState } from "react";       
import { LuLoaderCircle } from "react-icons/lu";

const myForm = () => {

    const [formData, setFormData] = useState({email: "", subject: "", message: ""})
    const [submit, setSubmit] = useState(false)
    const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, email: e.target.value})
    }
    const handleChangeSujet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, subject: e.target.value})
    }
    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, message: e.target.value})
    }


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmit(true)
    console.log(formData)
    setTimeout(() => {
    setSubmit(false)
    }, 5000)
}
    return(
        <div className=" flex justify-center items-center h-{500px} p-10">
            <form action="" className=" rounded-md bg-gray-400 flex flex-col gap-5 p-10 " onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                    <label htmlFor="mail">Addressees *</label>
                    <input className="border bg-gray-300  p-2 rounded-md" 
                    type="email" 
                    placeholder="contact@gmail.com"
                    onChange={handleChangeTo}/> 
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject">Object *</label>
                    <input className="border bg-gray-300 p-2 rounded-md" 
                    type="mail" 
                    placeholder="object" 
                    onChange={handleChangeSujet}/> 
                </div>
                <div className="flex flex-col">
                    <label className="" htmlFor="mail">Message *</label>
                    <textarea  className="border  bg-gray-300 p-2 rounded-md" 
                    name="message" 
                    placeholder="your message"
                    onChange={handleChangeMessage} ></textarea>
                </div>
                <div className="flex gap-5">
                   <button 
                    className="border border-black p-[2px] w-{20px} rounded-[20px] w-[80px] bg-gray-200  shadow-stone-900 flex justify-center" 
                    type="submit"
                    disabled={submit}>  {submit ? <LuLoaderCircle className="animate-spin  self-center "/> : "Submit"}</button>
                   <button className="" type="reset">Reset</button>
                </div>
                
            </form>

        </div>
    )
}

export default myForm;