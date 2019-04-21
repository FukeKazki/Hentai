import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render(){
		return(
			<div>
				<AppBar position="fixed" style={styles.appBar}>
					<Toolbar>
						<NavLink to='/' style={styles.link}>
							<Typography variant="title" style={styles.title} >
								Erotic's culture
							</Typography>
						</NavLink>
						<div style={styles.grow} />
						<div style={styles.search}>
							<div className={styles.searchIcon}>
							<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								styles={{
									root: styles.inputRoot,
								input: styles.inputInput,
								}}
							/>
						</div>
					<Button style={styles.button} onClick={this.props.authToggle}>ログイン</Button>
					<Button style={styles.button} onClick={this.props.authToggle}>新規登録</Button>
				</Toolbar>
			</AppBar>
		</div>
		);
	}
}

const styles = {
	appBar: {
		zIndex: 9999,
	},
	grow: {
		flexGrow: 1,
	},
	search: {
		display: 'flex',
		position: 'relative',
		marginLeft: 0,
		width: '400px',
	},
	searchIcon: {
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
		width: '100%',
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
};

export default (props)=> <Header style={styles}{...props}/>;