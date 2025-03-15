import React from 'react';
import Navbar from './components/Navbar';
import MastHead from './components/MastHead';
import Library from './components/Library';
import Billboard from './components/Billboard';
import SpotLight from './components/SpotLight';
import Plans from './components/Plans';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <MastHead />
      <Library />
      <Billboard />
      <SpotLight />
      <Plans />
      <Footer />
    </div>
  );
};

export default App;
