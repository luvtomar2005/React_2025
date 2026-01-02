
import { useState } from "react";
const User = ({name}) =>{
    
    const [count]  = useState(0); 
    const [count2] = useState(1);
    return(
        <div className = "user-card">
            <h1>Count = {count}</h1>
            <h6>Count2 = {count2}</h6>
            <h2>Name : {name} </h2>
            
            <h3>Location : Mathura</h3>
            <h4>Contact : luv@12121gmail.com </h4>
        </div>
    )
}

export default User;