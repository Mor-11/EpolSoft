const NUMBER = document.querySelector(".parsing__input_nemder");
const CONVERTED = document.querySelector(".parsing__input_converted");
const CHECKBOXES = document.querySelectorAll(".parsing__input_checkbox");
const checkedCheckboxes = [];

function checkBoxes() {
  CHECKBOXES.forEach((ithem) => {
    if (ithem.checked == true) checkedCheckboxes.push(ithem);
  });
}

const summationDoubleNumner = function () {
  let sumNumbers = "00000000";

  for (let i = 0; checkedCheckboxes.length > i; i++) {
    let current = sumNumbers.length - 1;
    let next = checkedCheckboxes[i].value.length - 1;
    let carry = 0;
    let sum = "";

    while (current >= 0 || next >= 0) {
      let x = current < 0 ? 0 : +sumNumbers[current];
      let y = next < 0 ? 0 : +checkedCheckboxes[i].value[current];
      let val = x + y + carry;

      carry = val > 1 ? 1 : 0;
      sum = (val % 2) + sum;

      current--;
      next--;
    }
    sumNumbers = carry > 0 ? carry + sum : sum;
  }
  return sumNumbers;
};

function CheckNumber(number) {
  if (number.value == undefined || number.value == "") return "";
  else return number.value % 2 == 0 ? "H'0" : "H'8";
}

NUMBER.oninput = function () {
  checkBoxes();
  let DoubleNumber = summationDoubleNumner();
  CONVERTED.value = `${CheckNumber(NUMBER)}${parseInt(DoubleNumber, 2)}`;
};
