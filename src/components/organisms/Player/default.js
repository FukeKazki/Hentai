import React from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import Tags from '../Tags/default';

const YoutubePlayer = props => {
    const taglist = [{tag: 'LIVE2D'},{tag: 'JK'},{tag: '制服'},];
    const { classes } = props;
    return(
        <div>
            <div className={classes.playerWrapper}>
                <ReactPlayer
                    className={classes.reactPlayer}
                    // url='https://youtu.be/t5r0rNwjXQU'
                    url = {props.url}
                    width='100%'
                    height='100%'
                />
            </div>
            <div className={classes.textBox}>
                <h3 className={classes.title}>{props.title}</h3>
                <p className={classes.count}>{props.count}回視聴</p>
                <Tags tags = {taglist}/>
                <p className={classes.description}>{props.description}</p>
            </div>
        </div>
    );
}

const styles = theme => ({
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%',
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    textBox: {
        width: '90%',
        margin: '0 auto',
    },
    title: {
        textAlign: 'left',
    },
    count: {
        textAlign: 'left',
    },
});

export default withStyles(styles)(YoutubePlayer);