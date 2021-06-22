const NUMBER = document.querySelector(".parsing__input_nemder");
const CONVERTED = document.querySelector(".parsing__input_converted");
const CHECKBOXES = document.querySelectorAll(".parsing__input_checkbox");

let FirstOctetSecond = [],
  SecondOctetFirst = [],
  SecondOctetSecond = [];

function checkNumber() {
  if (NUMBER.value == undefined || NUMBER.value == "") return "";
  else return NUMBER.value % 2 == 0 ? "H'0" : "H'8";
}

function checkChecked() {
  CHECKBOXES.forEach((item, index) => {
    if (item.checked == true) {
      if (index < 4) FirstOctetSecond.push(item);
      else if (index < 11) SecondOctetFirst.push(item);
      else SecondOctetSecond.push(item);
    }
  });
}

function additionBinaryNumber(octetArray) {
  let sumNumbers = "0000";

  for (let i = 0; octetArray.length > i; i++) {
    let current = sumNumbers.length - 1;
    let next = octetArray[i].value.length - 1;
    let carry = 0;
    let result = "";

    while (current >= 0 || next >= 0) {
      let x = current < 0 ? 0 : +sumNumbers[current];
      let y = next < 0 ? 0 : +octetArray[i].value[current];
      let val = x + y + carry;

      carry = val > 1 ? 1 : 0;
      result = (val % 2) + result;

      current--;
      next--;
    }
    sumNumbers = carry > 0 ? carry + result : result;
  }
  return sumNumbers;
}

function ConvertedNumder() {
  let FirstOctetFirstNumder = checkNumber();

  let FirstOctetSecondNumder = parseInt(
    additionBinaryNumber(FirstOctetSecond),
    2
  );

  let SecondOctetFirstNumder = parseInt(
    additionBinaryNumber(SecondOctetFirst),
    2
  )
    .toString(16)
    .toUpperCase();

  let SecondOctetSecondNumder = parseInt(
    additionBinaryNumber(SecondOctetSecond),
    2
  )
    .toString(16)
    .toUpperCase();

  let numder = `${FirstOctetFirstNumder}${FirstOctetSecondNumder}${SecondOctetSecondNumder}${SecondOctetFirstNumder}`;

  FirstOctetSecond = [];
  SecondOctetFirst = [];
  SecondOctetSecond = [];

  return numder;
}

function Output() {
  checkChecked();
  CONVERTED.value = ConvertedNumder();

  if (!NUMBER.value) {
    CONVERTED.value = "";
  }
}

CHECKBOXES.forEach((checkbox) => {
  checkbox.addEventListener("click", Output);
});
NUMBER.oninput = Output;
