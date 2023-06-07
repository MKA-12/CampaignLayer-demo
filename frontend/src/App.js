import './App.css';
import CampaignPage from './components/campaign-page.component';
import MainHeader from './components/page-header';
import CreateCampaign from './components/create-campaign-components/create-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MainHeader />
      <Router>
        <Routes>
          <Route path="/" element={<CampaignPage />} />
          <Route path="/create" element={<CreateCampaign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
