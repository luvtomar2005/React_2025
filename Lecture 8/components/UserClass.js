// Here we are creating class based component

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.name + "Child consturctor");
        // Creating state variables in class based component...
      /*  this.state = {

             count : 0,
             count2 : 2
             Now this is we have created the state variable in class based component and the important
             thing is this state variable is the big object which can have multiple state variable
        } */
       
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default"
            }
            // this is the dummy data which we will get before getting the api data 
        }
    }
   /* componentDidMount(){
         console.log(this.props.name + "Child DidMount");
         This was the normal didmoutn function
    }*/
   // for making an api call
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
        // console.log(this.props.name + "Child render")
        // const {name} = this.props;
        // const {count , count2} = this.state;
        const {name , location  , avatar_url} = this.state.userInfo;
        return (
            <div className = "user-card">
                {/* <h1>Count : {count}</h1> */}
                {/* <button
                    onClick = {() => {
                        // Never ever update the state variable like directly
                        // this.state.count = this.state.count + 1;
                        this.setState({
                            count : this.state.count + 1
                            // This will only work to those variable which only being passed here 
                            // like in this case only for count1
                        })
                    }}
               >Increase </button> */}
                <h2>Name : {name}</h2>
                 <img src  = {avatar_url} />
                <h3>Location : {location}</h3>
                <h4>Contact : luvt342312@vscode.com </h4>
            </div>
        )
    }
    // Normal fundamental of class is that whenever  a instance of class is created a constructor is called..

}
export default UserClass;
// This is given us to react so we have to import react for it 



/* 

- Constructor (Dummy)
- Render(dummy)
-  < Html dummy>
Component DidMount
 <APi Call>
 <this.setState -> State variable is called>

 Now after this when setstate is called it triggers the reconciliation cycle 

-- Update 

render(Api Data)


*/