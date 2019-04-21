import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';

import YoutubePlayer from '../Player/default';

const Heading = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <div className={classes.left}>
                <h3 className={classes.mainText}>それは未知との遭遇<br/>新たなる価値観を養う</h3>
                <Button className={classes.quizButton}>クイズを開始する</Button>
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
        backgroundColor: '#fff',
		border: '#9800FF 1px solid',
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
        //backgroundColor: '#fff',
    },
    mainText: {
        fontWeight: "bold",
        color: "#9800FF",
        fontSize: "40px",
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '70%',
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    quizButton: {
        color: "#9800FF",
        fontWeight: "bold",
        padding: '20px',
        backgroundColor: '#fff',
        border: '#9800FF 3px solid',
    }
});

export default withStyles(styles)(Heading);