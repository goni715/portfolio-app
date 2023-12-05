import {useEffect, useState} from "react";
import {useSendMailMutation} from "../../redux/features/portfolio/portfolioApi.js";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sendMail, {isLoading, isSuccess}] = useSendMailMutation();


    useEffect(()=>{
        if(isSuccess){
            setName("");
            setEmail("")
            setMessage("");
        }
    },[isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMail({
            name, email, message
        })
    }





    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
                    <div>
                        <input value={name} onChange={(e)=>setName(e.target.value)} required className="w-full placeholder:text-[#bdbdbd] outline-none border border-gray-400 px-4 py-2 rounded-sm" type="text" placeholder="Enter your Name"/>
                    </div>
                    <div>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full placeholder:text-[#bdbdbd] outline-none border border-gray-400 px-4 py-2 rounded-sm" type="email"  placeholder="Enter Your Email Address"/>
                    </div>
                    <div>
                    <textarea
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                        className="w-full placeholder:text-[#bdbdbd] outline-none border border-gray-400 px-4 py-2 rounded-sm"
                        placeholder="Write your message"
                    />
                    </div>
                    <div className="">
                        <button disabled={isLoading} className="button placeholder:text-[#bdbdbd] w-full bg-[#1e1e2c] p-2.5 text-white rounded-md">
                            {isLoading ? "Sending..." : "SEND MESSAGE"}
                        </button>
                    </div>
            </form>
        </>
    );
};

export default ContactForm;