import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs";
import contact_pic from '../../assets/image/contact.jpg'
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import ContactForm from "./ContactForm.jsx";

const Contact = () => {
    return (
        <>
            <div id="contact" className="px-9 md:px-14 min-[992px]:px-20 bg-white py-8">
                <div className="contact-card grid gap-6 min-[992px]:grid-cols-2 py-6">
                    <div className="px-8 border-r border-[#e0e0e0] flex items-center">
                        <LightSpeed>
                            <img className="w-full h-auto mx-auto" src={contact_pic} alt="contact"/>
                        </LightSpeed>
                    </div>
                    <Rotate>
                        <div className="px-8">
                            <div className="flex items-center gap-4">
                                Contact With
                                <a href="https://github.com/goni715" target="_blank">
                                    <BsLinkedin color="blue" size={30} className="ms-2" />
                                </a>
                                <a href="https://github.com/goni715" target="_blank">
                                    <BsGithub color="black" size={30} className="ms-2" />
                                </a>

                                <a href="https://github.com/goni715" target="_blank">
                                    <BsFacebook color="blue" size={30} className="ms-2" />
                                </a>
                            </div>
                            <div className="flex items-center mt-5">
                                <div className="line w-[45%] h-[1px] bg-[#e0e0e0]" ></div>
                                <small className="or w-[10%] font-bold text-center">OR</small>
                                <div className="line w-[45%] h-[1px] bg-[#e0e0e0]" ></div>
                            </div>

                            {/*Contact Form*/}
                             <ContactForm/>
                            {/*Contact Form Ended*/}
                        </div>
                    </Rotate>
                </div>
            </div>
        </>
    );
};

export default Contact;