import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <a href="#">
                    <img src="http://besocial.wp4life.com/wp-content/uploads/2017/03/logo.png"></img>
                </a>
            </header>
            <nav className="nav">
                <div>My Account</div>
                <div>Peoples</div>
                <div>Notifications</div>
                <div>Messages</div>
                <div>Settings</div>
                <div>Groups</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
};

export default App;
