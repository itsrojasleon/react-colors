import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white',
      '& span': {
        backgroundColor: 'yellow',
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>MINI PALETTE</h1>
      <section className={classes.secondary}>
        <h1>
          Hey there! <span>okook</span>
        </h1>
      </section>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
