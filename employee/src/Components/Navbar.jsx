import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Employee Records</h1>
        <ul className='nav-list'>
          <Link to='/'><button>Add Record</button></Link>
          <Link to='/update'><button>Update Record</button></Link>
          <Link to='/search'><button>Search By Id</button></Link>          
          <Link to='/delete'><button>Delete Record</button></Link>
          <Link to='/getData'><button>Get Data</button></Link>
        </ul>

    </div>
  )
}

export default Navbar