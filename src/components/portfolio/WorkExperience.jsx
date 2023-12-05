import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import {SiReact} from "react-icons/si";
import {MdOutlineDeveloperMode} from "react-icons/md";
import {IoCodeSlash} from "react-icons/io5";

const WorkExperience = () => {
    return (
        <>
            <div id="work" className="flex px-9 flex-col justify-center md:px-14 min-[992px]:px-20 bg-white py-8">
                <div className="bg-[#1387812a] py-16">
                    <h2 className="uppercase text-center mb-2 text-2xl md:text-3xl font-bold text-[#138781]">
                        Work Experience
                    </h2>
                    <hr className="mx-auto w-[200px] md:w-[400px] text-[#138781] border border-bottom-[#138781]"/>

                    {/*react-vertical-timeline-component implementation*/}
                    <VerticalTimeline lineColor="#1e1e2c">

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2023 - present"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Mern Stack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ company ltd</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2021 - 2022"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<MdOutlineDeveloperMode />}
                        >
                            <h3 className="vertical-timeline-element-title">Mobile App Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">vivasoft company ltd</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2020 - 2021"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<IoCodeSlash  />}
                        >
                            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ company ltd</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2015 - 2018"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<IoCodeSlash  />}
                        >
                            <h3 className="vertical-timeline-element-title">Intership </h3>
                            <h4 className="vertical-timeline-element-subtitle">XYZ company ltd</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>


                    </VerticalTimeline>

                    {/*react-vertical-timeline-component implementation* Ended*/}

                </div>
            </div>
        </>
    );
};

export default WorkExperience;