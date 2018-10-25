import { expect } from 'chai';
import { encoder, decoder } from './rmuiPasswd';

describe('rmuiPasswd', () => {
  describe('with secret string', () => {
    const secret = 'verysecretstring';
    const encode = encoder(secret);
    const decode = decoder(secret);
    describe('encode', () => {
      describe('returns', () => {
        it('null for null', () => {
          const toEncode = null;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(null);
        });
        it('undefined for undefined', () => {
          const toEncode = undefined;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(undefined);
        });
        it('empty string for empty string', () => {
          const toEncode = undefined;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(undefined);
        });
      });
    });
    describe('decode', () => {
      describe('returns', () => {
        it('null for null', () => {
          const toDecode = null;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(null);
        });
        it('undefined for undefined', () => {
          const toDecode = undefined;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(undefined);
        });
        it('empty string for empty string', () => {
          const toDecode = undefined;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(undefined);
        });
      });
    });

    it('properly encode and decode correct data', () => {
      const expected = 'test';
      const value = decode(encode(expected));
      expect(value).to.equal(expected);
    });
  });

  describe('without secret string', () => {
    const secret = undefined;
    const encode = encoder(secret);
    const decode = decoder(secret);
    describe('encode', () => {
      describe('returns', () => {
        it('null for null', () => {
          const toEncode = null;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(null);
        });
        it('undefined for undefined', () => {
          const toEncode = undefined;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(undefined);
        });
        it('empty string for empty string', () => {
          const toEncode = undefined;
          const encoded = encode(toEncode);
          expect(encoded).to.equal(undefined);
        });
        it('not changed password for not empty string', () => {
          const toEncode = 'password';
          const encoded = encode(toEncode);
          expect(encoded).to.equal(toEncode);
        });
      });
    });
    describe('decode', () => {
      describe('returns', () => {
        it('null for null', () => {
          const toDecode = null;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(null);
        });
        it('undefined for undefined', () => {
          const toDecode = undefined;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(undefined);
        });
        it('empty string for empty string', () => {
          const toDecode = undefined;
          const decoded = decode(toDecode);
          expect(decoded).to.equal(undefined);
        });
        it('not changed encoded data for not empty string', () => {
          const toDecode = 'encoded passwd';
          const decoded = decode(toDecode);
          expect(decoded).to.equal(toDecode);
        });
      });
    });

    it('properly encode and decode correct data', () => {
      const expected = 'test';
      const value = decode(encode(expected));
      expect(value).to.equal(expected);
    });
  });
});
