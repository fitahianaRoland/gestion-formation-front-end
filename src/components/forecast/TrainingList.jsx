import React, { useState,useEffect } from 'react';
import axios from 'axios';

function TrainingList() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [departments, setDepartments] = useState([]);
  const [searchDepartment, setSearchDepartment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('https://localhost:44351/api/Departments'); // Remplacez l'URL par celle de votre API
        setDepartments(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  // const debouncedFilter = useMemo(() => debounce((value) => setSearchDepartment(value), 300), []);

  // const handleInputSearchDeptChange = (event) => {
  //   debouncedFilter(event.target.value); // Utilise la version avec délai
  // };

  // const filteredDepartments = departments.filter(department =>
  //   department.departmentName.toLowerCase().includes(searchDepartment.toLowerCase())
  // );
  
  const handleInputSearchDeptChange = (event) => {
    setSearchDepartment(event.target.value);
    console.log('Search term:', event.target.value); // Affiche la valeur entrée dans la console
  };

  const filteredDepartments = departments.filter(department =>
    department.departmentName.toLowerCase().includes(searchDepartment.toLowerCase())
  );

  const data = [
    { id: 1, name: 'Herman Beck', amount: '$77.99', deadline: 'May 15, 2015', progress: '75%' },
    { id: 2, name: 'Messsy Adam', amount: '$245.30', deadline: 'July 1, 2015', progress: '39%' },
    { id: 3, name: 'John Richards', amount: '$138.00', deadline: 'Apr 12, 2015', progress: '75%' },
    { id: 4, name: 'Peter Meggik', amount: '$77.99', deadline: 'May 15, 2015', progress: '75%' },
    { id: 5, name: 'Edward', amount: '$160.25', deadline: 'May 03, 2015', progress: '75%' },
    { id: 6, name: 'John Doe', amount: '$123.21', deadline: 'April 05, 2015', progress: '75%' },
    { id: 7, name: 'Henry Tom', amount: '$150.00', deadline: 'June 16, 2015', progress: '75%' }
  ];

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);

    const newSelectedRows = {};
    data.forEach((row) => {
      newSelectedRows[row.id] = isChecked;
    });
    setSelectedRows(newSelectedRows);
  };

  const handleDepartmentClick = (e) => {
    console.log(e);
  }

  const handleRowSelect = (event, rowId) => {
    const isChecked = event.target.checked;
    setSelectedRows({
      ...selectedRows,
      [rowId]: isChecked,
    });

    if (!isChecked) {
      setSelectAll(false);
    }
  };

  return (
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Striped Table</h4>
                <p className="card-description"> Add class <code>.table-striped</code> </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Departements
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                          <div className="input-group">
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search departement" onChange={handleInputSearchDeptChange}  />
                          </div>
                        {filteredDepartments.map((department) => (
                              <a 
                              key={department.departmentId} 
                              className="dropdown-item" 
                              role="button" 
                              tabIndex={0} 
                              onKeyPress={(e) => e.key === 'Enter' && handleDepartmentClick(department)} // Gérer le clic avec "Entrée"
                            >
                            {department.departmentName}
                            </a>
                        ))}
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Formation
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" >Action</a>
                        <a className="dropdown-item" >Another action</a>
                        <a className="dropdown-item" >Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" >Separated link</a>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '90px', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                    <p className="card-description" style={{ textAlign: 'end', margin: '0', alignContent: 'center', marginTop: '10px' }}> select all </p>
                    <div className="form-check form-check-flat">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-label form-check-input"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> First name </th>
                      <th> Progress </th>
                      <th> Amount </th>
                      <th> Deadline </th>
                      <th> select </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: row.progress }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                        <td>{row.amount}</td>
                        <td>{row.deadline}</td>
                        <td>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label update-one">
                              <input
                                type="checkbox"
                                className="form-check-label form-check-input"
                                checked={!!selectedRows[row.id]}
                                onChange={(e) => handleRowSelect(e, row.id)}
                              />
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  );
}

export default TrainingList;
