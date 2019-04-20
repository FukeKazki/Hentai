import React, { Component } from 'react';

import Header from '../organisms/Header/default';
import Sidebar from '../organisms/Sidebar/default';
import Heading from '../organisms/Heading/default';
import HomeMovies from '../organisms/HomeMovies/default';

class Home extends Component {
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
      ],
    };
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <Sidebar />
        <div style={styles.main}>
          <Heading />
          <HomeMovies 
            articleTitle = 'あなたへのおすすめ'
            movies = {this.state.movies}
          />
          <HomeMovies 
            articleTitle = '急上昇'
            movies = {this.state.movies}
          />
          <HomeMovies 
            articleTitle = '殿堂入り'
            movies = {this.state.movies}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    marginTop: '100px',
    marginLeft: '300px',
    width: '900px',
  },
}

export default Home;
