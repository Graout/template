import React from "react";
import Main from "../components/pages/main";
import FrameBar from "../components/frameBar";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="App">
                    <FrameBar />
                    <Switch>
                        <Route path="/" exact component={Main} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
