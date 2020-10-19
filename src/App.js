import React from 'react';
import './App.css';
import Row from './components/Row/Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      </header>
    </div>
  );
}

export default App;
