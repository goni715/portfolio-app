import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {FaUserGraduate} from "react-icons/fa";
import {LuSchool} from "react-icons/lu";
import {MdSchool} from "react-icons/md";

const Education = () => {
    return (
        <>
            <div id="education" className="flex px-9 flex-col justify-center md:px-14 min-[992px]:px-20 bg-white py-8">
                <div className="bg-[#8080801a] py-16">
                    <h2 className="uppercase text-center mb-2 text-2xl md:text-3xl font-bold text-[#138781]">
                        Education Details
                    </h2>
                    <hr className="mx-auto w-[200px] md:w-[400px] text-[#138781] border border-bottom-[#138781]"/>

                    {/*react-vertical-timeline-component implementation*/}
                    <VerticalTimeline>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2020 - present"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<FaUserGraduate />}
                        >
                            <h3 className="vertical-timeline-element-title text-[#138781]">Graduation</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#1e1e2c]">Bangabandhu Sheikh Mujibur Rahman Science & Technology University</h4>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2016 - 2018"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<LuSchool />}
                        >
                            <h3 className="vertical-timeline-element-title text-[#138781]">HSC</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#1e1e2c]">Lions School & College, Saidpur</h4>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2011 - 2016"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title text-[#138781]">SSC</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#1e1e2c]">Lakshmanpur School & College, Saidpur</h4>
                        </VerticalTimelineElement>


                    </VerticalTimeline>

                    {/*react-vertical-timeline-component implementation* Ended*/}

                </div>
            </div>
        </>
    );
};

export default Education;