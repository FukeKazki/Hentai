import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';

const Heading = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <div className={classes.left}>
                <h3>それは未知との遭遇<br/>新たなる価値観を養う</h3>
                <Button>クイズを開始する</Button>
            </div>
            <div className={classes.right}>
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        className={classes.reactPlayer}
                        url='https://youtu.be/1urAlpXhj9k'
                        // url = {props.url}
                        width='100%'
                        height='100%'
                    />
                </div>
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
        display: 'flex',
        height: '300px',
        width: '50%',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        // height: '300px',
        width: '50%',
        // backgroundColor: '#fff',
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%',
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default withStyles(styles)(Heading);