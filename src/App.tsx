import React from 'react';
import { Navbar } from './components/atoms';
import { SPAContainer } from './components/pages';

const App: React.FunctionComponent = () => {
    return (
        <div id='app-root'>
            <Navbar />
            <SPAContainer />
        </div>
    );
};

export default App;
