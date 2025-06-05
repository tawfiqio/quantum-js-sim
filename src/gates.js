import { Complex } from './utils.js';

const I = [new Complex(1,0), new Complex(0,0)];
const ZERO = new Complex(0,0);

export const HADAMARD = [
  [new Complex(1/Math.sqrt(2),0), new Complex(1/Math.sqrt(2),0)],
  [new Complex(1/Math.sqrt(2),0), new Complex(-1/Math.sqrt(2),0)],
];

export const PAULI_X = [
  [ZERO, new Complex(1,0)],
  [new Complex(1,0), ZERO],
];

export const PAULI_Z = [
  [new Complex(1,0), ZERO],
  [ZERO, new Complex(-1,0)],
];

// 2-qubit CNOT gate matrix (4x4)
export const CNOT = [
  [new Complex(1,0), ZERO, ZERO, ZERO],
  [ZERO, new Complex(1,0), ZERO, ZERO],
  [ZERO, ZERO, ZERO, new Complex(1,0)],
  [ZERO, ZERO, new Complex(1,0), ZERO],
];
