import logo from '../../assets/image/logo.svg';
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <>
            <nav className="py-5 bg-white z-[9999] hidden md:block fixed w-full top-0 border border-gray-100">
                <div className="container px-4 md:px-12 md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="" className="flex items-center">
                            <img src={logo} alt="logo" className="h-10 mr-3"/>
                            <span className="text-2xl text-gray-900 font-bold">Hales</span>
                        </a>
                        {/*<span className="block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden">*/}
                        {/*    <IoMdMenu size={25}/>*/}
                        {/*</span>*/}
                    </div>
                    <ul className="p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100">
                        <Link className="md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="home" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Home</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="about" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >About</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="education" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Education</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Skills</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Projects</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="work" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Work Experience</span>
                        </Link>
                        <Link className="my-6 md:my-0 cursor-pointer text-gray-900 hover:text-indigo-600" to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                            <span className="font-medium duration-500" >Contact</span>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;