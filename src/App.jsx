import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNavBar from './components/navbar';
import Dashboard from './components/dashboard';
import FAQ from './components/faq';
import AllTransactions from './components/AllTransactions';

function App() {
  const navBarWidth = '10%';
  const allTransActionStyle = {marginLeft: '25%', marginRight: 'auto', maxWidth: '700%', border: '1px solid black',maxWidth: '1200px'};
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Left Navigation Bar */}
        <LeftNavBar navBarWidth={navBarWidth} />

        {/* Main Content */}
        <main style={{ flexGrow: 1, padding: '16px', marginLeft: navBarWidth }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard navBarWidth={navBarWidth} style={{ minWidth: '400px' }} />} />
            <Route path="/faq" element={<FAQ navBarWidth={navBarWidth} />} />
            <Route path="/all-transactions" element={<AllTransactions />}  style={{allTransActionStyle}} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
