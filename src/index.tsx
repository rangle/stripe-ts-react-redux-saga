import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reduxStore } from './reducers/';
import { SpaceShop } from "./SpaceShop/SpaceShop";

import './index.css';

const App = () => {

    return <Provider store={reduxStore}>
            <SpaceShop />
        </Provider>
};

ReactDOM.render(<App />, document.getElementById('root'));
