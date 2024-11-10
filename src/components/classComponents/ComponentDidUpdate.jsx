/*

    componentDidUpdate() - It is a Life-Cycle Method in React. It is called after the component has re-rendered due to change in it's state or props.
                           This method allows you to perform actions after the DOM has been updated, such as interracting with the DOM or making an API calls.
                           This method is invoked after the component's render() method has been executed and updates have been applied to DOM.

                           Arguments : 
                                prevProps : The previous props before the update
                                prevState : The previous state before the update
                                snapshot(optional) : This is value returned by the getSnapShotBeforeUpdate() method, if it was implemented.

                           Syntax : 
                                componentDidUpdate(prevProps,prevState,snapshot)
                                {
                                    you can perform DOM interactions and make API calls here
                                }

*/

import React from "react";
class Counter2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0,
        };
    }

    increment = () => {
        this.setState((prevState)=>({
            count : prevState.count+1,
        }));
    };

    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.count!==this.state.count)
        {
            console.log(`The count  has been updated from ${prevState.count} to ${this.state.count}`);
        }
    }

    render()
    {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter2;