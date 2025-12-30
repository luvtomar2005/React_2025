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
    // did mount is basically used for calling the api because as we did not want react to wait for the data to comin 
    // Link it to the second approach of fetching data from the backend (lecture 6 refrence from this series)
    // This is the most important question from the interview perspective.

    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent Render");
    return(
      <div>
        <h1>About</h1>
        <h2>This is me Luv Learning react and it is a lot fun</h2>
        <UserClass name = {"First"} />
        {/* <UserClass name  = {"Second"}/> */} 
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Me Luv Learning React and it is a lot of fun</h2>
      
//       <UserClass name = {"Luv Tomar's React porject [class]"}/>
//     </div>
//   );
// };

export default About;


/* Now as we have two child component so what will be printed or how the react life cycle will works

Parent Constructor 
-Parent Render
  - First Constructor
  - First Render
  - First DidMount
  -Second Constructor
  -Second Render
  -Second DidMount

-Parent DidMount

And this is absoluetly wrong thinking 

Correct output will be -:
-Parent Constructor
-Parent Render
 -First Constructor
 -First Render
 -Second Constructor
 -Second Render
 -First DIDMount
 -Second DidMount

-Parent DIDMount

For more clearance go to https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

*/
// React finds all the render phase batch them up together because render phase is fast commitn phase takes time
// For  optimsing the react app