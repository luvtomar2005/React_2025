import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


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
        <div>
          {/* Now this is the class based component so there will be another syntax for using the useConetxt */}
          LoggedIn User
          <UserContext.Consumer>
              {({loggedInUser}) =>(
                <h1 className = "text-xl font-bold">{loggedInUser}</h1>
              )}
          </UserContext.Consumer>
        </div>
        <h2>This is me Luv Learning react and it is a lot fun</h2>
        <UserClass name = {"First"} />
        
      </div>
    );
  }
}

export default About;



/* When we write the UserContext.consumer 
React internally created two things:

UserContext.Provider

UserContext.Consumer

You already used Provider.

Now you’re using Consumer. 

Context is a pipe
Provider puts data into the pipe
Consumer takes data out of the pipe
{(value) => <h1>{value.loggedInUser}</h1>}


*/