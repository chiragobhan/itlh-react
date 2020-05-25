import React from 'react';

/* function Index()
{
    let [time, setTime] = useState(new Date().toLocaleTimeString());
    return (
        <div>
            <h1>Holla</h1>
            <h3>Time now is {time} </h3>
        </div>
    )
} */

class ClockClassComponent extends React.Component
{
    // this is the constructor which is used to update the UI
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        //this is immutable, means we cannot modify it like this.state.date = 'sdfswd';
    }
    //runs after render()
    componentDidMount()
    {
        this.intervalId = setInterval(()=>this.tiktock(),1000);
    }
    //runs when component is closed or destroyed
    componentWillUMount()
    {
        clearInterval(this.intervalId);
    }
    tiktock()
    {
        //whenever state is changed or updated, render() is called again.
        this.setState(
            {
                date: new Date().toLocaleTimeString()
            }
        )
    }
    //runs after constructor
    render()
    {
        return(
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
            <h1>Holla from Class</h1>
            <h3>Time now is {new Date().toLocaleTimeString()} </h3>
        </div>
        )
    }
}

export default ClockClassComponent;