import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import RootLayout from './layout/RootLayout';
import WorkshopPage from './pages/WorkshopPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/workshop' element={<WorkshopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      
      </Route>
    </Routes>
  );
}

export default App;