import React, { useState } from "react";

export default function FirstPage(props){

    function push(){
        if (props.decimal === '' || isNaN(props.decimal)){
            alert('Enter a value')
        } else if (props.decimal > 3 || props.decimal < 1){
           alert('Enter a value between 1 & 3')
        }
        else {
            {props.onPush()}
        }
    }

    return(
        <form className="wholeSection">
            <label>     
                Enter a value between 1 & 3:
                <input className="input1"
                    type="number" 
                    placeholder="Decimals"
                    value={props.decimal}
                    onChange={(e) => props.setDecimal(parseInt(e.target.value))}
                    />
            </label>

            <button className="button1" onClick={push}>
                Confirm
            </button>
    </form>
    )
}