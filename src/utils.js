// Simple Complex number class
export class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }
  add(c) {
    return new Complex(this.re + c.re, this.im + c.im);
  }
  mul(c) {
    return new Complex(
      this.re * c.re - this.im * c.im,
      this.re * c.im + this.im * c.re
    );
  }
  magnitude() {
    return Math.sqrt(this.re ** 2 + this.im ** 2);
  }
  conjugate() {
    return new Complex(this.re, -this.im);
  }
}

// Multiply matrix (array of arrays) by vector
export function matVecMul(matrix, vector) {
  return matrix.map(row =>
    row.reduce((acc, val, i) => acc.add(val.mul(vector[i])), new Complex(0, 0))
  );
}
