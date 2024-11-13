import "./style.css"
function StyledList()
{
    const colors = ["RED","GREEN","YELLOW","BLUE"];
    return(
        <div>
            <h3>COLORS LIST</h3>
            <ul className="color-list">
                {colors.map((color,index)=>(
                    <li key={index} className="color-item">{color}</li>
                ))}
            </ul>
        </div>
    )
}

export default StyledList;