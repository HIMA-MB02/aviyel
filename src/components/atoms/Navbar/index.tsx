import React from 'react';
import './styles.css';

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid'>
                <div className='navbar-brand'>Dashboard</div>
            </div>
        </nav>
    );
};

export default Navbar;
