import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row/Row'
import requests from './requests'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Navbar />
        <Hero />

        <Row 
         title="NETFLIX ORGINALS" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow={true}
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
