import React from "react";
import { Link } from 'react-router-dom';

const Demande = () => {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Striped Table</h4>
          <div class="d-xl-flex justify-content-between align-items-start">
          <h2 style={{ color: 'white' }}>...</h2>
              <div class="d-sm-flex justify-content-xl-between align-items-center mb-2 ">
                <div class="btn-group bg-white p-3" role="group" aria-label="Basic example">
                  <form class="d-flex align-items-center h-100 class-color" action="#">
                    <div class="input-group">
                      <input type="text" class="form-control bg-transparent border-0" placeholder="Search products" />
                      <div class="input-group-prepend bg-transparent">
                        <i class="input-group-text border-0 mdi mdi-magnify"></i>
                      </div>
                    </div>
                  </form>
                </div>
              <div class="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <button type="button" class="btn btn-dark btn-fw">Dark</button>
              </div>
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Departement</th>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th><input type="checkbox" class="form-check-input custom-checkbox " /></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT</td>
                <td>Herman</td>
                <td>Beck</td>
                <td>test@test</td>
                <td>
                    <input type="checkbox" class="form-check-input custom-checkbox" />
                </td>
              </tr>
              <tr>
                <td>RH</td>
                <td>Messsy</td>
                <td>Adam</td>
                <td>test@test</td>
                <td>
                  <input type="checkbox" class="form-check-input custom-checkbox" />
                </td>
              </tr>   
              <tr>
                <td>RH</td>
                <td>Messsy</td>
                <td>Adam</td>
                <td>test@test</td>
                <td>
                  <input type="checkbox" class="form-check-input custom-checkbox" />
                </td>
              </tr>        
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Demande;
