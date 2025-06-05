import { Complex } from './utils.js';
import { matVecMul } from './utils.js';

export class Qubit {
  constructor(alpha = new Complex(1,0), beta = new Complex(0,0)) {
    this.state = [alpha, beta];
    this.normalize();
  }

  normalize() {
    const mag = Math.sqrt(
      this.state[0].magnitude()**2 + this.state[1].magnitude()**2
    );
    this.state = this.state.map(c => new Complex(c.re/mag, c.im/mag));
  }

  applyGate(gate) {
    this.state = matVecMul(gate, this.state);
    this.normalize();
  }

  measure() {
    const p0 = this.state[0].magnitude() ** 2;
    const r = Math.random();
    if (r < p0) {
      this.state = [new Complex(1,0), new Complex(0,0)];
      return 0;
    } else {
      this.state = [new Complex(0,0), new Complex(1,0)];
      return 1;
    }
  }

  getProbabilities() {
    return this.state.map(c => c.magnitude()**2);
  }
}
