import { useState } from "react";
import "./SearchBar.css";
var data = require("../data.json");

export default function App() {

  const [value, setValue] = useState(''); 
  const [filterdata,setfilterdata] = useState([]); 

  const handleChange = (event) =>{
    setValue(event.target.value); 
  }

  const Search = (event) =>{

    event.preventDefault(); 
    const newfilterdata = data.filter((user)=>{ 
        if(user.name.includes(value)){
          return true; 
        }if(user.email.includes(value)){
          return true; 
        } if(user.Address.includes(value)){
          return true; 
        } if(user.city.includes(value)){
          return true; 
        } if(user.state.includes(value)){
          return true; 
        } if(user.key_issues.includes(value)){
          return true; 
        } if(user.phone_number.includes(value)){
          return true; 
        } if(user.achivements.includes(value)){
          return true; 
        }
    }); 
    console.log(newfilterdata)
    setfilterdata(newfilterdata); 

  }



 
  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input value={value}  type="text" onChange={handleChange} />
          <button onClick={Search}> Search </button>
        </div>
      </div>
    </div>
  );
}
