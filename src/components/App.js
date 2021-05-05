import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../styles/App.css';
import Login from "./Login";
import ChatApp from "./ChatApp";
import {useState} from "react";

function App() {
    const [isLogged, SetLogged] = useState(true)
    return (
        <div className={"app"}>
            {
                isLogged ? <ChatApp/> : <Login/>
            }
        </div>
    );
}

export default App;
