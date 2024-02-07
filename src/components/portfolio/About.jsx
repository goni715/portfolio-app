import pic from '../../assets/image/goni.jpg';
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>

            <div id="about" className="flex px-9 flex-col w-full justify-center sm:flex-row sm:justify-start sm:items-start bg-white gap-6 md:gap-8 md:px-14 min-[992px]:px-20 py-8">
                <Jump>
                <div className="w-full sm:w-1/2">
                    <img className="rounded-lg" src={pic} alt="picture"/>
                </div>
                <div className="w-full sm:w-1/2">
                    <h1 className="text-center underline text-green-900 text-4xl font-bold mb-5">About me</h1>
                    <p className="text-justify text-sm min-[992px]:text-lg">
                        Hello! I'm Osman Goni, a passionate MERN stack developer with the experience of building dynamic and user-friendly web applications. I'm proficient in using MongoDB, Express, React, and Node.js to bring ideas to life, and I'm always eager to learn new technologies and frameworks.
                    </p>
                    <p className="text-justify text-sm min-[992px]:text-lg mt-3">
                        I'm currently looking for new opportunities to use my skills and contribute to innovative
                        projects. If you're looking for a skilled and enthusiastic MERN stack developer, let's connect!
                    </p>
                </div>
                </Jump>
            </div>

        </>
    );
};

export default About;