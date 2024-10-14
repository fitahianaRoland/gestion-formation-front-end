import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ListEmployeesPerSession from '../components/forecast/ListEmployeesPerSession';

function ListEmployeesPerSessionPage() {    
    return (
        <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <ListEmployeesPerSession/>
        </div>
      </div>
    );
};
export default ListEmployeesPerSessionPage;