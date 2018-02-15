import React from 'react';

const Title = ({ name }) => {
  return (
    <h1 style={styles.title}>{name}</h1>
  );
}

const styles = {
  title: {
    background: 'rgb(200,140,180)',
    fontSize: '2rem',
    border: 'blue',
    borderRadius: 2,
    boxShadow: '0 1 rgba(0,0,0,0.05)',
  }
}

export default Title;