 
import {useState} from "react";
import "./styles.css"
function SimpleForm()
{
    const [name,setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted Name : ${name}`);
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-style">
               <h2 className="form-title">Welcome! Please enter your Name</h2>
               <label className="label-style">Name:</label>
               <input type="text" value={name} onChange={handleChange} placeholder="Enter your Name...." className="input-style"></input>
               <br/>
               <button type="submot" className="button-styles">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;