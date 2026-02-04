const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = React.createElement(
  "h1",
  { id: "heading", className: "head med" },
  "Hello world from react",
);
console.log(h1);
console.log(root);
root.render(h1);
