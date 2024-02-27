import React from 'react';
import  './App.css';
import { Page } from './Component/Page';
import { mockData } from './Component/data';


const App: React.FC = () => {

  return (
    <div id="App">
      <h1>This is my project</h1>
      <Page data={mockData} />
    </div>
  );
};

export default App;
