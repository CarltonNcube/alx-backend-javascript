const request = require('request');
const expect = require('chai').expect;
const app = require('./api.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return correct result for index page', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct result for cart route', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return correct result for different cart id', (done) => {
    request('http://localhost:7865/cart/99', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 99');
      done();
    });
  });

  it('should return status code 200 for cart route', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

