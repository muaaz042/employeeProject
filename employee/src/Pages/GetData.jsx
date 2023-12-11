import React, { useState } from 'react';
import './GetData.css';
import axios from 'axios';

const GetData = () => {

  const [data,setData]=useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  return (
    <>
    <div className='getData'>
      <button onClick={fetchData}>Get All Records</button>
      </div>
      <br/>
      <div className='mainFetch'>{data.map(data=>
      <div className='fetchData'>
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.position}</div>
      </div>
        )}</div>
    </>
  );
};

export default GetData;
