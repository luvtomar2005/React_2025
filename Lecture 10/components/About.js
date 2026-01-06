import React from "react";
import User from "./User";
import UserClass from "./UserClass";


// creating about a class based component
class About extends React.Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount(){
   

    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent Render");
    return(
      <div>
        <h1>About</h1>
        <h2>This is me Luv Learning react and it is a lot fun</h2>
        <UserClass name = {"First"} />
        
      </div>
    );
  }
}

export default About;


