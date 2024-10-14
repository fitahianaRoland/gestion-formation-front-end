import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarContext } from './context/SidebarContext';

function Sidebar() {
  const location = useLocation(); // pour obtenir le chemin actuel
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <nav className={`sidebar sidebar-offcanvas ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">Main</li>
        <li className={`nav-item ${location.pathname === '/forecast/trainingListPage' ? 'active' : ''}`}>
          <NavLink
            to="/forecast/trainingListPage"
            className='nav-link'
          >
            <span className="icon-bg"><i className="mdi mdi-trending-up menu-icon"></i></span>
            <span className="menu-title">Prévision</span>
          </NavLink>
        </li>
        <li className={`nav-item ${location.pathname.includes('/forecast') ? 'active' : ''}`}>
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded={location.pathname.includes('/forecast')}
            aria-controls="ui-basic"
          >
            <span className="icon-bg"><i className="mdi mdi-playlist-check menu-icon"></i></span>
            <span className="menu-title">Réalisation</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${location.pathname.includes('/forecast') ? 'show' : ''}`} id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink
                  to="/forecast/SessionListByTrainingPage"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Session List By Training Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/forecast/ListEmployeesPerSessionPage"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  List Employees Per Session Page
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
