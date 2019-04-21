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
          title: '動画A',
          description: '動画の説明',
          count: 0,
          image: 'https://pbs.twimg.com/profile_images/938388942365134849/aEIz6tX-.jpg',
        },
        {
          id: '1',
          title: '動画B',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '2',
          title: '動画C',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '3',
          title: '動画D',
          description: '動画の説明',
          count: 0,
          image: 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20170113%2F28%2F2894568%2F0%2F322x457xf19c5270b36be8a01dfbc58a.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r',

        },
        {
          id: '4',
          title: '動画E',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '5',
          title: '動画F',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '6',
          title: '動画G',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

        },
        {
          id: '7',
          title: '動画H',
          description: '動画の説明',
          count: 0,
          image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',

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
