 
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
        <form onSubmit={handleSubmit} className="form-style">
            <label>Name : </label>
            <input type="text" value={name} onChange={handleChange} placeholder="Enter Your Name...."></input>
            <br></br>
            <button type="submit" className="button-styles">Submit</button>
        </form>
    )
}

export default SimpleForm;