import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import MyCourses from './pages/MyCourses';
import Profile from './pages/Profile';
import Grades from './pages/Grades';
import Preferences from './pages/Preferences';
import Notifications from './pages/Notifications';
import NotificationsSettings from './pages/NotificationsSettings';
import ClassDetail from './pages/ClassDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notifications-settings" element={<NotificationsSettings />} />
        <Route path="/class-detail" element={<ClassDetail />} />
      </Routes>
    </>
  );
}

export default App;
