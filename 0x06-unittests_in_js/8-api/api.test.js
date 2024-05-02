const request = require('request');
const expect = require('chai').expect;
const app = require('./api.js');

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return content-type as text/html', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.contain('text/html');
      done();
    });
  });

  it('should return response time within 500ms', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.elapsedTime).to.be.below(500);
      done();
    });
  });
});
