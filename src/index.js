import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TicTacToeComponent from './TicTacToeComponent';
import MyToDoClassComponent from './MyToDoClassComponent';
import MyToDoHooksComponent from './MyToDoHooksComponent';
import ClockClassComponent from './ClockClassComponent';
import ClockHooksComponent from './ClockHooksComponent';
import CrudClass from './CrudClass';
import CrudHooks from './CrudHooks';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

function AppRoutes() {
    return (
        <HashRouter>
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
                    <li style={{ margin: '15px' }}>
                        <Link to="/TicTacToe">Tic Tac Toe</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/todoClass">ToDo Using Class</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/todoHooks">ToDo Using Hooks</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/clockClass">Clock using Class</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/clockHooks">Clock using Hooks</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/crudClass">Crud using Class</Link>
                    </li>
                    <li style={{ margin: '15px' }}>
                        <Link to="/crudHooks">Crud using Hooks</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/TicTacToe">
                        <TicTacToeComponent />
                    </Route>
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
        </HashRouter>
    )
}

ReactDOM.render(< AppRoutes />,
    document.getElementById('root')
);