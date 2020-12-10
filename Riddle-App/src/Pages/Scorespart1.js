import React, { useState } from "react";
import './Scores.css'
import * as FaIcons from 'react-icons/fa';


const Leyla = () => {
   const [title, setTitle] = useState("Leyla Yatiligil");

   return (
      <div>
      <div className='box'>
   <p className='nameStyles' onClick={() => setTitle("Score: 10")}>{title}</p>
   </div>
   </div>
   );
}
export default Leyla;

