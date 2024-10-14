import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SidebarProvider } from '../components/context/SidebarContext';
import TrainingList from '../components/forecast/TrainingList';

function TrainingListPage() {
    return (
      <div className="container-scroller">
          <Header />
          <div className="container-fluid page-body-wrapper">
              <Sidebar />
              <TrainingList />
          </div>
      </div>
    );
}

export default TrainingListPage;
