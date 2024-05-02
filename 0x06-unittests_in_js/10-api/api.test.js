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

  it('should return correct result for available_payments route', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('should return correct result for login route', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Json'
      }
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Json');
      done();
    });
  });
});

