import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector
} from "react-icons/fc";
import {Link} from "react-scroll";
import profile from '../../assets/image/goni.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const Sidebar = () => {
    return (
        <>
            {/*sidebar*/}
            <div className="side-bar hidden md:block bg-[#1e1e2c] h-screen w-[200px] z-[999] fixed p-5">
                <Zoom>
                    <div className="logo-image flex justify-center mt-3">
                        <img className="h-[130px] w-[130px] mx-auto rounded-full" src={profile} alt="profile" />
                    </div>
                </Zoom>
                <Fade left>
                    <div className="side-menu-items flex flex-col gap-6 pt-6">
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="home" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcHome/>
                            <span className="text-md font-bold ml-2">Home</span>
                        </Link>
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="about" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcAbout/>
                            <span className="text-md font-bold ml-2">About</span>
                        </Link>

                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="education" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcReadingEbook/>
                            <span className="text-md font-bold ml-2">Education</span>
                        </Link>
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBiotech/>
                            <span className="text-md font-bold ml-2">Tech Stack</span>
                        </Link>
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcVideoProjector/>
                            <span className="text-md font-bold ml-2">Projects</span>
                        </Link>
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="work" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcPortraitMode />
                            <span className="text-md font-bold ml-2">Work Experience</span>
                        </Link>
                        <Link className="nav-item text-white text-bold cursor-pointer flex items-center" to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBusinessContact/>
                            <span className="text-md font-bold ml-2">Contact</span>
                        </Link>

                    </div>
                </Fade>

            </div>
            {/*sidebar*/}

        </>
    );
};

export default Sidebar;