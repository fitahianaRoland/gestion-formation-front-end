import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRouter'; 
import TrainingListPage from './pages/TrainingListPage';
import SessionListByTrainingPage from './pages/SessionListByTrainingPage';
import ListEmployeesPerSessionPage from './pages/ListEmployeesPerSessionPage';
import { SidebarProvider } from './components/context/SidebarContext';
import Login from './pages/Login';
import Acceuil from './pages/Acceuil';
import AddFormationPage from './pages/AddFormationPage';
import Formateurpage from './pages/Formateurpage';
import ListFormationPage from './pages/ListFormatioPage';
import DemandeSession from './pages/DemandeSessionPage';

function App() {
  return (
    <SidebarProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
              path='/Acceuil' 
              element={
                  // <ProtectedRoute>
                      <Acceuil />
                  // </ProtectedRoute>
              } 
          />
          <Route 
            path='/Formateur' 
            element={
                // <ProtectedRoute>
                    <Formateurpage />
                // </ProtectedRoute>
            } 
          />

          <Route 
            path='/AddFormation' 
            element={
                // <ProtectedRoute>
                    <AddFormationPage />
                // </ProtectedRoute>
            } 
          />
          <Route 
              path='/Demande' 
              element={
                  // <ProtectedRoute>
                      <ListFormationPage />
                  // </ProtectedRoute>
              } 
          />
          <Route 
              path='/DemandeSession' 
              element={
                  // <ProtectedRoute>
                      <DemandeSession />
                  // </ProtectedRoute>
              } 
          />
          <Route path="/forecast/trainingListPage" element={<TrainingListPage />} />
          <Route path="/forecast/SessionListByTrainingPage" element={<SessionListByTrainingPage />} />
          <Route path="/forecast/ListEmployeesPerSessionPage" element={<ListEmployeesPerSessionPage />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
