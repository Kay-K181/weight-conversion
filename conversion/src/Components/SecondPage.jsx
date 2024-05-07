import React, { useState } from "react";

export default function SecondPage(props){

    const [lbs, setLbs] = useState('')

    const [kg, setKg] = useState('')

    function conversion(){
        if(lbs === '' || isNaN(lbs)){
            alert('Enter a number')
        } else if (lbs < 1 || lbs > 300){
            alert('Please enter a value within 1 & 300')
        } else {
            const dataKg = (lbs * 0.45359237).toFixed(props.decimal);
            setKg(dataKg);
        }
    }

    return(
    <div className="main">
    <h1>What lbs value would you like to convert to KGs?</h1>
    <div className="kg">{kg !== '' ? `${kg} kg` : ''}</div>
    <form className="secondForm">
      <label>Enter lbs here:
        <input
          className="lbs"
          type="number" 
          value={lbs}
          onChange={(e) => setLbs(parseInt(e.target.value))}
        />
      </label>
    </form>
    <div className="buttons">
    <button onClick={conversion}>Convert Now</button>
    <button onClick={() => props.setPage('pageOne')}>Go back to the start</button>
    </div>
    </div>
    )
}