function NameList()
{
    const names = ["Ravi","Akhil","Nawaz","Varshith","Gnana chandra","Praveen","Venkatesh"];

    return(
        <div>
            <h3>Names List</h3>
            <ul>
                {names.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default NameList;