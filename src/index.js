import { Qubit } from './qubit.js';
import { HADAMARD, PAULI_X } from './gates.js';

const q = new Qubit(); // starts in |0⟩

console.log('Initial probs:', q.getProbabilities());

q.applyGate(HADAMARD);

console.log('After Hadamard:', q.getProbabilities());

const result = q.measure();

console.log('Measurement result:', result);
console.log('Post-measure probs:', q.getProbabilities());
