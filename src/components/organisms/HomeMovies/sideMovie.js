import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SideMovie from '../../molecules/Movie/sideMovie';

const HomeMovies = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <div>
                <ul className={classes.lists}>
                    {
                        props.movies.map(movie => (
                            <li key={movie.id} className={classes.list}>
                                <SideMovie
                                    title={movie.title}
                                    description={movie.description}
                                    count={movie.count}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
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
        flexDirection: 'column',
    },
    list: {
        listStyle: 'none',
    }
});

export default withStyles(styles)(HomeMovies);