import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ClippedDrawer = props => {
	const { classes } = props;
	return(
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
				paper: classes.drawerPaper,
				}}
			>
				<div className={classes.toolbar} />
				<List>
				{['ホーム', '急上昇', '登録サイト', '殿堂入り'].map((text, index) => (
					<ListItem button key={text}>
					<p>></p>
					<ListItemText primary={text} />
					</ListItem>
				))}
				</List>
				<Divider />
				<List>
				{['クイズ', '過去の回答'].map((text, index) => (
					<ListItem button key={text}>
					<p>></p>
					<ListItemText primary={text} />
					</ListItem>
				))}
				</List>
				<Divider />
				<List>
				{['ライブラリ', '履歴', '後で見る', '高く評価した動画'].map((text, index) => (
					<ListItem button key={text}>
					<p>></p>
					<ListItemText primary={text} />
					</ListItem>
				))}
				</List>
			</Drawer>
		</div>
	);
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  cards: {
	display: 'flex',
	flexWrap: 'wrap',
  },
  card: {
	  width: '300px',
	  height: '200px',
	  marginRight: '5px',
	  marginBottom: '5px',
  },

});

export default withStyles(styles)(ClippedDrawer);