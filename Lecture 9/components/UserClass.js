

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
       
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default"
            }
            
        }
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/luvtomar2005")
        const json = await data.json();
        

        this.setState({
            userInfo : json,
        });
        console.log(json);

       this.timer =  setInterval(() => {
        console.log("As a senior developer it is very important to clear your mess ")
    } , 1000);
   }
   componentDidUpdate(){
    
    
    console.log("Component did update is called");
    
   }
   componentDidMount(){
        clearInterval(this.timer);
   }
    render(){
        
        const {name , location  , avatar_url} = this.state.userInfo;
        return (
            <div className = "user-card">
              
                <h2>Name : {name}</h2>
                 <img src  = {avatar_url} />
                <h3>Location : {location}</h3>
                <h4>Contact : luvt342312@vscode.com </h4>
            </div>
        )
    }
   

}
export default UserClass;
