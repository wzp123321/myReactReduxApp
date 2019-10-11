import React from 'react'
import ReactDOM from "react-dom";
import App from "./App.js";

import {
    Provider
} from "react-redux";
import store from "./store";

const newApp = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDOM.render( newApp, document.getElementById("root"))