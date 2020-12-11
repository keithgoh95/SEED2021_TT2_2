import React from 'react';
import { Box, Card, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

const GETREWARD_API_URL = 'http://localhost:5000/GetPoint'
const TEST_ID = 'TEST'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const GetRewardScore = () => {
	const response = fetch(GETREWARD_API_URL,{
		method: 'POST',
		headers: {
			'Accept':       'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({custID:TEST_ID})
	});
	//const content = response.json();
	return 1;
}
const RewardsView = () => {
  const classes = useStyles();
  const testAmount = 42.0;
  return (
    <Page className={classes.root} title="Transaction">
      <Container maxWidth={false}>
        <Box mt={3} fontSize="30px" justifyContent="Center">
          <Card>Reward Points: {GetRewardScore()} Points</Card>
        </Box>
      </Container>
    </Page>
  );
};

export default RewardsView;
