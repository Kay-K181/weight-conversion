import React from "react";  
import { useState } from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";



export default function App(){

    const [page, setPage]=useState('pageOne')

    const [decimal, setDecimal] = useState('')

    function handlePush(){
        setPage('1')
    }

    return(
        <div>
            {page === 'pageOne' 
            ? 
            <FirstPage 
                decimal = {decimal}
                setDecimal = {setDecimal}
                onPush = {handlePush}
            /> 
            : 
            <SecondPage 
                decimal = {decimal}
                setPage = {setPage}
            />}
        </div>
    )
}