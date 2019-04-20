import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = props => {
	const { classes } = props;
	return(
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="title">
						Erotic's culture
					</Typography>
					<Button>ログイン</Button>
					<Button>新規登録</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const styles = theme => ({
	appBar: {
		zIndex: 9999,
	}
});

export default withStyles(styles)(Header);