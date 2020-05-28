import React, {Suspense} from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const  Home = React.lazy(()=> import("./common/Home"));
const About = React.lazy(()=> import ("./common/About"));
const Dashboard = React.lazy( ()=> import("./common/Dashboard"));
const Gallery = React.lazy(()=> import("./common/image"));


export default function App() {
    return (
        <div>
        <Suspense fallback={<Loader/>}>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/space"> SpaceX </Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/space">
                        <Gallery/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </Suspense>
        </div>
    );
}

function Loader() {
    return <div>Loading...</div>

}