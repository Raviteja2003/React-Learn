import React  from "react";

/*
    It is class component
    These are ES6 classes
    To create a class component we have to extend React.Component
    React class componenets have built in state object
    By using this.state,propertyName we can access properties
    To change the state of the object we use the this.setState() method 
    To access any method we just use this.methodName in class component

*/
class Car extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            brand: "Ford",
            Model : "Mustang",
            color : "RED",
            year : 1987
        };
    }
    changeColor = () =>{
        this.setState({color:"BLUE"});
    }
    render()
    {
        return(
            <div>
                <h1>My {this.state.brand} </h1>
                <p>
                    It is a {this.state.color} {this.state.Model}
                    from {this.state.year}
                </p>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

export default Car;