import React, { Component } from 'react';
// import Header from '../organisms/Header/default';
import SideMovies from '../organisms/HomeMovies/sideMovie';
import Tags from '../organisms/Tags/default';
import YoutubePlayer from '../organisms/Player/default';
import {createGlobalStyle} from 'styled-components';

createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC');
`

class ViewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [
          {
            id: '0',
            title: 'しずくの時間',
            description: 
            `★ごあいさつ

            わたし宙野しずく(そらのしずく)! 富士咲高校に通う現役2次元女子高生!
            
            放送部に所属してるけど、最近あまり活動ないなぁと思って自分の番組「しずくの時間」を立ち上げることにしました!趣味の話とか、学校での出来事とか、最新ニュースとか頑張って配信してきます!応援よろしくね!!`,
            count: 274.905,
            url: 'https://youtu.be/grzAbtw4zdI',
            tag: 'タグA',
            image: '',
          },
          {
            id: '1',
            title: '動画B',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/MXzFIxF1X30',
            tag: 'タグB',
            image: '',
          },
          {
            id: '2',
            title: '動画C',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグC',
            image: '',
          },
          {
            id: '3',
            title: '動画D',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグD',
            image: '',
          },
          {
            id: '4',
            title: '動画E',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグE',
            image: '',
          },
          {
            id: '5',
            title: '動画F',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグF',
            image: '',
          },
          {
            id: '6',
            title: '動画G',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグG',
            image: '',
          },
          {
            id: '7',
            title: '動画H',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグH',
            image: '',
          },
        ],
        demoMovie: [
          {
            id: '7',
            title: 'Unity',
            description: '動画の説明',
            count: 114,
            url: 'https://youtu.be/t5r0rNwjXQU',
            image: 'https://raw.githubusercontent.com/nkmk/python-snippets/c2e98d06c9a526ebe6898bb4ac4eaeb5424edfd0/notebook/data/dst/opencv_mosaic_005.jpg',
          },
          {
            id: '7',
            title: 'CAT',
            description: '動画の説明',
            count: 514,
            url: 'https://youtu.be/t5r0rNwjXQU',
            image: 'http://cdn-ak.f.st-hatena.com/images/fotolife/m/mosshm/20080720/20080720184432.jpg',
          },
          {
            id: '7',
            title: 'アニメ',
            description: '動画の説明',
            count: 191,
            url: 'https://youtu.be/t5r0rNwjXQU',
            image: 'http://sites.cybernoids.jp/cubism2/_/rsrc/1502985979156/samples/2017-08-18_01h05_25.png',
          },
          {
            id: '7',
            title: 'JK',
            description: '動画の説明',
            count: 981,
            url: 'https://youtu.be/t5r0rNwjXQU',
            image: 'http://blog-imgs-58.fc2.com/t/o/t/totalmatomedia/2013072601.png',
          },
          {
            id: '7',
            title: '百合',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            image: 'http://ecx.images-amazon.com/images/I/41tVgQhpvwL.jpg',
          },
        ],
        pastTag: [
          {
            tag: 'ドラゴンカーセックス',
          },
          {
            tag: '女体化',
          },
          {
            tag: 'JS',
          }
        ],
        recommendTag: [
          {
            tag: 'ケンタウロス',
          },
          {
            tag: 'ナース',
          },
          {
            tag: 'スク水',
          },
          {
            tag: '未亡人',
          },
        ],
    };
  }
  render() {
    return (
      <div className="Home">
        {/* <Header /> */}
        <div style={styles.tagHeader}>
          過去の視聴のジャンル
          <Tags
            tags = {this.state.pastTag}
          />
        </div>
        <div style={styles.main}>

          <div style={styles.left}>
            <div style={styles.movie}>
                <YoutubePlayer
                  url = {this.state.movies[0].url}
                  title = {this.state.movies[0].title}
                  description = {this.state.movies[0].description}
                  count = {this.state.movies[0].count}
                />
            </div>
          </div>

          <div style={styles.right}>
            <h3 style={styles.textH3}>おすすめのジャンル</h3>
            <Tags
              tags = {this.state.recommendTag}
              style = {styles.Recommended}
            />
            <h3 style={styles.textH3}>おすすめの動画</h3>
            <SideMovies 
              movies = {this.state.demoMovie}
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
    backgroundColor: '#fff',
  },
  left: {
    marginTop:'20px',
    width: '1000px',
  },
  right: {
    textAlign: 'left',
    widht: '200px',
  },
  Recommended: {
    width: 'auto',
  },
  tagHeader: {
    height: '35px',
    marginTop: '64px',
    padding: '.5em 1em',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '18px',
    backgroundColor: '#233',
  },
  textH3: {
    padding: '.5em',
    textFamily: 'Noto Serif TC, serif',
  }
  // movie: {
  //   width: '90%',
  //   height: '500px',
  //   margin: '2em auto',
  //   backgroundColor: '#fff',
  // },
}

export default ViewMovie;
