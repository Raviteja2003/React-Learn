
function ProductList()
{
    const products = [{id:1,name:"Laptop"},
                      {id:2,name:"Phone"},
                      {id:3,name:"Tablet"}
                    ];
    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )

}

export default ProductList;