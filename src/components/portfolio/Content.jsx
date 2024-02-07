import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import TechStack from "./TechStack.jsx";
import AllProject from "./AllProject.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Content = () => {
    return (
        <>
            {/*Content*/}
            <div className="content pt-[100px] bg-black">


                <Home/>
                <About/>
                <Education/>
                <TechStack/>
                <AllProject/>
                {/*<WorkExperience/>*/}
                <Contact/>
                <Footer/>

            </div>
            {/*Content*/}
        </>
    );
};

export default Content;