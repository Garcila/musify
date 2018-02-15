import React, { Component } from 'react';

class SongsStats extends Component {
  render() {
    return (
      <div style={styles.information}>Information about songs</div>
    );
  }
}

const styles = {
  information: {
    flex: 1,
    background: 'rgb(20,200,200)',
    border: 'grey',
    borderRadius: 2,
    fontSize: '1.2rem',
    padding: '1rem',
    boxShadow: '0 1 rgba(0,0,0,0.05)',
  }
}

export default SongsStats;