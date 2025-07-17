import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Committee from './pages/committee';
import McCommittee from './pages/mc_committee';
import WasnCommittee from './pages/wasn_committee';
import Agenda from './pages/agenda';
import Speech from './pages/speech';
import Discussion from './pages/discussion';
import Mc_papers from './pages/mc_papers';
import Mc_submission from './pages/mc_submission';
// import Mc_best_paper from './pages/mc_best_paper';
import Registration from './pages/registration';
import Wasn_papers from './pages/wasn_papers';
import Wasn_submission from './pages/wasn_submission';
// import Wasn_best_paper from './pages/wasn_best_paper';
import Transporatation from './pages/transportation';
// import Achievement from './pages/achievement';
import Sponsorship from './pages/sponsorship';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/mc-committee" element={<McCommittee />} />
      <Route path="/wasn-committee" element={<WasnCommittee />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/speech" element={<Speech />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="/mc-papers" element={<Mc_papers />} />
      <Route path="/mc-submission" element={<Mc_submission />} />
      {/* <Route path="/mc-best-paper" element={<Mc_best_paper />} /> */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/wasn-papers" element={<Wasn_papers />} />
      <Route path="/wasn-submission" element={<Wasn_submission />} />
      {/* <Route path="/wasn-best-paper" element={<Wasn_best_paper />} /> */}
      <Route path="/transportation" element={<Transporatation />} />
      {/* <Route path="/achievement" element={<Achievement />} /> */}
      <Route path="/sponsorship" element={<Sponsorship />} />
    </Routes>
  </BrowserRouter>
);
