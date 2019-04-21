import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';

import { NavLink } from 'react-router-dom';

const Header = props => {
	const { classes } = props;
	return(
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<NavLink to='/' className={classes.link}>
						<Typography variant="title" className={classes.title} >
							Erotic's culture
						</Typography>
					</NavLink>
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
						<SearchIcon />
						</div>
						<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						/>
					</div>
					<Button className={classes.button} onClick={props.authToggle}>ログイン</Button>
					<Button className={classes.button} onClick={props.authToggle}>新規登録</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const styles = theme => ({
	appBar: {
		zIndex: 9999,
	},
	grow: {
		flexGrow: 1,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
			width: 200,
			},
		},
	},
	button: {
		color: '#fff',
		marginLeft: '2em',
	},
	title: {
		color: '#fff',
	},
	link: {
		textDecoration: 'none',
	},
});

export default withStyles(styles)(Header);