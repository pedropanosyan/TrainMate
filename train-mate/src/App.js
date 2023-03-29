import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/home" element = {<Home />}/>
                <Route path="/login" element = {<Login />}/>
                <Route path="/forum" element = {<Forum />}/>
                <Route path="/register" element = {<Register />}/>


            </Routes>
            {/* <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/forum">
                    <Forum />
                </Route>
            </Switch> */}
        </Router>
    );
}

export default App;