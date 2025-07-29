import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PhysicalSelf from './pages/physicalSelf';
import MaterialSelf from './pages/materialSelf';
import SexualSelf from './pages/sexualSelf';
import DigitalSelf from './pages/digitalSelf';
import PoliticalSelf from './pages/politicalSelf';
import SpiritualSelf from './pages/spiritualSelf';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

function App() {
  const navigate = useNavigate();
  return (
    useEffect(() => {
      if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        navigate(redirect.replace(window.location.origin + '/gallery', ''));
      }
    }, [navigate]),
    <MusicPlayerProvider>
    <Router>
      <Layout>
      <div className="App">
        <Routes>
          {/*landing page*/}
          <Route path="/" element={<LandingPage />} />
          
          {/*page routes*/}
          <Route path="/physical-self" element={<PhysicalSelf />} />
          <Route path="/material-self" element={<MaterialSelf />} />
          <Route path="/sexual-self" element={<SexualSelf />} />
          <Route path="/political-self" element={<PoliticalSelf />} />
          <Route path="/spiritual-self" element={<SpiritualSelf />} />
          <Route path="/digital-self" element={<DigitalSelf />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
      </Layout>
    </Router>
    </MusicPlayerProvider>
  );
}

export default App;