import React from 'react';
import './App.css';
import Row from './components/Row/Row'
import requests from './requests'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>hello</h1>
        <Row 
         title="NETFLIX ORGINALS" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </header>
    </div>
  );
}

export default App;
