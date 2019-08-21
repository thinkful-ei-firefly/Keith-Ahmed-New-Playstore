const {genreFilter} = require('../app');
const expect = require('chai').expect;
const dummyData =[
  {'Genres': 'Action & Adventure'},
  {'Genres': 'Adventure;Action & Adventure'},
  {'Genres': 'Action & Adventure'},
  {'Genres': 'Adventure;Action'},
  {'Genres': 'Adventure & Adventure'},
  {'Genres': 'Adventure;Action & Adventure'},
  {'Genres': 'Adventure'},
];

describe('Test of Genre filter', () => {
  it('filters to only action games', () => {
    const test = genreFilter("Action",dummyData);
    expect(test).to.deep.equal([ 
      {'Genres': 'Action & Adventure'},
      {'Genres': 'Adventure;Action & Adventure'},
      {'Genres': 'Action & Adventure'},
      {'Genres': 'Adventure;Action'},
      {'Genres': 'Adventure;Action & Adventure'}])
  });
});
