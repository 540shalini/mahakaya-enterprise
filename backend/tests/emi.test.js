import test from 'node:test';import assert from 'node:assert/strict';import { calculateEmi } from '../src/utils/emi.js';
test('calculates EMI accurately',()=>{const result=calculateEmi(500000,12,60);assert.equal(result.monthlyEmi,11122);assert.equal(result.totalAmount,667333);assert.equal(result.totalInterest,167333);});
