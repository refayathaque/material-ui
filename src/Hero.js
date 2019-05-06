import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F46036',
    },
    secondary: {
      main: '#171123',
    }
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  }
});

const Hero = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="h5" align="center" color="secondary" paragraph>
          A cute sports guy that happens to love coding, optimizing infrastructure, and building CI/CD pipelines. Don&apos;t let him pass you by.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Leave a message
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Check out my LinkedIn
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    </MuiThemeProvider>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
