import React from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';

const YoutubePlayer = props => {
    const { classes } = props;
    return(
        <div className={classes.playerWrapper}>
            <ReactPlayer
                className={classes.reactPlayer}
                url='https://youtu.be/t5r0rNwjXQU'
                width='100%'
                height='100%'
            />
        </div>
    );
}

const styles = theme => ({
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%',
        // width: '900px',
        // margin: '0 auto',
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default withStyles(styles)(YoutubePlayer);