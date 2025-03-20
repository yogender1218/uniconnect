import './App.css';
import "./style/global.css"; 
import GetStarted from './pages/GetStarted';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyticsPage from './pages/AnalyticsPage';
import FaqPage from './pages/FaqPage';
import SubReviews from './pages/SubReviews';
import NotFound from './pages/NotFound';
import SupportPage from './pages/SupportPage';
import SinupPage from './pages/SinupPage';
import StudentLogin from './pages/StudentLogin';
import ProfessorLogin from './pages/ProfessorLogin';
import InvestorLogin from './pages/InvestorLogin';
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sinup" element={<SinupPage />} />
      <Route path="analytics" element={<AnalyticsPage />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="subscription" element={<SubReviews />} />
      <Route path="notfound" element={<NotFound/>} />
      <Route path="support" element={<SupportPage/>} />
      <Route path="/slogin" element={<StudentLogin />} />
      <Route path="/plogin" element={<ProfessorLogin />} />
      <Route path="/ilogin" element={<InvestorLogin />} />
    </Routes>
  </Router>
  )
}

export default App;
