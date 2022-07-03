const base64url = require("base64url");
const alphabets = require("./alphabets");

const base64UrlToEmoji = (data) => {
  return Array.from(data)
    .map((character) => {
      const index = alphabets.base64url.indexOf(character);
      return alphabets.demojid[index];
    })
    .join("");
};

const emojiToBase64url = (data) => {
  return Array.from(data)
    .map((emoji) => {
      const index = alphabets.demojid.indexOf(emoji);
      return alphabets.base64url[index];
    })
    .join("");
};

const encoders = {
  default: (input) => {
    return base64UrlToEmoji(base64url.encode(input));
  },
  "application/jwt": (input) => {
    return input.split(".").map(base64UrlToEmoji).join(".");
  },
  "application/did+json": (input) => {
    const components = input.split(":");
    components[components.length - 1] = base64UrlToEmoji(
      components[components.length - 1]
    );
    return components.join(":");
  },
};

const decoders = {
  default: (input) => {
    return base64url.decode(emojiToBase64url(input));
  },
  "application/jwt": (input) => {
    return input.split(".").map(emojiToBase64url).join(".");
  },
  "application/did+json": (input) => {
    const components = input.split(":");
    components[components.length - 1] = emojiToBase64url(
      components[components.length - 1]
    );
    return components.join(":");
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
