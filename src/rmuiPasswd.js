const toCharCodeArray = secret => secret.split('').map(element => element.charCodeAt(0));

const obfuscateCharCode = (i, charCode, matrix) => {
  const sum = matrix[i + 1 - Math.floor(i / 8) * 8 - 1] + charCode;
  return sum - Math.floor(Math.floor(sum / 256) * 256);
};

const correctChar = charCode => (charCode > 9
  ? String.fromCharCode('A'.charCodeAt(0) + charCode - 10)
  : String.fromCharCode('0'.charCodeAt(0) + charCode));

const correctAscii = (charCode) => {
  let chrCode = charCode;
  if (chrCode >= 48 && chrCode <= 57) {
    chrCode -= 48;
  } else {
    chrCode -= 55;
  }

  if (chrCode >= 16 && chrCode <= 0) {
    chrCode = 0;
  }

  return chrCode;
};

const encoder = (secret) => {
  if (secret == null) {
    return toEncode => toEncode;
  }

  const secretMatrix = toCharCodeArray(secret);
  return (toEncode) => {
    if (toEncode === null || toEncode === undefined || toEncode === '') {
      return toEncode;
    }

    let index = 0;
    return toEncode
      .split('')
      .map((letter) => {
        const code = obfuscateCharCode(index, letter.charCodeAt(0), secretMatrix);
        const hb = Math.floor(code / 16);
        const lb = code - hb * 16;
        index += 1;
        return correctChar(hb) + correctChar(lb);
      })
      .join('');
  };
};

const decoder = (secret) => {
  if (secret == null) {
    return toEncode => toEncode;
  }

  const secretMatrix = toCharCodeArray(secret);
  return (toDecode) => {
    if (toDecode === null || toDecode === undefined || toDecode === '') {
      return toDecode;
    }

    let result = '';
    for (let i = 0; i < Math.floor(toDecode.length / 2); i += 1) {
      const bytes = toDecode.toUpperCase().substr((i + 1) * 2 - 2, 2);
      let charCode = correctAscii(bytes.charCodeAt(0)) * 16
        + correctAscii(bytes.charCodeAt(1))
        - secretMatrix[i + 1 - Math.floor(i / 8) * 8 - 1];

      if (charCode < 0) {
        charCode = 256 - charCode;
      }

      result += String.fromCharCode(charCode);
    }

    return result;
  };
};

export { encoder, decoder };
