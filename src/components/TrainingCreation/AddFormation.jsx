import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddFormation = () => {
  const [selectedOption, setSelectedOption] = useState(''); //interne , externe
  const [sessions, setSessions] = useState([]);
  const [isSessionPopupOpen, setSessionPopupOpen] = useState(false);
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  

  const closeSessionPopup = () => {
    setSessionPopupOpen(false);
  };

  const openSessionPopup = () => {
    setSessionPopupOpen(true); 
  };

  const handleAddSession = () => {
    const startDate = document.getElementById('startDateInput').value;
    const endDate = document.getElementById('endDateInput').value;

    const newSession = { startDate, endDate };

    //recuperation session
    const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];

    //ajout session
    storedSessions.push(newSession);

    //stocker les session
    localStorage.setItem('sessions', JSON.stringify(storedSessions));

    //update session
    setSessions(storedSessions);

    closeSessionPopup();
  };

  //maka session ao amin'ny localsotage
  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
    setSessions(storedSessions);
  }, []);

  const handleDeleteSession = (index) => {
    const updatedSessions = sessions.filter((_, i) => i !== index);
    //update localstorage
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
    setSessions(updatedSessions);
  };

  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Create a new Formation</h4>
                  <div className="form-group">
                    <label htmlFor="departementSelect">Departement</label>
                    <select className="form-control" id="departementSelect">
                      <option>IT</option>
                      <option>RH</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descriptionInput"
                      placeholder="ex : excel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="themeInput">Theme</label>
                    <input
                      type="text"
                      className="form-control"
                      id="themeInput"
                      placeholder="theme"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="objectifTextarea">Objectif</label>
                    <textarea
                      className="form-control"
                      id="objectifTextarea"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                <h4 className="card-title" style={{ color: 'white' }}>..</h4>
                  <div className="form-group">
                    <label htmlFor="lieuInput">Lieu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lieuInput"
                      placeholder="lieu"
                    />
                  </div>

                  <div className="row">
                    <div className="col-lg-6 grid-margin stretch-card">
                      <div className="form-group">
                        <label htmlFor="nombreMinInput">Nombre min:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="nombreMinInput"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 grid-margin stretch-card">
                      <div className="form-group">
                        <label htmlFor="nombreMaxInput">Nombre max:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="nombreMaxInput"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 grid-margin stretch-card">
                    <div className="form-group radio-label">
                      <label htmlFor="lieuInput">Formateur : </label>
                    </div>
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="interne"
                        checked={selectedOption === 'interne'}
                        onChange={handleOptionChange}
                      />
                      interne
                    </label>

                    <label className="radio-label">
                      <input
                        type="radio"
                        value="externe"
                        checked={selectedOption === 'externe'}
                        onChange={handleOptionChange}
                      />
                      externe
                    </label>
                  </div>

                  {selectedOption === 'interne' && (
                    <div className="form-group icone-plus">
                      <label htmlFor="formateurSelect">Nom formateur</label>
                      <select className="form-control" id="formateurSelect">
                        <option>IT</option>
                        <option>RH</option>
                      </select>
                      <i className="mdi mdi-plus-box"
                      onClick={openFormateurPopup}
                      ></i> 
                    </div>
                  )}

                  {selectedOption === 'externe' && (
                    <div className="form-group icone-plus">
                      <label htmlFor="organismeSelect">Organisme Formateur</label>
                      <select className="form-control" id="organismeSelect">
                        <option>IT</option>
                        <option>RH</option>
                      </select>
                      <i className="mdi mdi-plus-box"
                      onClick={openOrganismePopup}
                      ></i> 
                    </div>
                  )}

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
              <div className="col-md-12 miakatra">
                <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">
                  <ul className="nav nav-tabs tab-transparent" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="business-tab" data-toggle="tab" href="#session" role="tab" aria-selected="false">Session</a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content tab-transparent-content">
                  <div className="tab-pane fade show active" id="session" role="tabpanel" aria-labelledby="business-tab">
                    <div className='icone-add'> 
                      <i className="mdi mdi-plus-box"
                      onClick={openSessionPopup}
                      ></i> 
                    </div>
                  
                    <div className="row tabl">
                    <div className="col-lg-8">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Date et Heure debut</th>
                            <th> Date et Heure fin</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sessions.map((session, index) => (
                            <tr key={index}>
                              <td>{new Date(session.startDate).toLocaleString('fr-FR')}</td>
                              <td>{new Date(session.endDate).toLocaleString('fr-FR')}</td>
                              <td>
                                <i className="mdi mdi-delete-forever icon-delete" onClick={() => handleDeleteSession(index)}></i>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>    
                    </div>
                    </div>
                  </div>
                </div>
                {isSessionPopupOpen && (
                  <div className="popup">
                    <div className="card">
                      <div className="card-body borderst">
                        <div className="title-hafa">
                          <h4 className="card-title">Create a new session</h4>
                          <i
                            className="mdi mdi-close"
                            onClick={closeSessionPopup}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="formateurName">start date :</label>
                            <input
                              type="datetime-local"
                              className="form-control"
                              id="startDateInput"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="formateurName">end date :</label>
                            <input
                              type="datetime-local"
                              className="form-control"
                              id="endDateInput"
                              required
                            />
                          </div>
                          <button type="button" className="btn btn-dark btn-fw" onClick={handleAddSession}>Ajouter</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
          </div>
          <button type="button" className="btn btn-dark btn-fw">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddFormation;
