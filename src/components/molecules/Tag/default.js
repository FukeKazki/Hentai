import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const Tag = props => {
    const { classes } = props;
    return(
        <Chip
            label = {props.label}
            className = {classes.aTag}
        />
    );
}

const styles = theme => ({
    aTag: {
        backgroundColor: '#9800FF',
        color: 'white',
        fontWeight: "bold",
    }
});

export default withStyles(styles)(Tag);