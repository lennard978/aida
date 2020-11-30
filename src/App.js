import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Lessons from './components/Lessons';
import LessonsLearn from './components/LessonsLearn';
import Grammary from './components/Grammary';
import GrammaryLearn from './components/GrammaryLearn';
import Pronounce from './components/Pronounce';
import Cards from './components/Cards';
import Test from './components/Test';
import CardsLearning from './components/CardsLearning';
// import TestLearning from './components/TestLearning';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:id" element={<LessonsLearn />} />
        <Route path="grammary" element={<Grammary />} />
        <Route path="grammary/:id" element={<GrammaryLearn />} />
        <Route path="pronounce" element={<Pronounce />} />
        <Route path="cards" element={<Cards />} />
        <Route path="cards/:id" element={<CardsLearning />} />
        {/* <Route path="test" element={<Test />} />
        <Route path="test/:id" element={<TestLearning />} /> */}
      </Routes>
    </>
  );
}

export default App;
