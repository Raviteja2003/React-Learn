function Garage(Props)
{
    const cars = Props.cars;

    return(
        <>
            <h1>Garage</h1>
            {cars.length > 0 && 
                <h2>You have {cars.length} cars in your Garage</h2>
            }
        </>
    )
}
export default Garage;