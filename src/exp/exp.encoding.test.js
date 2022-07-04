const { encode, decode } = require("./encoding");

it("plaintext", () => {
  const m = "hello world!";
  const message = Buffer.from(m);
  const encoded = encode(message);
  expect(encoded).toBe("📘💡📒📒💴🐟🪓💴💷📒🕯️🐠");
  const decoded = decode(encoded);
  expect(decoded).toEqual(message);
  expect(decoded.toString()).toBe(m);
  // save 3 characters on a 12 character string...
  expect(message.toString("base64").length - [...encoded].length).toBe(3);
});

it("base64url example", () => {
  const message =
    "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";
  const encoded = encode(Buffer.from(message, "base64"));
  expect(encoded).toBe(
    "🖌️🐡💳📮📷🐡🦬🐡🦎🐍🐅🐆🐒🦍🦧🦓🦌🐢🐡🦚🐡🪙📺📰💡🐡🦬🐡🎏💴📘🪙🐟🧱💴💡🐡🦚🐡📙📺📦🐡🦬🦎🐒🦎🦍🐍🐅🦌🐢🐍🐍📌"
  );
  const decoded = decode(encoded);
  expect(decoded).toEqual(Buffer.from(message, "base64"));
  // save 18 characters on a 74 character base64url encoded string...
  expect(message.length - [...encoded].length).toBe(18);
});
