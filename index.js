const {
  prop,
  sort,
  sortWith,
  ascend,
  descend,
  isEmpty,
  isNil
} = require('ramda');
const students = [
  { name: 'Quentin', studentBid: '1', formula: 1, efc: 0, originalNeed: 9500 },
  { name: 'Eliot', studentBid: '2', formula: 1, efc: 500, originalNeed: 10000 },
  { name: 'Margo', studentBid: '3', formula: 2, efc: 1500, originalNeed: 9500 },
  { name: 'Julia', studentBid: '4', formula: 2, efc: 1000, originalNeed: 9000 },
  { name: 'Kady', studentBid: '5', formula: 3, efc: 0, originalNeed: 1000 },
  { name: 'Penny', studentBid: '6', formula: 4, efc: 500, originalNeed: 8000 }
];

const sorted = sortWith(
  [descend(prop('formula')), ascend(prop('efc'))],
  students
);
console.log('sorted: ', sorted);

const payload = {
  elasticPropName: null,
  elasticPropMapping: 'text',
  selectionSetBids: ['bid`'],
  returnFields: [],
  searchBy: {}
};
const isEmptyOrNull = args => {
  if (isEmpty(args) || isNil(args)) {
    throw new Error('Empty or null parameters values found');
  }
};
isEmptyOrNull(payload.elasticPropName);
