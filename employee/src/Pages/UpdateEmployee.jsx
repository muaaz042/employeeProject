import React, { useState } from 'react';
import './UpdateEmployee.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateEmployee = () => {
  const [searchID, setSearchID] = useState('');
  const [newID, setNewID] = useState('');
  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('');


  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:1000/update/${searchID}`, {
        id: newID,
        name: newName,
        position: newPosition
      });
      Swal.fire({
        title: "Record Updated Successfully",
        icon: "success"
      });
      setSearchID('');
      setNewID(''); 
      setNewName('');
      setNewPosition('');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className='update'>
      <div className='searchEmployee'>
        <input type="text" placeholder='Enter ID you want to update' value={searchID}
          onChange={(e) => setSearchID(e.target.value)}/>
        
      </div>
      <div className='addEmployee'>
        <input type="number" placeholder='New ID' value={newID} onChange={(e) => setNewID(e.target.value)}/>
        <input type="text" placeholder='New Name' value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <input type="text" placeholder='New Position' value={newPosition}
          onChange={(e) => setNewPosition(e.target.value)}
        />
        <button onClick={handleUpdate}>Update Record</button>
      </div>
    </div>
  );
};

export default UpdateEmployee;
