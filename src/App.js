import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import React from "react";
import {Route, Routes} from "react-router";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/account/Profile";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Instructors from "./pages/Instructors";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path="/instructors" element={<Instructors/>}/>
                <Route exact path="/signin" element={<Signin />}/>
                <Route exact path="/signup" element={<Signup />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route element={() => <p>Page not found!</p>}/>
            </Routes>
        </div>
    );
}

export default App;
