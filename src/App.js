import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
    </>
  );
}

export default App;

