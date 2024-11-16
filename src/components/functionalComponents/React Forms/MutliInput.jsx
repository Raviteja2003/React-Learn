import { useState } from "react";
function MultiInput()
{
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        phone:"",
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted Data:\nName: ${formData.name}\nEmail:${formData.email}\nphone:${formData.phone}`);
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Contact Information</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" ></input>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default MultiInput;