/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
/*

    getDerivedStateFromProps is static Life Cycle Method in React used in Mounting and Updating phases
    It allows a component to change its state based on change in its props
    since it is a static method it does not have access to this
    It receives current props and state as arguments and returns an object to update the state or null if no updation is needed
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

    When to use :
            Useful when component needs to react to prop changes , like when new data arrives that should update
            Use it for controlled components when state changes are based on user input and external data
            Avoid using it to set default props in state, this can lead to unneccessary re-renders and complexity

*/


/*

    The example below starts with the favourite color being "RED" but the getDerivedStateFromProps() updates the favourite color based on attribute 

*/
class GetDerivedStateFromProps extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            favouriteColor : "RED"
        };
    }

    static getDerivedStateFromProps(nextProps,prevState) 
    {
        // eslint-disable-next-line react/prop-types
        if(nextProps.favco!==prevState.favouriteColor)
        {
            return {favouriteColor:nextProps.favco}

        }
    }
    render()
    {
        return(
            <h1>My Favourite Color is {this.state.favouriteColor}</h1>
        )
    }
}

GetDerivedStateFromProps.PropTypes = {
    favco: PropTypes.string.isRequired,
};

export default GetDerivedStateFromProps;