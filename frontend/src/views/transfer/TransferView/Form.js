import React, {useState} from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';

export const Form = () => {
    const [payeeIDstate, changePayeeID] = useState('')
    const [categorystate, changeCategory] = useState('')
    const [amount, changeAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(payeeIDstate, categorystate, amount, Date.now());
        changePayeeID('');
        changeCategory('');
        changeAmount(0);
        alert('Payment Successful');
    }

    return (
        <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new payment
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Fill in this form to make new payment
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Payee ID"
                  margin="normal"
                  name="payeeID"
                  onChange={(e)=>changePayeeID(e.target.value)}
                  value={payeeIDstate}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Category"
                  margin="normal"
                  name="expensesCat"
                  onChange={(e)=>changeCategory(e.target.value)}
                  value={categorystate}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Amount"
                  margin="normal"
                  name="amount"
                  onChange={(e)=>changeAmount(e.target.value)}
                  value={amount}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    CONFIRM PAYMENRT
                  </Button>
                </Box>
              </form>
        </Container>
      </Box>
    )
}
