let j = 0;
let i = 127744;

while (i < 128883) {
  let emo = String.fromCodePoint("0x" + i.toString(16));
  let hex = `${emo}`.codePointAt(0).toString(16);
  console.log(i, hex, emo, j);
  i++;
  j++;
}
