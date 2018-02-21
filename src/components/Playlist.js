import React, { Component } from 'react';

class Playlist extends Component {
  render() {
    return (
      <div style={styles.list}>
        <img alt='albumCover'/>
        <h3 >List Name</h3>
        <ul >
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}

const styles = {
  list: {
    display: 'inline-block',
    width: '30%'
  },
}

export default Playlist;