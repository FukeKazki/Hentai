import React, { Component } from 'react';

import Header from '../organisms/Header/default';
import Sidebar from '../organisms/Sidebar/default';
import Heading from '../organisms/Heading/default';
import HomeMovies from '../organisms/HomeMovies/default';
import AuthPage from '../organisms/AuthPage/default';
import { Button } from '@material-ui/core';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: '0',
          title: 'Unity',
          description: '動画の説明',
          count: 0,
          image: 'https://raw.githubusercontent.com/nkmk/python-snippets/c2e98d06c9a526ebe6898bb4ac4eaeb5424edfd0/notebook/data/dst/opencv_mosaic_005.jpg',
        },
        {
          id: '1',
          title: 'CAT',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '2',
          title: 'アニメ',
          description: '動画の説明',
          count: 0,
          image: 'http://sites.cybernoids.jp/cubism2/_/rsrc/1502985979156/samples/2017-08-18_01h05_25.png',

        },
        {
          id: '3',
          title: 'JK',
          description: '動画の説明',
          count: 0,
          image: 'http://blog-imgs-58.fc2.com/t/o/t/totalmatomedia/2013072601.png',

        },
        {
          id: '4',
          title: 'JC',
          description: '動画の説明',
          count: 0,
          image: 'https://media-groove.com/wp-content/uploads/2016/12/aeeec022e5bab8ef4f8298daa50e697c.jpg',

        },
        {
          id: '5',
          title: '百合',
          description: '動画の説明',
          count: 0,
          image: 'http://ecx.images-amazon.com/images/I/41tVgQhpvwL.jpg',

        },
        {
          id: '6',
          title: '催眠',
          description: '動画の説明',
          count: 0,
          image: 'http://i.gzn.jp/img/2010/11/27/cute_cats_pics/00_830084_62481809.jpg',

        },
        {
          id: '7',
          title: 'JD',
          description: '動画の説明',
          count: 0,
          image: 'https://d1f5hsy4d47upe.cloudfront.net/9c/9c776406a92bb1c4f5c41c78a8e493e6_t.jpeg',

        },
      ],
      shown: false,
    };
    this.authToggle = this.authToggle.bind(this);
  }
  authToggle() {
    console.log("AUTH");
		this.setState({
			shown: !this.state.shown
	});
	}
  render() {
    return (
      <div className="Home">
        {this.state.shown?<AuthPage authToggle={this.authToggle}/>:''}
        <Header authToggle={this.authToggle}/>
        <Sidebar />
        <div style={styles.main}>
          <Heading/>
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
    width: '1000px',
  },
}

const classes = {
  authContainer: {
    position: "fixed",
    background: "rgba( 0, 0, 0, 0.85 )",
    height: "100%",
    width: "100%",
    zIndex: "10000",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    background: "#fff",
    width: "25%",
  },
  Selected: {
    marginLeft: "60px",
    marginRight: "60px",
    marginButtom: "60px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#C400FF"
  },
  noSelected: {
    marginLeft: "60px",
    marginRight: "60px",
    marginButtom: "60px",
    fontSize: "20px",
    color: "#fff"
  },
  button: {
    height: "50px",
    width: "25%",
    color: "#fff",
    fontSize: "20px",
    background: "#C400FF",
  },
}
export default Home;
