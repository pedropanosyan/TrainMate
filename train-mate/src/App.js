import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Routine from "./pages/Routines";
import Chest from "./pages/muscles/Chest";
import Abs from "./pages/muscles/Abs";
import Arms from "./pages/muscles/Arms";
import Legs from "./pages/muscles/Legs";
import Back from "./pages/muscles/Back";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Discussion from "./pages/Discussion";



function App() {

    function isAuthenticated() {
        const token = localStorage.getItem('token');
        return token !== null;
    }

    return (
        <Router>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element = {<Login />}/>
                <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />}/>
                <Route path="/chest" element={isAuthenticated() ? <Chest /> : <Navigate to="/" />}/>
                <Route path="/abs" element={isAuthenticated() ? <Abs /> : <Navigate to="/" />}/>
                <Route path="/arms" element={isAuthenticated() ? <Arms /> : <Navigate to="/" />}/>
                <Route path="/legs" element={isAuthenticated() ? <Legs /> : <Navigate to="/" />}/>
                <Route path="/back" element={isAuthenticated() ? <Back /> : <Navigate to="/" />}/>
                <Route path="/login" element = {<Login />}/>
                <Route path="/forum" element = {<Forum />}/>
                <Route path="/register" element = {<Register />}/>
                <Route path='/routines' element={isAuthenticated() ? <Routine /> : <Navigate to="/"/>}/>
                <Route path='/forum' element={isAuthenticated() ? <Forum /> : <Navigate to="/"/>}/>
                <Route path='/discussion' element={isAuthenticated() ? <Discussion /> : <Navigate to="/"/>}/>

            </Routes>
        </Router>
    );
}

export default App;