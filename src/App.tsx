import React from 'react';
import { InvoiceListItem, Navbar } from './components/atoms';

const App: React.FunctionComponent = () => {
    return (
        <div>
            <Navbar />
            <InvoiceListItem
                invoiceNumber={232}
                timestamp={new Date()}
                itemsCount={5}
                createdBy={'Himanshu Ganapavarapu'}
                amount={5000}
            />
        </div>
    );
};

export default App;
