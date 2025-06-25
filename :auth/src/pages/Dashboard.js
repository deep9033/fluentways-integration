import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import MySessions from './MySessions';
import MyProgress from './MyProgress';
import MyPlan from './MyPlan';
import Settings from './Settings';
import './Dashboard.css';

const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Default user type - you can change this to 'premium' or 'new'
  const userType = 'new'; // Change this to 'premium' to see premium dashboard

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dashboard">
      <TopNav 
        className={isScrolled ? 'scrolled' : ''} 
        userType={userType}
      />
      <Sidebar userType={userType} />
      <main className="dashboard-main">
        <Routes>
          <Route path="/" element={<Home userType={userType} />} />
          <Route path="/my-sessions" element={<MySessions userType={userType} />} />
          <Route path="/my-progress" element={<MyProgress userType={userType} />} />
          <Route path="/my-plan" element={<MyPlan userType={userType} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard; 