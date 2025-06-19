import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Layout from './components/Layout.jsx';

import Home from './components/Pages/Home/Home.jsx';

import GettingStarted from './components/Pages/GettingStarted/GettingStarted.jsx';
import Intro from './components/Pages/GettingStarted/Intro/Intro.jsx';
import Onboarding from './components/Pages/GettingStarted/Onboarding/Onboarding.jsx';
import DashboardOverview from './components/Pages/GettingStarted/DashboardOverview/DashboardOverview.jsx';

import CourseCreation from './components/Pages/CourseCreation/CourseCreation.jsx';
import CourseCreator from './components/Pages/CourseCreation/CourseCreator.jsx';
import CourseEditor from './components/Pages/CourseCreation/CourseEditor.jsx';
import AddingMultimediaCourse from './components/Pages/CourseCreation/AddingMultimedia.jsx';
import OneClickCourseCreator from './components/Pages/CourseCreation/OneClickCourseCreator.jsx';
import ExportingDownloadingCourse from './components/Pages/CourseCreation/ExportingDownloading.jsx';

import BookCreation from './components/Pages/BookCreation/BookCreation.jsx';
import BookCreator from './components/Pages/BookCreation/BookCreator.jsx';
import BookEditor from './components/Pages/BookCreation/BookEditor.jsx';
import AddingMultimediaBook from './components/Pages/BookCreation/AddingMultimediaBook.jsx';
import OneClickBookCreator from './components/Pages/BookCreation/OneClickBookCreator.jsx';
import ExportingDownloadingBook from './components/Pages/BookCreation/ExportingDownloading.jsx';

import AudioBookCreation from './components/Pages/AudioBookCreation/AudioBookCreation.jsx';

import AndyAI from './components/Pages/AndyAI/AndyAI.jsx';
import QuizMedia from './components/Pages/QuizMedia/QuizMedia.jsx';
import EmailMarketing from './components/Pages/EmailMarketing/EmailMarketing.jsx';
import CourseHosting from './components/Pages/CourseHosting/CourseHosting.jsx';
import Spotlight from './components/Pages/Spotlight/Spotlight.jsx';
import SupportResource from './components/Pages/SupportResource/SupportResource.jsx';





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
        
        <Route path="course-creation" element={<CourseCreation />} />
          <Route path="course-creation/course-creator" element={<CourseCreator />} />
          <Route path="course-creation/course-editor" element={<CourseEditor />} />
          <Route path="course-creation/adding-multimedia" element={<AddingMultimediaCourse />} />
          <Route path="course-creation/one-click-course-creator" element={<OneClickCourseCreator />} />
          <Route path="course-creation/exporting-downloading" element={<ExportingDownloadingCourse />} />

        <Route path="book-creation" element={<BookCreation />} />
          <Route path="book-creation/book-creator" element={<BookCreator />} />
          <Route path="book-creation/book-editor" element={<BookEditor />} />
          <Route path="book-creation/adding-multimedia" element={<AddingMultimediaBook />} />
          <Route path="book-creation/one-click-book-creator" element={<OneClickBookCreator />} />
          <Route path="book-creation/exporting-downloading" element={<ExportingDownloadingBook />} />

        <Route path="audiobook-creation" element={<AudioBookCreation />} />

        <Route path="andy-ai" element={<AndyAI />} />
        <Route path="quiz-and-media-management" element={<QuizMedia />} />
        <Route path="email-marketing" element={<EmailMarketing />} />
        <Route path="course-hosting" element={<CourseHosting />} />
        <Route path="spotlight" element={<Spotlight />} />
        <Route path="support-resource" element={<SupportResource />} />
        
      </Route>
    </Routes>
  );
}
