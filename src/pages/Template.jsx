import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


function Template ({children}){
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Template;