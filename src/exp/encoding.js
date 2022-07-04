const alphabet = require("./alphabet.json");

const hexToInt = {};

let i = 0;
for (const symbol of alphabet) {
  let hex = symbol.codePointAt(0).toString(16);
  // beware astral code point, you’ll get an unexpected result.
  // console.log(i, hex, symbol);
  hexToInt[hex] = i;
  i++;
}

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}

const bufferToEmojiString = (data) => {
  const hexString = Buffer.from(data).toString("hex");
  const byteStrings = chunkSubstr(hexString, 2);
  const uints = byteStrings.map((byte) => {
    return parseInt(byte, 16);
  });
  const emojis = uints.map((i) => {
    return alphabet[i];
  });
  const encoded = emojis.join("");
  return encoded;
};

const emojiStringToBuffer = (data) => {
  const hexStrs = [];
  for (const symbol of data) {
    const h1 = symbol.codePointAt(0);
    let hex = h1.toString(16);
    if (hex.length !== 5) {
      //  astral failure... ignore...
    } else {
      hexStrs.push(hex);
    }
  }
  const emojiIndexs = hexStrs
    .map((s) => {
      return hexToInt[s].toString(16);
    })
    .join("");

  return Buffer.from(emojiIndexs, "hex");
};

const encoders = {
  default: (input) => {
    return bufferToEmojiString(input);
  },
};

const decoders = {
  default: (input) => {
    return emojiStringToBuffer(input);
  },
};

const encode = (input, options = { contentType: "default" }) => {
  if (!encoders[options.contentType]) {
    throw new Error("Unsupported content type: " + options.contentType);
  }
  return encoders[options.contentType](input, options);
};

const decode = (input, options = { contentType: "default" }) => {
  if (!decoders[options.contentType]) {
    throw new Error("Unsupported content type: " + options.contentType);
  }
  return decoders[options.contentType](input, options);
};

module.exports = { encode, decode };
