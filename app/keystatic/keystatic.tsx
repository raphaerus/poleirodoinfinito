'use client';

import { makePage } from '@keystatic/next/ui/app';
import config from '../../keystatic.config';

// Polyfill para crypto.subtle.digest em contextos HTTP (ex: acessando via IP de rede local)
/* eslint-disable @typescript-eslint/no-explicit-any */
if (typeof window !== 'undefined') {
  if (!window.crypto) {
    (window as any).crypto = {};
  }
  if (!window.crypto.subtle) {
    (window.crypto as any).subtle = {};
  }
  if (!window.crypto.subtle.digest) {
    const sha1 = (data: BufferSource): ArrayBuffer => {
      const bytes = data instanceof Uint8Array ? data : new Uint8Array(data as ArrayBuffer);
      let h0 = 0x67452301,
        h1 = 0xefcdab89,
        h2 = 0x98badcfe,
        h3 = 0x10325476,
        h4 = 0xc3d2e1f0;
      const l = bytes.length;
      const words: number[] = [];
      for (let i = 0; i < l; i++) {
        words[i >> 2] = (words[i >> 2] || 0) | (bytes[i] << (24 - (i % 4) * 8));
      }
      words[l >> 2] = (words[l >> 2] || 0) | (0x80 << (24 - (l % 4) * 8));
      const newLen = (((l + 8) >> 6) + 1) * 16;
      for (let i = words.length; i < newLen; i++) words[i] = 0;
      words[newLen - 1] = l * 8;
      words[newLen - 2] = Math.floor((l * 8) / 0x100000000);

      const w = new Int32Array(80);
      for (let i = 0; i < newLen; i += 16) {
        for (let j = 0; j < 16; j++) w[j] = words[i + j];
        for (let j = 16; j < 80; j++) {
          const x = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
          w[j] = (x << 1) | (x >>> 31);
        }
        let a = h0,
          b = h1,
          c = h2,
          d = h3,
          e = h4;
        for (let j = 0; j < 80; j++) {
          let f, k;
          if (j < 20) {
            f = (b & c) | (~b & d);
            k = 0x5a827999;
          } else if (j < 40) {
            f = b ^ c ^ d;
            k = 0x6ed9eba1;
          } else if (j < 60) {
            f = (b & c) | (b & d) | (c & d);
            k = 0x8f1bbcdc;
          } else {
            f = b ^ c ^ d;
            k = 0xca62c1d6;
          }
          const temp = (((a << 5) | (a >>> 27)) + f + e + k + w[j]) | 0;
          e = d;
          d = c;
          c = (b << 30) | (b >>> 2);
          b = a;
          a = temp;
        }
        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0;
      }
      const res = new Uint8Array(20);
      const dv = new DataView(res.buffer);
      dv.setUint32(0, h0, false);
      dv.setUint32(4, h1, false);
      dv.setUint32(8, h2, false);
      dv.setUint32(12, h3, false);
      dv.setUint32(16, h4, false);
      return res.buffer;
    };

    const sha256 = (data: BufferSource): ArrayBuffer => {
      const bytes = data instanceof Uint8Array ? data : new Uint8Array(data as ArrayBuffer);
      const K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
        0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
        0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
        0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
        0xc67178f2,
      ];
      let h0 = 0x6a09e667,
        h1 = 0xbb67ae85,
        h2 = 0x3c6ef372,
        h3 = 0xa54ff53a,
        h4 = 0x510e527f,
        h5 = 0x9b05688c,
        h6 = 0x1f83d9ab,
        h7 = 0x5be0cd19;
      const l = bytes.length;
      const words: number[] = [];
      for (let i = 0; i < l; i++) {
        words[i >> 2] = (words[i >> 2] || 0) | (bytes[i] << (24 - (i % 4) * 8));
      }
      words[l >> 2] = (words[l >> 2] || 0) | (0x80 << (24 - (l % 4) * 8));
      const newLen = (((l + 8) >> 6) + 1) * 16;
      for (let i = words.length; i < newLen; i++) words[i] = 0;
      words[newLen - 1] = l * 8;
      words[newLen - 2] = Math.floor((l * 8) / 0x100000000);

      const w = new Int32Array(64);
      const rr = (x: number, n: number) => (x >>> n) | (x << (32 - n));
      for (let i = 0; i < newLen; i += 16) {
        for (let j = 0; j < 16; j++) w[j] = words[i + j];
        for (let j = 16; j < 64; j++) {
          const s0 = rr(w[j - 15], 7) ^ rr(w[j - 15], 18) ^ (w[j - 15] >>> 3);
          const s1 = rr(w[j - 2], 17) ^ rr(w[j - 2], 19) ^ (w[j - 2] >>> 10);
          w[j] = (((w[j - 16] + s0) | 0) + ((w[j - 7] + s1) | 0)) | 0;
        }
        let a = h0,
          b = h1,
          c = h2,
          d = h3,
          e = h4,
          f = h5,
          g = h6,
          h = h7;
        for (let j = 0; j < 64; j++) {
          const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
          const ch = (e & f) ^ (~e & g);
          const temp1 = ((((h + S1) | 0) + ch) | 0) + ((K[j] + w[j]) | 0);
          const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
          const maj = (a & b) ^ (a & c) ^ (b & c);
          const temp2 = (S0 + maj) | 0;
          h = g;
          g = f;
          f = e;
          e = (d + temp1) | 0;
          d = c;
          c = b;
          b = a;
          a = (temp1 + temp2) | 0;
        }
        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0;
        h5 = (h5 + f) | 0;
        h6 = (h6 + g) | 0;
        h7 = (h7 + h) | 0;
      }
      const res = new Uint8Array(32);
      const dv = new DataView(res.buffer);
      dv.setUint32(0, h0, false);
      dv.setUint32(4, h1, false);
      dv.setUint32(8, h2, false);
      dv.setUint32(12, h3, false);
      dv.setUint32(16, h4, false);
      dv.setUint32(20, h5, false);
      dv.setUint32(24, h6, false);
      dv.setUint32(28, h7, false);
      return res.buffer;
    };

    (window.crypto.subtle as any).digest = async function (
      algorithm: string | { name: string },
      data: BufferSource
    ): Promise<ArrayBuffer> {
      const name = typeof algorithm === 'string' ? algorithm.toUpperCase() : algorithm?.name?.toUpperCase();
      if (name === 'SHA-1') {
        return sha1(data);
      }
      if (name === 'SHA-256') {
        return sha256(data);
      }
      throw new Error(`Unsupported digest algorithm: ${name}`);
    };
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export default makePage(config);
