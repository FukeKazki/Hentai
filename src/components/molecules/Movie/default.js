import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom';

const Movie = props => {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <Link 
                to='/movie'
                className={classes.link}
            >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title={props.title}
                        image={props.image}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" content="h5">
                            {props.title}
                        </Typography>
                        <Typography component="p">
                            再生回数{props.count}
                        </Typography>
                    </CardContent>
                </CardActionArea>
			</Link>
        </Card>
    );
}

const styles = theme => ({
    card: {
        width: '200px',
        height: '150px',
        marginRight: '10px',
	    marginBottom: '10px',
    },
    media: {
        // width: '200px',
        height: '100px',
        // backgroundColor: 'blue',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
    },
});

export default withStyles(styles)(Movie);