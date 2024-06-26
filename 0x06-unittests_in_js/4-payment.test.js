const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber for SUM', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should handle negative totalAmount', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(-10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(-100, 20);

    expect(calculateNumberStub.calledWith('SUM', -100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: -10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should handle negative totalShipping', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(-10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, -20);

    expect(calculateNumberStub.calledWith('SUM', 100, -20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: -10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
