import React from 'react';
import { Header } from "./components/Header";
import { Trending } from './components/Trending';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Trending />
      </main>
    </div>
  );
}

export default App;
