import React, { Component, Fragment } from 'react';

class PlayListGroup extends Component {
  render() {
    // const playlist = this.props.playlists
    //   .filter(list => list.name.toLowerCase().includes(this.props.filterString.toLowerCase()))
      const playlist = this.props.filtered.map(l => 
      <div style={styles.list} key={l.name}>
        <img alt='albumCover' />
        <h3 >{l.name}</h3>
        <ul >
          {l.songs.map(s =>
            <li style={styles.songs} key={s.duration + s.name}>
              {s.name}
            </li>
          )}
        </ul>
      </div>);
    return (
      <Fragment>
        {playlist}
      </Fragment>
    );
  }
};

const styles = {
  list: {
    display: 'inline-block',
    width: '20%'
  },
  songs: {
    listStyle: 'none',
  }
}

export default PlayListGroup;