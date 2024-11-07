import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DonationForm } from './components/DonationForm';
import { SingleDelegationForm } from './components/SingleDelegationForm';

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<DonationForm />} />
        <Route path="/single" element={<SingleDelegationForm />} />
      </Routes>
    </div>
  );
}

export default App;