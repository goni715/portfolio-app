import project_pic from '../../assets/image/ecommerce.jpg';
import Spin from 'react-reveal/Spin';

const ProjectCard = ({item}) => {
    const {name, stack, technologies, live, image} = item || {}
    return (
        <>
            <Spin>
               <div className="project-card border border-gray-400 flex flex-col gap-6 justify-center items-center rounded-lg">

                <div className="w-full card-image relative">
                    <span className="-notify-badge bg-[#f29f67] px-2.5 py-1.5 text-sm absolute -left-2.5 -top-5 rounded-3xl">
                        {stack}
                    </span>
                    <img className="w-full h-[150px]" src={image} alt="project"/>
                </div>

                <div className="card-technologies text-xl flex flex-wrap gap-2">
                    {
                        technologies?.length > 0 && (
                            technologies.map((teck,i)=>{
                               return(
                                   <>
                                       <span className="card-detail-badge bg-[#e0b50f] rounded-3xl px-2.5 py-1.5 text-sm">
                                           {teck}
                                       </span>
                                   </>
                               )
                            })
                        )
                    }
                    {/*<span className="card-detail-badge bg-[#e0b50f] rounded-3xl px-2.5 py-1.5 text-sm">Express</span>*/}
                    {/*<span className="card-detail-badge bg-[#e0b50f] rounded-3xl px-2.5 py-1.5 text-sm">React</span>*/}
                    {/*<span className="card-detail-badge bg-[#e0b50f] rounded-3xl px-2.5 py-1.5 text-sm">Mongodb</span>*/}
                </div>

                <div className="card-body flex flex-col justify-center items-center gap-6 pb-10">
                    <div className="ad-title">
                        <h5 className="text-xl uppercase">
                            {name}
                        </h5>
                    </div>
                    <a target="_blank" className="ad-btn uppercase w-[140px] h-[40px] text-center flex justify-center items-center bg-[#138781] text-white rounded-2xl hover:text-white hover:bg-black duration-500" href={live}>
                        View
                    </a>
                </div>


            </div>
            </Spin>
        </>
    );
};

export default ProjectCard;