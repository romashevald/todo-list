import React from 'react';
import '../App.css';
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";
import TaskAddForm from "./TaskAddForm";

const App = () => (
    <div className="board">
        <header className="App-header">
            {/*<TaskList/>*/}
            {/*<TaskAddForm/>*/}
            <TaskAddForm/>
            <VisibleTodoList />
            <Footer/>
        </header>
    </div>
);

export default App

