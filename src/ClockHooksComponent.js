import React, { useState, useEffect } from "react";

function ClockHooksComponent() {
    let [date,setDate] = useState(new Date().toLocaleTimeString());


    function tiktock() {
        setDate(new Date().toLocaleTimeString());
    }
    useEffect(() => {
        let intervalId = setInterval(() => tiktock(), 1000);
        return () => {
            clearInterval(intervalId);
        }
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Holla from Hooks</h1>
            <h3>Time now is {date} </h3>
        </div>
    )
}

export default ClockHooksComponent;