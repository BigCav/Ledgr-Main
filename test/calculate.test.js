function calculatePay(hours, rate) {
  const gross = hours * rate;
  const tax = gross * 0.2; // simplified 20% PAYE
  const net = gross - tax;
  return {gross, tax, net};
}

const assert = require('assert');

const result = calculatePay(40, 30); // 40 hours at $30/hr
assert.strictEqual(result.gross, 1200);
assert.strictEqual(result.tax, 240);
assert.strictEqual(result.net, 960);

console.log('All tests passed');
