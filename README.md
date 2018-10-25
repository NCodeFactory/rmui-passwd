# rmui-passwd #

Creates encryption and decryption functions.

## installation: ##

### yarn: ###
```
yarn add @ncodefactory/rmui-passwd
```
### npm: ###
```
npm install @ncodefactory/rmui-passwd --save
```

## usage: ##

```javascript
import { encoder, decoder } from './rmuiPasswd';

const secret = 'secret';
const encode = encoder(secret);
const decode = decoder(secret);

const toEncode = 'passwd';
const encoded = encode(toEncode);
// => E3C6D6E5DCD8

const decoded = decode(encoded);
// => passwd

console.log(`encode: ${toEncode} => ${encoded}, decode: ${encoded} => ${decoded}`); //eslint-disable-line
// => encode: passwd => E3C6D6E5DCD8, decode: E3C6D6E5DCD8 => passwd
```
