import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector
} from "react-icons/fc";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-scroll";
import {IoMdClose} from "react-icons/io";


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    }


    const handleMenuClick = () => {
        setOpen(false);
    }
    return (
        <>
            <div className="mobile-nav block md:hidden w-full fixed top-0 z-[9999] overflow-hidden">
                <div className="mobile-nav-header flex items-center h-[50px] w-full bg-[#1e1e1e] p-2 ">
                    {open ? (
                        <IoMdClose className="mobile-nav-icon text-white cursor-pointer" size={30} onClick={handleOpen}/>
                    ): (
                        <GiHamburgerMenu className="mobile-nav-icon text-white cursor-pointer" size={30} onClick={handleOpen}/>
                    )
                    }
                    <span className="mobile-nav-title text-[#f29f67] font-bold capitalize text-xl ml-5">My Portfolio App</span>
                </div>

                {/*mobile menu */}

                {
                    open && (
                        <>
                            <div className="mobile-nav-menu">
                                <div className="nav-items rounded-br-xl flex flex-col gap-5 w-[200px] overflow-hidden h-auto bg-[#1e1e1e] px-2.5 py-2.5 text-white">
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcHome/>  Home
                                        </Link>

                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcAbout/>  About
                                        </Link>
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcReadingEbook/>  Education
                                        </Link>
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="tech-stack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcBiotech/>  Tech Stack
                                        </Link>
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcVideoProjector/>  Projects
                                        </Link>
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="work" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcPortraitMode />Work Experience
                                        </Link>
                                        <Link className="nav-link pl-6 flex items-center gap-3 cursor-pointer" to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                                <FcBusinessContact/> Contact
                                        </Link>
                                </div>
                            </div>
                        </>
                    )
                }

           </div>
        </>
    );
};

export default MobileNav;