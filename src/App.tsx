import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserTypeSelection, Signup } from '@/pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTypeSelection />} />
        <Route path="/signup" element={<Signup />} />
        {/* Future routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/pets" element={<PetListing />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
