import React, { Component } from 'react';

import Header from '../organisms/Header/default';
import Sidebar from '../organisms/Sidebar/default';
import Heading from '../organisms/Heading/default';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Sidebar />
        <div style={styles.main}>
          <Heading />
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
