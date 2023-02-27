import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency  = () => {
    const { Currency  } = useContext(AppContext);
    return (
        <div className="alert alert-secondary" style={{ marginLeft: '1rem' }}>
       
          
          <select className="custom-select" id="inputGroupSelect02" >
        <option defaultValue value="Add" name="Add">Currency (£Pound)</option>
        <option value="Reduce" name="Reduce">$Dollar</option>
        <option value="Reduce" name="Reduce">£ Pound</option>
        <option value="Reduce" name="Reduce">€ Euro</option>
        <option value="Reduce" name="Reduce">₹ Ruppee</option>

       
          </select>
          </div>
      
        
    );
};
export default Currency;
