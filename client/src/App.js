import React, { Component } from 'react';
import router from './Routers/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
