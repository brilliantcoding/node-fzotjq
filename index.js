// run `node index.js` in the terminal
const { isNil, isEmpty } = require('ramda');

const test = true;

const { one } = test ?? 'c';

console.log('one: ', one);

const tokens = [
  {
    key: 'value',
    value: '1'
  }
];

let releaseStatus = [
  { value: '3', label: 'Complete' },
  { value: '5', label: 'Correction Received' },
  { value: '0', label: 'ISIR Not Received' },
  { value: '4', label: 'In Process' },
  { value: '1', label: 'Not Released' },
  { value: '2', label: 'Released' }
];
releaseStatus = null;
// [{ token: '$$value$$', value }]
const getTokenArray = (tokens, releaseStatus) =>
  tokens.map(token => {
    if (!isEmpty(releaseStatus)) {
      return (
        releaseStatus &&
        releaseStatus
          .filter(status => status.value === token.value)
          .map(ele => {
            return {
              token: `$$${token.key}$$`,
              value: ele.label
            };
          })
          .reduce(e => e)
      );
    }

    return {
      token: `$$${token.key}$$`,
      value: token.value
    };
  });

console.log('result: ', getTokenArray(tokens, releaseStatus));

/*const getTokenArray = (tokens, releaseStatus) =>
  tokens.map(token => {
    return releaseStatus
      .filter(status => status.value === token.value)
      .map(ele => {
        const key = `${token.key}`;
        return {
          token: `$$${key}$$`,
          value: ele.label
        };
      })
      .reduce(e => e);
  });
  */
const getTokenArray1 = tokens =>
  tokens.map(token => {
    const { codeLookup = '' } = token;
    const codeLookups =
      Util.getOptionsForCBSelectFromCodeLookup(codeLookupMap, codeLookup) ?? [];

    if (!isEmpty(codeLookups)) {
      return codeLookups
        .filter(status => status.value === token.value)
        .map(ele => {
          return {
            token: `$$${token.key}$$`,
            value: ele.label
          };
        })
        .reduce(e => e);
    }
    return {
      token: `$$${token.key}$$`,
      value: token.value
    };
  });
