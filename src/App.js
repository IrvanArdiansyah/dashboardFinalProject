import React, { Component } from 'react';
import Sidemenu from './komponen/sidemenu';
import Hub from './hubs/hubs'
import Navbar from './komponen/navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
        <Navbar/>
          <div className="row">
            <div className="col-xl-1">
              <Sidemenu/>
            </div>
            <div className="col-xl-11">
              <Hub/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
