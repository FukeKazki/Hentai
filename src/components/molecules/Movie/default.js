import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Movie = props => {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" content="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const styles = theme => ({
    card: {
        width: '200px',
        height: '150px',
        marginRight: '5px',
	    marginBottom: '5px',
    }
});

export default withStyles(styles)(Movie);