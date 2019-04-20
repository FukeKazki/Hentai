import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Movie from '../../molecules/Movie/default';

const HomeMovies = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <h3>{props.articleTitle}</h3>
            <div>
                <ul className={classes.lists}>
                    {
                        props.movies.map(movie => (
                            <li key={movie.id} className={classes.list}>
                                <Movie
                                    title={movie.title}
                                    description={movie.description}
                                    count={movie.count}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Button>もっと見る</Button>
        </div>
    );
}

const styles = theme => ({
    root: {
        padding: '2em',
        // display: 'flex',
        backgroundColor: '#ccc',
    },
    lists: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    list: {
        listStyle: 'none',
    }
});

export default withStyles(styles)(HomeMovies);