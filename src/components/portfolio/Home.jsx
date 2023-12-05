import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';


const Home = () => {
    return (
        <>
            {/* Home Head*/}

            <div id="home" className="w-full pl-9 pt-7 md:pt-0 sm:pl-20">
                <div className="title-content mt-5 text-white pt-6 pb-3 ">
                    <h2 className="text-lg text-semibold">Hi 👋 I'm a</h2>
                    <h1 className="text-[#e0b50f] text-2xl sm:text-3xl font-bold pt-3 pb-5">
                        <Typewriter
                            options={{
                                strings: ['Fullstack Developer!', 'Mern Stack Developer!', 'Web Application Developer!', 'Programmer!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <Fade bottom>
                <div className="home-buttons pb-12">
                    <button className="w-[160px] bg-[#3b8ff3] px-4 py-2 font-bold text-white mr-4 rounded-md hover:bg-white hover:text-[#3b8ff3] hover:w-[180px] duration-500">Hire Me</button>
                    <button className="bg-[#f29f67] px-4 py-2 font-bold text-white rounded-md hover:text-[#f29f67] hover:bg-white duration-500">My Resume</button>
                </div>
                </Fade>

            </div>
            {/* Home Head*/}
        </>
    );
};

export default Home;