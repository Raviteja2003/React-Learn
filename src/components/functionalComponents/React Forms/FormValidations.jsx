import { useState } from "react";

function FormValidations()
{
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const handleChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if(!newEmail.includes("@gmail.com"))
        {
            setError("Email must contains @gmail.com");
        }
        else
        {
            setError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!error)
        {
            alert(`Submitted Email ${email}`);
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="mb-4 text-xl font-semibold text-gray-700 text-center">Email Validation Form</h2>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                <input 
                    type="email" 
                    value={email}  
                    onChange={handleChange} 
                    placeholder="Enter your Email" 
                    className={`w-full px-3 py-2 mb-3 text-sm border rounded-lg focus:outline-none focus:ring-2 ${error ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}`}>
                </input>
                {error && (<p className="mb-3 text-sm text-red-500">{error}</p>)}
                <button type="submit" disabled={error} className={`w-full py-2 text-white rounded-lg ${error ? "bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}`}>Submit</button>

            </form>
        </div>
    )
}
export default FormValidations;