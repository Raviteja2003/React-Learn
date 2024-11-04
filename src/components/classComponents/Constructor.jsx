import React from "react";

/*
    constructor is used to initialize components state
    Binds event handlers if needed
    set up initial configurations of the component

    without super(props) we cannot access thi.state or this.props in constructor,  will get an error

*/

class Constructor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            favouriteColor : "RED"
        };
    }

    render()
    {
        return(
            <h1>My Favuourite color is { this.state.favouriteColor}</h1>
        )
    }
}
export default Constructor;