import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TrainingListPage from './pages/TrainingListPage';
import SessionListByTrainingPage from './pages/SessionListByTrainingPage';
import ListEmployeesPerSessionPage from './pages/ListEmployeesPerSessionPage';
import { SidebarProvider } from './components/context/SidebarContext';

function App() {
  return (
    <SidebarProvider> 
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<Navigate to="/forecast/trainingListPage" />} />
=======
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
>>>>>>> Stashed changes
          <Route path="/forecast/trainingListPage" element={<TrainingListPage />} />
          <Route path="/forecast/SessionListByTrainingPage" element={<SessionListByTrainingPage />} />
          <Route path="/forecast/ListEmployeesPerSessionPage" element={<ListEmployeesPerSessionPage />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
