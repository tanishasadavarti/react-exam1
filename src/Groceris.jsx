
import React, { useState } from 'react';

function Groceries() {
    const [groceries, setGroceries] = useState([]);
    const [page,setpage]=useState(1)
    const fetchdata = () => {
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setGroceries(data.data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h1>Groceries</h1>
            <button onClick={fetchdata}>Get Groceries</button>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {groceries.map((grocery) => (
                    <div key={grocery.id} style={{ listStyle: "none", border: "1px solid gray"}}>
                        <img src={grocery.image} alt="" style={{ width: "50%" ,height:"50%"}} />
                        <p>price {grocery.price}</p>
                        <p>Name: {grocery.name}</p>
                        <button onClick={()=>setpage(page-1)} style={{backgroundColor:"black",color:"white",margin:"10px 30px",padding:"5px 20px"}}>prev</button>
                        <span>{page}</span>
                        <button onClick={()=>setpage(page+1)} style={{backgroundColor:"black",color:"white",margin:"10px 30px",padding:"5px 20px"}}>next</button>
                    </div>

                ))}
            </div>
            
            
        </div>
    );
}

export default Groceries;
