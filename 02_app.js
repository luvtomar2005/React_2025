// Now in this we will understand how to create nested elements in html using react
 /***<div id = "parent">
        <div id = "child1">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </div>
        <div id = "child2">
            <h1>Heading 1 </h2>
            <h2>Heading 2 </h1>
        </div>
    
    </div>
     let us suppose we have to write this code in react
    ***/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading_1" }, "Heading 1"),
    React.createElement("h2", { id: "heading_2" }, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading_1" }, "Heading 1"),
    React.createElement("h2", { id: "heading_2" }, "Heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// it will just put the parent inside the root tag....