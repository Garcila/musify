import React, { Component } from 'react';

class PlaylistCounter extends Component {
  render() {
    const numberLists = this.props.playlists.length;
    return (
      <div>
        <div style={styles.information}>Number of Playlists: {numberLists}</div>
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

export default PlaylistCounter;