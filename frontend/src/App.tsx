import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import ResetUrlOnRefresh from "./components/ResetUrlOnRefresh";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-800">
        <ResetUrlOnRefresh />
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="mainPagesBody mr-44 flex-1 p-4 bg-slate-100 rounded-tr-4xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
