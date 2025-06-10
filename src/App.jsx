import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './components/Pages/Home/Home.jsx';

import GettingStarted from './components/Pages/GettingStarted/GettingStarted.jsx';
import Intro from './components/Pages/GettingStarted/Intro/Intro.jsx';
import Onboarding from './components/Pages/GettingStarted/Onboarding/Onboarding.jsx';
import DashboardOverview from './components/Pages/GettingStarted/DashboardOverview/DashboardOverview.jsx';

import AndyAI from './components/Pages/AndyAI/AndyAI.jsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Navigate to="/introduction" replace />} /> */}

        <Route index element={<Home />} />       

        <Route path="getting-started" element={<GettingStarted />} />
          <Route path="getting-started/introduction-to-mini-lessons-academy" element={<Intro />} />
          <Route path="getting-started/onboarding" element={<Onboarding />} />
          <Route path="getting-started/dashboard-overview" element={<DashboardOverview />} />

      </Route>
    </Routes>
  );
}
