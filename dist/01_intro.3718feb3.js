// Creating nested elements using React.createElement (correct version)
impot;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading1_child1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading2_child1"
        }, "Heading 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading1_child2"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading2_child2"
        }, "Heading 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=01_intro.3718feb3.js.map
