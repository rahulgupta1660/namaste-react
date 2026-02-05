/*
 *
 * <div id="parent">
 *   <div class="child">
 *     <h1>Hello</h1>
 *   </div>
 * </div>
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h1", {}, "hello"),
  ),
);

const h1 = React.createElement(
  "h1",
  { id: "heading", className: "head med" },
  "Hello world from react",
);
console.log(parent);
console.log(h1); //object
console.log(root);
// root.render(h1);
root.render(parent);
