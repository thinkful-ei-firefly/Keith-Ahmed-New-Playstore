const { app } = require("../app");
const expect = require("chai").expect;
const request = require('supertest');

describe('Server handles appropriately', () => {
  it('Respond on a call to /apps', () => {
      return request(app)
      .get('/apps')
      .expect(200);
  });
  it('handles innapropriate sort correctly', () => {
    return request(app)
    .get('/apps')
    .query({'sort': 1})
    .expect(400);
  });
  it('handles innapropriate genre correctly', () => {
    return request(app)
    .get('/apps')
    .query({'genres': 1})
    .expect(400);
  });
});