import React from "react";

/*
    shouldComponentUpdate : It is a React Life Cycle method in updating phase that determines whether a component should be re-render based on its props or state . 
                            It gives us control over the re-render process, allowing to optimize performance by skipping unncessary re-renders

                            Return Type : return a Boolean value ie; either a true or false
                                          true : component will re-render
                                          false : The component will skip the re-render

                            Arguments : nextProps,nextState
                                        nextProps : props the component will receive
                                        nextState : The upcoming state of component

                            Syntax : 
                                        shouldComponentUpdate(nextProps,nextState)
                                        {
                                            return true/false;
                                        }

                            When To Use : 
                                          1: To avoid re-rendering when changes in props or state do not effect components state or behaviour
                                          2: Useful when re-render is costly in terms of performance
                                          
                            
*/


/* 

    In the below example shouldComponentUpdate prevents re-renders if the count value has not changed by specific amount (In this case it is 5)
    

*/

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0,
        };
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        return Math.abs(this.state.count - nextState.count)>5;
    }

    incrementCount = () =>
    {
        this.setState((prevState) => (
            {count : prevState.count+6}
        ))
    };

    render()
    {
        console.log("Render called");
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;