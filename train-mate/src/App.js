import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Routine from "./pages/Routines";



function App() {

    function isAuthenticated() {
        const token = localStorage.getItem('token');
        return token !== null;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Login />}/>
                <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />}/>
                <Route path="/login" element = {<Login />}/>
                <Route path="/forum" element = {<Forum />}/>
                <Route path="/register" element = {<Register />}/>
                <Route path='/routines' element={isAuthenticated() ? <Routine /> : <Navigate to="/"/>}/>
            </Routes>
        </Router>
    );
}

export default App;