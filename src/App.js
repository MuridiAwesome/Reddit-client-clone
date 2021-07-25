import React from 'react';
import { Header } from "./components/Header";
import { Trending } from './components/Trending';
import { Threads } from './components/Threads'
function App() {
  return (
    <div className="App">
        <Header />
        <Trending />
        <Threads 
          title={'[Post game thread] France delivers the USA it\s first olympic lose since 2004, winning 83-76'} 
          name="John doe"
          time="5 hours ago"
          />
        <Threads 
          title={"UK: 'Devastating': Crops begin to rot in England as brexit begins to bite"}
          name="World news"
          time="9 hours ago"
          />
    </div>
  );
}

export default App;
