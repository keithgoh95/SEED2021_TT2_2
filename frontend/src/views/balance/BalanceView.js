import React from 'react';
import { Box, Card, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import api from 'src/api/base-api';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const BalanceView = () => {
  const classes = useStyles();
  const custID = api.postLogin().custID;
  const balAmount = api.getUserAccountDetails()[custID].availableBal;
  const testAmount = 42.34;
  return (
    <Page className={classes.root} title="Transaction">
      <Container maxWidth={false}>
        <Box mt={3} fontSize="30px" justifyContent="Center" alignItems="center">
          <h1>Balance</h1>
          <br></br>

          <Card align="center" fontSize="45">
            $ {balAmount}
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

export default BalanceView;
