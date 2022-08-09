const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const NUMBERS = {
    "00": "",
    10: ".",
    11: "-",
    "**********": " ",
  };

  let arrayExpr = [];

  for (let i = 0; i < expr.length; i += 10) {
    const chunk = expr.slice(i, i + 10);
    arrayExpr.push(chunk);
  }

  let symbolsArray = [];

  arrayExpr.forEach((element, index) => {
    for (let i = 0; i < Object.keys(NUMBERS).length; i++) {
      if (element.includes(Object.keys(NUMBERS)[i])) {
        element = element.replace(
          Object.keys(NUMBERS)[i],
          Object.values(NUMBERS)[i]
        );
        i = -1;
      }
    }

    symbolsArray.push(element);
  });

  let string = [];

  symbolsArray.forEach((element) => {
    if (element !== " ") {
      element = element.replace(element, MORSE_TABLE[element]);
    }
    string.push(element);
  });

  return string.join("");
}

module.exports = {
  decode,
};
