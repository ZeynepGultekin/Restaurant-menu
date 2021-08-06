import React, {useState} from 'react';
import data from "../restaurant-menu.json";

function Dessert() {
    const menu= data.array.categorys[4]["menu-items"];
    const [newDescription] = useState("Special dessert with secret ingredients")
    return (
        <>
           
        {menu.map((item)=>{
            return(
               <div className="Card">
                <div className="Picture">
                    <img src ={item.images} alt="" />                    
                </div>
                <div className="TextBlock">
                    <div className="NamePrice">
                        <h4>{item.name}</h4>
                        <p className="Price">{item["sub-items"][0].price} R</p>
                    </div>
                    <p className="MenuDescription">{item.description==="" ? newDescription : item.description} </p>
                </div>
               </div>
            );
        })}
  
</>
    )
}

export default Dessert
