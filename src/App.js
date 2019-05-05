import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import "App.css";
import ButtonAppBar from 'ButtonAppBar';
import Hero from 'Hero';

// const App = () => {
export default () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <ButtonAppBar />
        <Hero />
      </div>
    </React.Fragment>
  )
}

// export default App;
