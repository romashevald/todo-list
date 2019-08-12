import React, {useState} from 'react';
import '../style/App.css';
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";
import {URL_ADD, URL_LIST} from '../router/constants';
import {Redirect} from 'react-router';


const App = () => {
    const [allowRedirect, setAllowRedirect] = useState(false);
    if (allowRedirect) return <Redirect to={`${URL_LIST}${URL_ADD}`}/>;

    return (
        <div className="container" >
            <div className="button-container">
                <button className="add-button" onClick={() => setAllowRedirect(true)}>{'Add todos'}</button>
            </div>
            <VisibleTodoList/>
            <div className="footer"><Footer/></div>
        </div>
    );
};

export default App