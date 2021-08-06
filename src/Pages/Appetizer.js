import React from 'react';
import data from "../restaurant-menu.json";

function Appetizer() {
    const menu= data.array.categorys[0]["menu-items"];

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
                            <p className="MenuDescription">{item.description}</p>
                        </div>
                       </div>
                    );
                })}
          
        </>
    )
}

export default Appetizer
