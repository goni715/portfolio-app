import ProjectCard from "./ProjectCard.jsx";
import {projects} from "../../data/Data.js";

const AllProject = () => {
    return (
        <>
            <div id="projects" className="px-9 md:px-14 min-[992px]:px-20 bg-white py-8">
                <div className="">
                    <h2 className="text-center font-bold text-2xl md:text-3xl uppercase text-[#138781] mb-2">
                        top recent projects
                    </h2>
                    <hr className="mx-auto w-[200px] md:w-[400px] text-[#138781] border border-bottom-[#138781]"/>
                    {/*<p className="text-center py-6">*/}
                    {/*    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a*/}
                    {/*    odit ab, eligendi cupiditate, minima quasi excepturi modi et quo*/}
                    {/*    delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum*/}
                    {/*    nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,*/}
                    {/*    voluptate qui et animi doloribus nulla eius molestiae unde tempore ad*/}
                    {/*</p>*/}

                    <div className="grid gap-10 sm:grid-cols-2 min-[992px]:grid-cols-3 mt-4 py-6">
                        {
                            projects?.map((item,i)=>{
                                return (
                                    <>
                                        <ProjectCard key={i.toString()} item={item}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProject;