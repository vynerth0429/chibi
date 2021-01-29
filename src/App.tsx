import React from 'react';
import './App.css';
import ButtonComp from './components/inputs/Button';

function App() {
  return (
    <div className="h-screen">
      <main className="h-full bg-gray-50">
        <ButtonComp className="btn-contained-green">
          Test
        </ButtonComp>
        <ButtonComp className="btn-text-green">
          Test
        </ButtonComp>
        <ButtonComp className="btn-outline-green">
          Test
        </ButtonComp>
      </main>
    </div>
  );
}

export default App;
