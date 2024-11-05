import React from "react";

/*
    This method is called once immediately after the component is rendered or added to the DOM

    It is used to initiate processes that require the component to be fully rendered such as fetching data,initalizing libraries or setting up times

    Simply we can say this is where we perform the side effects such as fetching data from API or setting up subscriptions
    
    We can use setState inside componentDidMount  which will trigger re-render but it wont cause an infinite loop

    Syntax:
            componentDidMount()
            {
                performs the actions here after the component mounts
            }

*/


class UserProfile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userData : null,
        };
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users/5")
        .then(response => response.json())
        .then(data => {
            this.setState({userData : data});
        })
        .catch(error => console.error("Error feteching data:",error));

    }
    render()
    {
        const {userData} = this.state;

        return(
            <div>
                {userData ? (
                    <div>
                        <h1>{userData.name}</h1>
                        <h1>Email : {userData.email}</h1>
                        <h1>Phone : {userData.phone}</h1>
                    </div>
                ):
                (
                    <p>Loading........</p>
                )
                }
            </div>
        )
    }
}

export default UserProfile;