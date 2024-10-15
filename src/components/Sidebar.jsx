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
        {/* ray */}
        <li className={`nav-item ${location.pathname === '/forecast/trainingListPage' ? 'active' : ''}`}>
          <NavLink
            to="/forecast/trainingListPage"
            className='nav-link'
          >
            <span className="icon-bg"><i className="mdi mdi-trending-up menu-icon"></i></span>
            <span className="menu-title">Prévision</span>
          </NavLink>
        </li>
        {/* ray */}
        <li className={`nav-item ${location.pathname.includes('/Formateur') ? 'active' : ''}`}>
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded={location.pathname.includes('/Formateur')}
            aria-controls="ui-basic"
          >
            <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
            <span className="menu-title">Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${location.pathname.includes('/Formateur') ? 'show' : ''}`} id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink
                  to="/Formateur"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        {/* ray */}
        <li className={`nav-item ${location.pathname.includes('/AddFormation') ? 'active' : ''}`}>
          <NavLink
            to="/AddFormation"
            className='nav-link'
          >
            <span className="icon-bg"><i className="mdi mdi-folder-plus menu-icon"></i></span>
            <span className="menu-title">Add Training</span>
          </NavLink>
        </li>
        {/* ray */}
        <li className={`nav-item ${location.pathname.includes('/Demande') ? 'active' : ''}`}>
          <NavLink
            to="/Demande"
            className='nav-link'
          >
            <span className="icon-bg"><i className="mdi mdi-note-plus menu-icon"></i></span>
            <span className="menu-title">Training Request</span>
          </NavLink>
        </li>
        {/* ray */}
      </ul>
    </nav>
  );
}

export default Sidebar;
