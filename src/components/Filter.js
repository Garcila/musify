import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div>
        <input 
          onChange={e => this.props.setFilterString(e)} 
          style={styles.input} 
          placeholder='search' 
        />
      </div>
    );
  }
}

const styles = {
  input: {
    padding: '0.2rem',
    margin: '1rem',
    fontSize: '2rem'
  }
}

export default Filter;