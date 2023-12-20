import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

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