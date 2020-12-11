import React, {useState} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
// import {withRouter} from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles, Card, CardContent
} from '@material-ui/core';
import Page from 'src/components/Page';
import Auth from 'src/views/auth/Auth';
import api from 'src/api/base-api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const background = {
  position: "fixed",
  top: "0",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundImage:
    "url(" +
    "https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" +
    ")",
  opacity: 0.7,
};



const LoginView = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url = "";
  // const handleChange = (name) => (event) => {
  //   this.setState({ [name]: event.target.value });
  // };
  
  const classes = useStyles();
  const navigate = useNavigate();

  function handleSubmit (e) {

    e.preventDefault();   
     console.log(`username : ${username} , password : ${password}`);
     api.postLogin();
    //  console.log(api.postLogin());
    //          Auth.login(() => {
    //       history.push("/home");
    //     });
  };

  return (
    <Page
      style = {background}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" >
        <Card>
          <CardContent>
          <Formik
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              handleBlur,
              handleChange,
            }) => (
              <form>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Login
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  mb={1}
                >
                </Box>
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  type="username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    // console.log("Value : ", e.target.value);
                    setUsername(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
          </CardContent>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

// LoginView.propTypes = {
//   match: PropTypes.object.isRequired,
// };

// export default withRouter(LoginView);

export default LoginView;
