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
        <Heading />
      </div>
    );
  }
}

export default Home;
