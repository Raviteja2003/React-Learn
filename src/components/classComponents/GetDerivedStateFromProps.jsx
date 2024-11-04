import React from "react";
/*
    getDerivedStateFromProps is static Life Cycle Method in React used in Mounting and Updating phases
    It allows a component to change its state based on change in its props
    since it is a static method it does not have access to this
    it receives current props and state as arguments and returns an object to update the state or null if no updation is needed
    syntax:
        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.someValue !== prevState.someValue) {
                return { someValue: nextProps.someValue };
            }
            return null;
        }

    How It Works:
            It runs before every render, both during the initial mounting and whenever the components props changes.
            It can modify components state based on props 


*/

class GetDerivedStateFromProps extends React.Component
{
    render()
    {
        return(
            <div>

            </div>
        )
    }
}

export default GetDerivedStateFromProps;