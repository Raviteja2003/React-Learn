import { useRef } from "react";

//uncontrolled componenets acess the value of input fields directly via the DOM , typically using refs
function UnControlledForm()
{
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted value : ${inputRef.current.value}`);
    }

    return(
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-200">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className=" text-xl font-semibold text-gray-700 text-center mb-6">UnControlled Form</h2>
                <label className="block mb-4"><span className="text-sm font-medium text-gray-600">Name:</span>
                    <input type="text" ref={inputRef} className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 "/>
                </label>
                <button type="submit" className="w-full  text-white py-2 mt-4 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200">Submit</button>
             </form>
        </div>
        
    )
}
export default UnControlledForm;