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

const data =[
  {
    id: 1,
    eGift: true,
    dateTime: '2020-04-28T07:47:47.737Z',
    custID: 21,
    expensesCat: 'Shopping',
    amount: 30.5,
    message: 'Thanks. :)',
    payeeID: 24
  },
  {
    id: 2,
    eGift: false,
    dateTime: '2020-04-02T15:42:50.829Z',
    custID: 21,
    expensesCat: 'Food',
    amount: 5.38,
    message: '',
    payeeID: 14
  },
  {
    id: 3,
    eGift: true,
    dateTime: '2020-08-08T07:36:35.897Z',
    custID: 21,
    expensesCat: 'Entertainment',
    amount: 756.56,
    message: 'Thanks. :)',
    payeeID: 5
  },
  {
    id: 4,
    eGift: false,
    dateTime: '2020-05-08T22:45:32.274Z',
    custID: 21,
    expensesCat: 'Entertainment',
    amount: 437.38,
    message: '',
    payeeID: 3
  },
  {
    id: 5,
    eGift: true,
    dateTime: '2019-12-09T13:16:39.388Z',
    custID: 21,
    expensesCat: 'Insurance',
    amount: 476.55,
    message: 'Thanks. :)',
    payeeID: 22
  },
  {
    id: 6,
    eGift: false,
    dateTime: '2020-04-20T18:34:30.993Z',
    custID: 17,
    expensesCat: 'Transport',
    amount: 100.62,
    message: '',
    payeeID: 21
  },
  {
    id: 7,
    eGift: false,
    dateTime: '2019-12-10T05:17:47.503Z',
    custID: 1,
    expensesCat: 'Shopping',
    amount: 630.56,
    message: '',
    payeeID: 21
  },
  {
    id: 8,
    eGift: false,
    dateTime: '2019-12-11T21:21:05.019Z',
    custID: 21,
    expensesCat: 'Transport',
    amount: 683.55,
    message: '',
    payeeID: 24
  },
  {
    id: 9,
    eGift: false,
    dateTime: '2020-01-09T06:01:41.813Z',
    custID: 19,
    expensesCat: 'Insurance',
    amount: 474.74,
    message: '',
    payeeID: 21
  },
  {
    id: 10,
    eGift: true,
    dateTime: '2020-05-10T19:08:19.426Z',
    custID: 3,
    expensesCat: 'Food',
    amount: 69.76,
    message: 'Thanks. :)',
    payeeID: 21
  }
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
                    {order.dateTime}
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
