String.prototype.compress = function (): string {
  let huffmanCharArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(
    ""
  );
  let huffman = (char: string): string => {
    let i = huffmanCharArr.indexOf(char);
    if (i < 0) {
      throw new Error(
        "Unexpected character " +
          JSON.stringify(char) +
          ", only for Base64 encoded strings!"
      );
    }
    return (i >>> 0).toString(2).padStart(7, "0");
  };
  // Every char of string as huffman binary
  let compressedString = new StringBuilder();
  for (const char of this.split("")) {
    compressedString.append(huffman(char));
  }
  // concat sb and cut into bytes
  let str = compressedString.toString();
  let bytes = new Array<string>();
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if ((i + 1) % 8 === 0) {
      bytes.push(temp);
      temp = "";
    }
  }
  if (temp.length > 0) {
    bytes.push(temp);
  }
  //translate binary bytes into a string
  let finalStr = new StringBuilder();
  for (const b of bytes) {
    let n = parseInt(b, 2) + 32;
    finalStr.append(String.fromCharCode(n));
  }
  return finalStr.toString();
};

String.prototype.decompress = function (): string {
  let huffmanCharArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(
    ""
  );
  let bytes = new StringBuilder();
  for (const char of this.split("")) {
    bytes.append(
      ((char.charCodeAt(0) - 32) >>> 0).toString(2).padStart(8, "0")
    );
  }
  let str = bytes.toString();

  let huffmanBytes = new Array<string>();
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if ((i + 1) % 7 === 0) {
      huffmanBytes.push(temp);
      temp = "";
    }
  }
  if (temp.length > 0) {
    huffmanBytes.push(temp);
  }
  let finalString = new StringBuilder();
  for (const huffmanByte of huffmanBytes) {
    finalString.append(huffmanCharArr[parseInt(huffmanByte, 2)]);
  }
  return finalString.toString();
};

interface String {
  compress: () => string;
  decompress: () => string;
}
