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
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/TicTacToe">Tic Tac Toe</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/todoClass">ToDo Using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/todoHooks">ToDo Using Hooks</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/clockClass">Clock using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/clockHooks">Clock using Hooks</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/crudClass">Crud using Class</Link>
                    </li>
                    <li style={{ margin: '20px' }}>
                        <Link to="/itlh-react/crudHooks">Crud using Hooks</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/itlh-react/TicTacToe">
                        <TicTacToeComponent />
                    </Route>
                    <Route path="/itlh-react/todoClass">
                        <MyToDoClassComponent />
                    </Route>
                    <Route path="/itlh-react/todoHooks">
                        <MyToDoHooksComponent />
                    </Route>
                    <Route path="/itlh-react/clockClass">
                        <ClockClassComponent />
                    </Route>
                    <Route path="/itlh-react/clockHooks">
                        <ClockHooksComponent />
                    </Route>
                    <Route path="/itlh-react/crudClass">
                        <CrudClass />
                    </Route>
                    <Route path="/itlh-react/crudHooks">
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