import React, { Component } from 'react';

import Header from '../organisms/Header/default';
import Sidebar from '../organisms/Sidebar/default';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
