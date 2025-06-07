import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './components/Pages/Home/Home.jsx';

import Introduction from './components/Pages/Introduction/Introduction.jsx';
import Glimpse from './components/Pages/Introduction/Glimpse/Glimpse.jsx';
import Prerequisite from './components/Pages/Introduction/Prerequisite/Prerequisite.jsx';

import GettingStarted from './components/Pages/GettingStarted/GettingStarted.jsx';
import Resources from './components/Pages/GettingStarted/Resources/Resources.jsx';
import Install from './components/Pages/GettingStarted/Install/Install.jsx';

import Configuration from './components/Pages/Configuration/Configuration.jsx';
import SystemSettings from './components/Pages/Configuration/SystemSettings/SystemSettings.jsx';
import Launch from './components/Pages/Configuration/Launch/Launch.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Navigate to="/introduction" replace />} /> */}

        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="introduction/glimpse" element={<Glimpse />} />
        <Route path="introduction/prerequisite" element={<Prerequisite />} />

        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="getting-started/resources" element={<Resources />} />
        <Route path="getting-started/install" element={<Install />} />

        <Route path="configuration" element={<Configuration />} />
        <Route path="configuration/system-settings" element={<SystemSettings />} />
        <Route path="configuration/launch" element={<Launch />} />
      </Route>
    </Routes>
  );
}
