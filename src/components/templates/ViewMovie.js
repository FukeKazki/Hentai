import React, { Component } from 'react';

import Header from '../organisms/Header/default';

import SideMovies from '../organisms/HomeMovies/sideMovie';

import Tags from '../organisms/Tags/default';

class ViewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [
            {
              id: '0',
              title: '動画A',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '1',
              title: '動画B',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '2',
              title: '動画C',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '3',
              title: '動画D',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '4',
              title: '動画E',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '5',
              title: '動画F',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '6',
              title: '動画G',
              description: '動画の説明',
              count: 0,
            },
            {
              id: '7',
              title: '動画H',
              description: '動画の説明',
              count: 0,
            },
          ],
    };
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <div style={styles.tagHeader}>
          過去の視聴のジャンル
          <Tags
            tags = {this.state.movies}
          />
        </div>
        <div style={styles.main}>

          <div style={styles.left}>
            <div>ここにLive2d</div>
          </div>

          <div style={styles.right}>
            <h3>おすすめのジャンル</h3>
            <Tags
              tags = {this.state.movies}
            />
            <h3>おすすめの動画</h3>
            <SideMovies 
              movies = {this.state.movies}
            />
          </div>

        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    width: '1200px',
    margin: '0 auto',
    display: 'flex',
    backgroundColor: '#ddd',
  },
  left: {
    width: '70%',
  },
  right: {
    widht: '30%',
  },
  tagHeader: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ccc',
  }
}

export default ViewMovie;
