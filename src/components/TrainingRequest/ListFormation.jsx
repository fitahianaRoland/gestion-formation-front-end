import React, { useState } from "react";
import {NavLink } from 'react-router-dom';

const ListFormation = () => {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index); // toggle
  };

  return (
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">List Training</h4>
        <div class="dropdown">
          <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuOutlineButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Departement </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton4">
            <a class="dropdown-item" href="#">IT</a>
            <a class="dropdown-item" href="#">RH</a>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Departement</th>
              <th>Theme</th>
              <th>Description</th>
              <th>Lieu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jacob</td>
              <td>53275531</td>
              <td>12 May 2017</td>
              <td>Mahazo</td>
              <td className="icone-list">
                <i className="mdi mdi-arrow-down" onClick={() => toggleDetails(0)}></i>
              </td>
            </tr>
            {showDetails === 0 && (
              <tr>
                <td colSpan="5">
                  <ul>
                    <NavLink className="nav-link link-detail" to="/DemandeSession" ><p>Détail A</p></NavLink>
                    <p>Détail B</p>
                    <p>Détail C</p>
                  </ul>
                </td>
              </tr>
            )}
            <tr>
              <td>Messsy</td>
              <td>53275532</td>
              <td>15 May 2017</td>
              <td>Gamo</td>
              <td className="icone-list">
                <i className="mdi mdi-arrow-down" onClick={() => toggleDetails(1)}></i>
              </td>
            </tr>
            {showDetails === 1 && (
              <tr>
                <td colSpan="5">
                  <ul>
                    <p>Détail X</p>
                    <p>Détail Y</p>
                    <p>Détail Z</p>
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFormation;
