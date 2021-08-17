import React from 'react';
import { InvoiceListItem, Navbar } from './components/atoms';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <InvoiceListItem />
    </div>
  );
}

export default App;
