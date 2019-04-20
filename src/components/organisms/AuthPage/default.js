import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AuthPage = props => {
	const { classes } = props;
	return(
		<div className={classes.authContainer}>
        <div>
        <Button className={classes.noSelected}>新規登録</Button>
        <Button className={classes.Selected}>ログイン</Button>
        </div>
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" className={classes.button}>
          ログイン
        </Button>
		</div>
	);
}

const styles = theme => ({
	authContainer: {
    position: "fixed",
    background: "rgba( 0, 0, 0, 0.85 )",
    height: "100%",
    width: "100%",
    zIndex: "10000",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: "#fff",
    width: "25%",
  },
  Selected: {
    marginLeft: "60px",
    marginRight: "60px",
    marginButtom: "60px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#C400FF"
  },
  noSelected: {
    marginLeft: "60px",
    marginRight: "60px",
    marginButtom: "60px",
    fontSize: "20px",
    color: "#fff"
  },
  button: {
    margin: theme.spacing.unit,
    height: "50px",
    width: "25%",
    color: "#fff",
    fontSize: "20px",
    background: "#C400FF",
  },
});

export default withStyles(styles)(AuthPage);