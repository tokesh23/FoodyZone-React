 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import FoodOrder from './components/FoodOrder';
import './App.css';

export const BASE_URL = "http://lobcalhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    
    fetchData();
  }, []);

   
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='hw'>
      <Navbar setSearch={setSearch} /> 
      <div className='App1'>
        <FoodOrder data={filteredData} /> 
      </div>
    </div>
  );
};

export default App;
