import React, { Component } from 'react';

import Header from '../organisms/Header/default';

import SideMovies from '../organisms/HomeMovies/sideMovie';

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
        <div style={styles.main}>
          <SideMovies 
            movies = {this.state.movies}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    width: '1200px',
    margin: '0 auto',
    marginTop: '100px',
  },
}

export default ViewMovie;
