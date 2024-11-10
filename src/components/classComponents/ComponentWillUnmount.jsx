/*

componentWillUnmount() - This life cycle method is invoked right before the component is being removed from DOM.
                         You can use it to perform : 
                            1. cleaning timers or intervals
                            2. cancelling network requests or subscriptions
                            3. cleaning up event listeners
                            4. Resetting global states

                        Syntax : 
                           componentWillUnmount(){
                                clean up code here
                           }

*/

import React from "react";  
class Timer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            time : 0,
        };
    }

    componentDidMount()
    {
        this.timerId = setInterval(()=>{
            this.setState((prevState)=>({
                time : prevState.time+1,
            }));
            console.log("Time updated to:", this.state.time);
        },1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerId);
        console.log("Timer cleared");
    }

    render()
    {
        return(
            <h1>Time : {this.state.time}</h1>
        )
    }
}

export default Timer;
