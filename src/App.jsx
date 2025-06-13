import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './components/Pages/Home/Home.jsx';

import GettingStarted from './components/Pages/GettingStarted/GettingStarted.jsx';
import Intro from './components/Pages/GettingStarted/Intro/Intro.jsx';
import Onboarding from './components/Pages/GettingStarted/Onboarding/Onboarding.jsx';
import DashboardOverview from './components/Pages/GettingStarted/DashboardOverview/DashboardOverview.jsx';

import AndyAI from './components/Pages/AndyAI/AndyAI.jsx';

import QuizMedia from './components/Pages/QuizMedia/QuizMedia.jsx';

import EmailMarketing from './components/Pages/EmailMarketing/EmailMarketing.jsx';
import CourseHosting from './components/Pages/CourseHosting/CourseHosting.jsx';




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

        <Route path="andy-ai" element={<AndyAI />} />

        <Route path="quiz-and-media-management" element={<QuizMedia />} />

        <Route path="email-marketing" element={<EmailMarketing />} />

        <Route path="course-hosting" element={<CourseHosting />} />
        
      </Route>
    </Routes>
  );
}
