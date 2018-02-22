import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './components/Title';
import PlaylistCounter from './components/PlaylistCounter';
import HoursCounter from './components/HoursCounter';
import Filter from './components/Filter';
// import Playlist from './components/Playlist';
import PlaylistGroup from './components/PlaylistGroup';

let ForestGreen = '#0D2C14';
// let DarkSlateGray = '#0A2012';
let LightGrey = '#DBD3D8';
// let SeaGreen = '#1B503E';
// let LightSlateGray = '#94A6AB';
let textColor = LightGrey;

let fakeServerData = {
  user: {
    name: 'Zapato',
    playlists: [
      {
        name: 'ONeOne',
        songs: [
          {name:'ne', duration: 1352}, 
          {name:'ene', duration: 1352}, 
          {name:'rne', duration: 1352}
        ],
      },
      {
        name: 'My rites',
        songs: [
          {name:'ne', duration: 1352}, 
          {name:'ene', duration: 152}, 
          {name:'rne', duration: 1352}
        ],
      },
      {
        name: 'My lll',
        songs: [
          {name:'ne', duration: 135}, 
          {name:'ene', duration: 1352}, 
          {name:'rne', duration: 152}
        ],
      },
      {
        name: 'Mavorites',
        songs: [
          {name:'ne', duration: 352}, 
          {name:'ene', duration: 1352}, 
          {name:'rne', duration: 1352}
        ],
      }
    ]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverData: {},
      filterString: '',
    }

    this.setFilterString = this.setFilterString.bind(this);
  }

  componentDidMount() {
    this.setState({ serverData: fakeServerData });
  }

  setFilterString(e) {
    this.setState({filterString: e});
  }

  render() {
    const { playlists } = this.state.serverData.user || '';
    let filtered = playlists ? 
                    playlists.filter(list => list.name.toLowerCase()
                    .includes(this.state.filterString.toLowerCase())) : 
                   '';
    return (
      <div style={styles.App} className="App">
        {this.state.serverData.user ?
          <Fragment>
            <Title
              name={this.state.serverData.user.name}
            />
            <div style={styles.Information}>
              <PlaylistCounter playlists={filtered} />
              <HoursCounter playlists={filtered} />
            </div>
            <Filter 
              setFilterString={this.setFilterString}
            />
            <PlaylistGroup 
              playlists={playlists}
              filtered={filtered}
            /> 
          </Fragment> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

const styles = {
  App: {
    color: textColor,
    backgroundColor: ForestGreen
  },
  Information: {
    display: 'flex',
    justifyContent: 'center'
  }
}

export default App;
