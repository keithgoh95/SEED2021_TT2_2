import React from 'react';
import { Box, Card, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

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
  const testAmount = 42.0;
  return (
    <Page className={classes.root} title="Transaction">
      <Container maxWidth={false}>
        <Box mt={3} fontSize="30px" justifyContent="Center">
          <Card>Balance: ${testAmount}</Card>
        </Box>
      </Container>
    </Page>
  );
};

export default BalanceView;
