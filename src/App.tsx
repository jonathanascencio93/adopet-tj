import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserTypeSelection } from '@/pages/UserTypeSelection';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTypeSelection />} />
        {/* Future routes */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/pets" element={<PetListing />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
