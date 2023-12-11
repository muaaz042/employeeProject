import React, { useState } from 'react';
import './DeleteID.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeleteID = () => {
  const [deleteID, setDeleteID] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1000/delete/${deleteID}`);
      Swal.fire({
        title: "Data Deleted Successfully",
        icon: "success"
      });
      setDeleteID(''); 
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleChange = (e) => {
    setDeleteID(e.target.value);
  };

  return (
    <div className='deleteEmployee'>
      <input
        type="text"
        placeholder='Enter Employee ID to delete'
        value={deleteID}
        onChange={handleChange}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteID;
