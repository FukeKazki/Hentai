import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const Tag = props => {
    // const { classes } = props;
    return(
        <Chip
            label = {props.label}
            color = "primary"
        />
    );
}

const styles = theme => ({

});

export default withStyles(styles)(Tag);