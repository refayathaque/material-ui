import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import "App.css";
import ButtonAppBar from 'ButtonAppBar';

// const App = () => {
export default () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        <ButtonAppBar />
      </div>
    </React.Fragment>
  )
}

// export default App;
