import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  { id: 1, payeeID: 'STARBUCKS', date: '1-Jan-2020', amount: 10, eGift: 'No', expensesCat: 'Food' },
  { id: 2, payeeID: 'APPLE', date: '2-Jan-2020', amount: 2300, eGift: 'No', expensesCat: 'Technology' },
  { id: 3, payeeID: 'KOUFU', date: '3-Jan-2020', amount: 5, eGift: 'Yes', expensesCat: 'Food' },
  { id: 4, payeeID: 'EZLINK', date: '4-Jan-2020', amount: 50, eGift: 'No', expensesCat: 'Transport' },
  { id: 5, payeeID: 'SMU', date: '5-Jan-2020', amount: 5000, eGift: 'No', expensesCat: 'Education' },
  { id: 6, payeeID: 'SUSHI EXPRESS', date: '6-Jan-2020', amount: 40, eGift: 'No', expensesCat: 'Food' },
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Recent Transaction" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>
                  Order Ref
                </TableCell> */}
                <TableCell>
                  Payee ID
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.payeeID}
                  </TableCell>
                  <TableCell>
                    {order.date}
                  </TableCell>
                  <TableCell>
                    {order.amount}
                  </TableCell>
                  {/* <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                    />
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
