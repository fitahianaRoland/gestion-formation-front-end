import React, { useState } from "react";

const Formateur = () => {
  const [isFormateurPopupOpen, setFormateurPopupOpen] = useState(false);
  const [isOrganismePopupOpen, setOrganismePopupOpen] = useState(false);

  const openFormateurPopup = () => {
    setFormateurPopupOpen(true);  
    setOrganismePopupOpen(false);  
  };

  const closeFormateurPopup = () => {
    setFormateurPopupOpen(false);
  };

  const openOrganismePopup = () => {
    setOrganismePopupOpen(true); 
    setFormateurPopupOpen(false); 
  };

  const closeOrganismePopup = () => {
    setOrganismePopupOpen(false);
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          {/* Liste Formateur */}
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="title-hafa">
                  <h4 className="card-title">Trainer List</h4>
                  <i
                    className="mdi mdi-plus-box"
                    onClick={openFormateurPopup}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Trainer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jacob</td>
                      <td>
                        <i className="mdi mdi-delete-forever icon-delete"></i>
                      </td>
                      <td>
                        <i className="mdi mdi-table-edit icon-edit"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Pop-up pour ajouter un formateur */}
                {isFormateurPopupOpen && (
                  <div className="popup">
                    <div className="card">
                      <div className="card-body borderst">
                        <div className="title-hafa">
                          <h4 className="card-title">Ajouter un formateur</h4>
                          <i
                            className="mdi mdi-close"
                            onClick={closeFormateurPopup}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="formateurName">Nom</label>
                            <input
                              type="text"
                              className="form-control"
                              id="formateurName"
                              placeholder="Nom"
                              required
                            />
                          </div>
                          <button type="button" class="btn btn-dark btn-fw">Ajouter</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Liste Organisme */}
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="title-hafa">
                  <h4 className="card-title">Organization List</h4>
                  <i
                    className="mdi mdi-plus-box"
                    onClick={openOrganismePopup}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Organisme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Organisme A</td>
                      <td>
                        <i className="mdi mdi-delete-forever icon-delete"></i>
                      </td>
                      <td>
                        <i className="mdi mdi-table-edit icon-edit"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Pop-up pour ajouter un organisme */}
                {isOrganismePopupOpen && (
                  <div className="popup">
                    <div className="card">
                      <div className="card-body borderst">
                        <div className="title-hafa">
                          <h4 className="card-title">Ajouter un organisme</h4>
                          <i
                            className="mdi mdi-close"
                            onClick={closeOrganismePopup}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="organismeName">Nom</label>
                            <input
                              type="text"
                              className="form-control"
                              id="organismeName"
                              placeholder="Nom"
                              required
                            />
                          </div>
                          <button type="button" class="btn btn-dark btn-fw">Ajouter</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formateur;
