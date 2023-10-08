import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import React from "react";
import {Route, Routes} from "react-router";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route exact path="/" element={'Homepage'}/>
                <Route exact path="/signin" element={<Signin />}/>
                <Route exact path="/signup" element={<Signup />}/>
                <Route element={() => <p>Page not found!</p>}/>
            </Routes>
        </div>
    );
}

export default App;
