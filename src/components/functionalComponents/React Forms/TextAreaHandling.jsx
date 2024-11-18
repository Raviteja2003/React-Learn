import { useState } from "react";

function  SelectTextAreaForm()
{
    const [formData,setFormData] = useState({
        color:"",
        description:"",
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData((prevData)=>({
            ...prevData,
             [name]:value,   
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Select and TextArea Form</h2>
                <label className="block mb-3 text-sm font-medium text-gray-700">Favourite Color : </label>
                <select name="color" value={formData.color} onChange={handleChange} className="w-full px-3 py-2 mt-1 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <label className="block mb-2 text-sm font-medium text-gray-700">Description
                    <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Enter a Description" className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    </textarea>
                </label>
                <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all duration-200">Submit</button>
            </form>
        </div>
    )
}


export default SelectTextAreaForm;