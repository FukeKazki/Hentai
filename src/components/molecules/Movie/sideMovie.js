import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom';

const sideMovie = props => {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <Link
                to='/movie'
                className={classes.link}
            >
                <CardActionArea className={classes.area}>
                    <CardMedia
                        className={classes.media}
                        title={props.title}
                    />
                    <CardContent className={classes.content}>
                        <div className={classes.top}>
                            <Typography gutterBottom variant="p" content="p" className={classes.title}>
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
            </Link>
        </Card>
    );
}

const styles = theme => ({
    card: {
        display: 'flex',
        width: '400px',
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
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
    },
    link: {
        textDecoration: 'none',
    }
});

export default withStyles(styles)(sideMovie);