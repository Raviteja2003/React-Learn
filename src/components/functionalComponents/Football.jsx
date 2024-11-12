/*
The below code is an example of React functional componenets. 
It is not required to write a render mehod with functional components since it is a life cycle method
There is no this with functional components
Functional components are stateless
Instead of life cycle methods here we use React Hooks

*/

function Football()
{
    const shoot = (a) =>{
        alert(a);
    };

    return(
        <button onClick={() => shoot("Goal")}>TakeShot!</button>
    );
}

export default Football;