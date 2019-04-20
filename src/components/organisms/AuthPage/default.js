import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      }
    }
  render(){
    return(
		  <div style={styles.authContainer}>
        <div>
        <Button style={styles.noSelected}>新規登録</Button>
        <Button style={styles.Selected}>ログイン</Button>
        </div>
        <TextField
          id="filled-email-input"
          label="Email"
          style={styles.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          style={styles.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" style={styles.button}>
          ログイン
        </Button>
		  </div>
	  );
  }
}

const styles = {
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
    height: "50px",
    width: "25%",
    color: "#fff",
    fontSize: "20px",
    background: "#C400FF",
  }
};

export default (props)=> <AuthPage style={styles}{...props}/>;