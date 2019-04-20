import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const sideMovie = props => {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardActionArea className={classes.area}>
                <CardMedia
                    className={classes.media}
                    title={props.title}
                />
                <CardContent className={classes.content}>
                    <div className={classes.top}>
                        <Typography gutterBottom variant="p" content="p">
                            {props.title}
                        </Typography>
                        <Typography component="p">
                            再生回数{props.count}
                        </Typography>
                    </div>
                    <div className={classes.bottom}>
                        <Typography component="p">
                            {props.description}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const styles = theme => ({
    card: {
        display: 'flex',
        width: '300px',
	    marginBottom: '10px',
    },
    area: {
        display: 'flex',
    },
    media: {
        width: '200px',
        height: '150px',
        backgroundColor: 'blue',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
    },
    top: {
        display: 'flex',
    },
});

export default withStyles(styles)(sideMovie);