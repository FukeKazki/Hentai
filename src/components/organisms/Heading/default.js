import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Heading = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <div className={classes.left}>
                <h3>それは未知との遭遇<br/>新たなる価値観を養う</h3>
                <Button>クイズを開始する</Button>
            </div>
            <div className={classes.right}>
                <h3>ここにLIVE2D</h3>
            </div>
        </div>
    );
}

const styles = theme => ({
    root: {
        padding: '2em',
        display: 'flex',
        backgroundColor: '#ddd',
    },
    left: {
        height: '300px',
        width: '50%',
    },
    right: {
        height: '300px',
        width: '50%',
        backgroundColor: '#fff',
    },
});

export default withStyles(styles)(Heading);