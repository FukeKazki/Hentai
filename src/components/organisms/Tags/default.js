import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Tag from '../../molecules/Tag/default';

const Tags = props => {
    const { classes } = props;
    return(
        <div className={classes.root}>
                <ul className={classes.lists}>
                    {
                        props.tags.map(tag => (
                            <li className={classes.list}>
                                <Tag
                                    label={tag.title}     
                                />
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
}

const styles = theme => ({
    root: {
        // backgroundColor: '#fff',
        padding: '0 2em',
    },
    lists: {
        display: 'flex',
    },
    list: {
        listStyle: 'none',
    }
});

export default withStyles(styles)(Tags);