import React, { Component } from 'react';

// import Header from '../organisms/Header/default';

import SideMovies from '../organisms/HomeMovies/sideMovie';

import Tags from '../organisms/Tags/default';

import YoutubePlayer from '../organisms/Player/default';

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
          },
          {
            id: '1',
            title: '動画B',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/MXzFIxF1X30',
            tag: 'タグB',
          },
          {
            id: '2',
            title: '動画C',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグC'
          },
          {
            id: '3',
            title: '動画D',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグD'
          },
          {
            id: '4',
            title: '動画E',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグE'
          },
          {
            id: '5',
            title: '動画F',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグF'
          },
          {
            id: '6',
            title: '動画G',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグG'
          },
          {
            id: '7',
            title: '動画H',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
            tag: 'タグH'
          },
        ],
        demoMovie: [
          {
            id: '7',
            title: 'サイド動画',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
          },
          {
            id: '7',
            title: 'サイド動画',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
          },
          {
            id: '7',
            title: 'サイド動画',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
          },
          {
            id: '7',
            title: 'サイド動画',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
          },
          {
            id: '7',
            title: 'サイド動画',
            description: '動画の説明',
            count: 0,
            url: 'https://youtu.be/t5r0rNwjXQU',
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
          }
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
            <h3>おすすめのジャンル</h3>
            <Tags
              tags = {this.state.recommendTag}
            />
            <h3>おすすめの動画</h3>
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
    backgroundColor: '#ddd',
  },
  left: {
    width: '1000px',
  },
  right: {
    widht: '200px',
  },
  tagHeader: {
    marginTop: '70px',
    padding: '.5em 2em',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  // movie: {
  //   width: '90%',
  //   height: '500px',
  //   margin: '2em auto',
  //   backgroundColor: '#fff',
  // },
}

export default ViewMovie;
