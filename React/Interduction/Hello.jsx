import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props) {
    return <h1>Hello World!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

/*
The examples in this tutorial are created using the
create-react-app.

Install the create-react-app,
and you will be able to run the same examples on your computer.

In this example we create a component called 'Hello'.
The component is rendered in a container called 'root'.
*/
