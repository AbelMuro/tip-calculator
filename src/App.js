import React from 'react';
import CalculateTip from './CalculateTip';
import logo from './images/logo.svg';
import Store from './Store';
import { Provider } from 'react-redux';
import './styles.css';


function App() {
    return(
        <Provider store={Store}>
            <main className='container'>
                <img src={logo} className='logo'/>
                <CalculateTip/>
            </main>
        </Provider>
    )
}

export default App;