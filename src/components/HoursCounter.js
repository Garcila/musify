import React, { Component } from 'react';

class HoursCounter extends Component {
  render() {
    // let allSongs = this.props.playlists.reduce(() =>, [])
    const totalHours = this.props.playlists.reduce((t,v) => {
        return t + v.songs.reduce((total,value) => (total + value.duration),0);
      },0);

    return (
      <div>
        <div style={styles.information}>Hours of Music: {totalHours}</div>
      </div>
    );
  }
}

const styles = {
  information: {
    flex: 1,
    background: '#0A2012',
    border: 'grey',
    borderRadius: 2,
    fontSize: '1.2rem',
    padding: '1rem',
    boxShadow: '0 1 rgba(0,0,0,0.05)',
  }
}

export default HoursCounter;