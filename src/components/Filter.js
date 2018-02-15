import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <input style={styles.input} placeholder='search' />
      </div>
    );
  }
}

const styles = {
  input: {
    padding: '1rem 1rem',
    fontSize: '2rem'
  }
}

export default Filter;