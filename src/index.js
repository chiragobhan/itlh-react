import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyToDoClassComponent from './MyToDoClassComponent';
import MyToDoHooksComponent from './MyToDoHooksComponent';
import ClockClassComponent from './ClockClassComponent';
import ClockHooksComponent from './ClockHooksComponent';
import CrudClass from './CrudClass';
import CrudHooks from './CrudHooks';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <li style={{ margin: '20px' }}>
                        <Link to="/todoClass">ToDo Using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/todoHooks">ToDo Using Hooks</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/clockClass">Clock using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/clockHooks">Clock using Hooks</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/crudClass">Crud using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/crudHooks">Crud using Hooks</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/todoClass">
                        <MyToDoClassComponent />
                    </Route>
                    <Route path="/todoHooks">
                        <MyToDoHooksComponent />
                    </Route>
                    <Route path="/clockClass">
                        <ClockClassComponent />
                    </Route>
                    <Route path="/clockHooks">
                        <ClockHooksComponent />
                    </Route>
                    <Route path="/crudClass">
                        <CrudClass />
                    </Route>
                    <Route path="/crudHooks">
                        <CrudHooks />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(< AppRoutes />,
    document.getElementById('root')
);