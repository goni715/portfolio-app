import Sidebar from "./portfolio/Sidebar.jsx";
import Content from "./portfolio/Content.jsx";



const MasterLayout = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="layout flex">
                   <Sidebar/>
                    <Content/>
                </div>
            </div>
        </>
    );
};

export default MasterLayout;