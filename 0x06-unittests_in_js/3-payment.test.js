const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber for SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });

  it('should use Utils.calculateNumber for SUBTRACT', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, -20);
    expect(calculateNumberSpy.calledWith('SUM', 100, -20)).to.be.true;
    calculateNumberSpy.restore();
  });

  it('should use Utils.calculateNumber for DIVIDE', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 0.5);
    expect(calculateNumberSpy.calledWith('SUM', 100, 0.5)).to.be.true;
    calculateNumberSpy.restore();
  });

  it('should handle division by zero', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 0);
    expect(calculateNumberSpy.calledWith('SUM', 100, 0)).to.be.true;
    calculateNumberSpy.restore();
  });
});

