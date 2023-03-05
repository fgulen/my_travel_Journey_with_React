import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import data from './data';


export default function App() {

  const mains = data.map(mainData => {
    return (
      <Main data={mainData} />
    )
  })
  

  return (
    <div className="app">
      <Navbar />
      <section className='posts-lists'>
        {mains}
      </section>
      <Footer />
    </div>
  );
}
