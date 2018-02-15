import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import SongsStats from './components/SongsStats';
import Filter from './components/Filter';
import Playlist from './components/Playlist';

let textColor = '#fff';

class App extends Component {
  render() {
    return (
      <div style={styles.App} className="App">
        <Title name="this is the title" />
        <div style={styles.SongsStats}>
          <SongsStats />
          <SongsStats />
        </div>
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

const styles = {
  App: {
    color: textColor,
    backgroundColor: 'rgb(205,200,20)'
  },
  SongsStats: {
    display: 'flex',
    padding: '1rem',
  }
}

export default App;
