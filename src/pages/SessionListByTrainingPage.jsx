import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SessionListByTraining from '../components/forecast/SessionListByTraining';
import { SidebarProvider } from '../components/context/SidebarContext';

function SessionListByTrainingPage() {    
    return (
        <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <SessionListByTraining/>
        </div>
      </div>
    );
};
export default SessionListByTrainingPage;