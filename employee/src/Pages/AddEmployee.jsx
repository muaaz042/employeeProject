import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './AddEmployee.css';
import axios from "axios"
const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    id: null,
    name: null,
    position: null
  });

  const handleInputChange = (e) => {
    
    setEmployeeData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddRecord = async() => {
      
    await axios.post('http://localhost:1000/add',employeeData)
    
    setEmployeeData({
      id: "",
      name: "",
      position: ""
    })

    Swal.fire({
      title: "Data Added Successfully",
      icon: "success"
    });

  };

  return (
    <div className='addEmployee'>
      <input type="number" placeholder='Add ID' name='id' onChange={(e) => handleInputChange(e)} value={employeeData.id}/>
      <input type="text" placeholder='Add Name' name='name' onChange={(e) => handleInputChange(e)} value={employeeData.name} />
      <input type="text" placeholder='Add Position' name='position' onChange={(e) => handleInputChange(e)} value={employeeData.position}/>
      <button onClick={handleAddRecord}>Add Record</button>
    </div>
  );
};

export default AddEmployee;
