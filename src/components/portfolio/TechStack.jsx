import {TechList} from "../../data/TeckList.js";
import Fade from 'react-reveal/Fade';


const TechStack = () => {
    return (
        <>
            {/*Tech Stack*/}
            <div id="tech-stack" className="px-9 md:px-14 min-[992px]:px-20 bg-white py-8">
                <div className="">
                    <h2 className="text-center font-bold text-2xl md:text-3xl uppercase text-[#138781] mb-2">My Skills</h2>
                    <hr className="mx-auto w-[200px] md:w-[400px] text-[#138781] border border-bottom-[#138781]"/>
                    <p className="text-center py-6">
                        👉 including programming Language, frameworks, databases, front-end and back-end tools, and APIs
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 min-[992px]:grid-cols-3 py-6">
                        {
                            TechList.map((item,i)=>{
                                return (
                                    <>
                                        <Fade left>
                                        <div key={i.toString()} className="border cursor-pointer border-gray-700 px-10 py-3 flex gap-4 justify-center items-center hover:bg-[#138781] hover:text-white duration-500 rounded-lg">
                                            <item.icon size={25}/>
                                            <h1 className="text-2xl">
                                                {item.name}
                                            </h1>
                                        </div>
                                        </Fade>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/*Tech Stack Ended*/}
        </>
    );
};

export default TechStack;