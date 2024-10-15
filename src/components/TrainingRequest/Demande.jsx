import React, { useState } from "react";

const Demande = () => {
  // Données statiques
  const data = [
    { id: 1, departement: 'IT', firstName: 'Herman', lastName: 'Beck', email: 'test@test' },
    { id: 2, departement: 'RH', firstName: 'Messsy', lastName: 'Adam', email: 'test@test' },
    { id: 3, departement: 'RH', firstName: 'Messsy', lastName: 'Adam', email: 'test@test' },
  ];

  // État pour suivre les cases à cocher
  const [checkedItems, setCheckedItems] = useState(Array(data.length).fill(false));

  // État pour suivre la case "Select All"
  const [isAllChecked, setIsAllChecked] = useState(false);

  // Fonction pour gérer le changement de l'état de la case à cocher individuelle
  const handleToggleItem = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index]; // Inverser l'état de la case à cocher
    setCheckedItems(updatedCheckedItems);

    // Si une case à cocher est décochée, décocher "Select All"
    if (updatedCheckedItems.includes(false)) {
      setIsAllChecked(false);
    } else {
      // Si toutes les cases sont cochées, cocher "Select All"
      setIsAllChecked(true);
    }
  };

  // Fonction pour cocher/décocher toutes les cases à cocher
  const handleToggleAll = (e) => {
    const isChecked = e.target.checked;
    setCheckedItems(Array(data.length).fill(isChecked));
    setIsAllChecked(isChecked); // Mettre à jour l'état de "Select All"
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-xl-flex justify-content-between align-items-start">
            <h4 className="card-title">Striped Table</h4>

            <div className="d-sm-flex justify-content-xl-between align-items-center mb-2 button-div">
              <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <button type="button" className="btn btn-dark btn-fw save-button">Save</button>
              </div>
            </div>
          </div>
          <div className="btn-group bg-white p-3" role="group" aria-label="Basic example">
            <form className="d-flex align-items-center h-100 class-color" action="#">
              <div className="input-group">
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
              </div>
            </form>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Departement</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>
                  <input 
                    type="checkbox" 
                    className="form-check-input custom-checkbox" 
                    onChange={handleToggleAll} 
                    checked={isAllChecked} // Liaison avec l'état de "Select All"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.departement}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>
                    <input 
                      type="checkbox" 
                      className="form-check-input custom-checkbox" 
                      checked={checkedItems[index]} // État pour chaque case à cocher
                      onChange={() => handleToggleItem(index)} // Appel lors du changement
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Demande;
