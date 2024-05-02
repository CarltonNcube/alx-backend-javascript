const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return resolved promise when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should not return a promise when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done();
  });

  it('should return a promise when success is true', (done) => {
    const result = getPaymentTokenFromAPI(true);
    expect(result).to.be.a('promise');
    done();
  });

  it('should resolve to an object with a data property when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data');
        done();
      })
      .catch((error) => done(error));
  });

  it('should resolve to an object with the correct message when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => done(error));
  });
});
