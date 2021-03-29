/// <reference path="../Extensions/Math/prime.ts" />

/**
 * Basic implementation of the Diffie-Hellman key exchange
 */
class DiffieHellman {
  private privateKey: bigint;
  private prime: bigint;
  private generator: bigint;
  private sharedKey?: bigint = undefined;

  constructor(prime?: bigint, generator?: bigint) {
    if (prime && generator) {
      this.prime = prime;
      this.generator = generator;

      let buffer = new Uint32Array(2);
      crypto.getRandomValues(buffer);
      this.privateKey = BigInt(buffer[0]) * BigInt(buffer[1]);
    } else {
      let buffer = new Uint32Array(8);
      crypto.getRandomValues(buffer);

      this.prime = Math.nextPrime(
        BigInt(buffer[0]) * BigInt(buffer[1]) * BigInt(buffer[2])
      );
      this.generator =
        BigInt(buffer[3]) * BigInt(buffer[4]) * BigInt(buffer[5]);
      this.privateKey = BigInt(buffer[6]) * BigInt(buffer[7]);
    }
  }

  getPublicKey(): bigint {
    let pow = this.generator;
    for (let i = 1; i < this.privateKey; i++) {
      pow *= this.generator;
    }
    return pow % this.prime;
  }

  getPrime(): bigint {
    return this.prime;
  }

  getGenerator(): bigint {
    return this.generator;
  }

  setPartnersPublicKey(key: bigint) {
    let pow = key;
    for (let i = 1; i < this.privateKey; i++) {
      pow *= key;
    }

    this.sharedKey = pow % this.prime;
  }

  getSharedKey(): bigint | undefined {
    return this.sharedKey;
  }
}
