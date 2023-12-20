import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);