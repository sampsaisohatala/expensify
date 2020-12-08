import moment from 'moment';

/// Dummy data for testing

// eslint-disable-next-line import/no-anonymous-default-export
export default [
   {
      id: 'id1',
      description: 'Coffee',
      note: '',
      amount: 195,
      createdAt: 0,
   },
   {
      id: 'id2',
      description: 'Rent',
      note: 'note',
      amount: 295000,
      createdAt: moment(0).add(4, 'days').valueOf(),
   },
   {
      id: 'id3',
      description: 'Car',
      note: '',
      amount: 6000,
      createdAt: moment(0).add(12, 'days').valueOf(),
   },
];
