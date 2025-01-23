const table = document.getElementById("table");

const sizeOfTable = +prompt("Input size of table");
const numOfNums = Math.pow(sizeOfTable, 2);
const numOfTrueCells = +prompt("Input number of true cells");

fillTable(table, sizeOfTable, sizeOfTable);

function fillTable(table, rows, cols) {
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      tr.append(td);
    }
    table.append(tr);
  }
}

const randomInt = getRandomInt(0, numOfNums - 1);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const intList = createIntList(0, numOfNums - 1);

function createIntList(min, max) {
  const intArray = [];
  for (i = min; i <= max; i++) intArray.push(i);
  return intArray;
}

const shuffledIntList = shuffleIntList(intList);

function shuffleIntList(intArray) {
  const randomIntArray = [];
  while (intArray.length > 0) {
    let random = getRandomInt(0, intArray.length - 1);
    let element = intArray.splice(random, 1)[0];
    randomIntArray.push(element);
  }
  return randomIntArray;
}

const slicedList = cutList(numOfTrueCells, shuffledIntList);

function cutList(count, longArray) {
  return (slicedArray = longArray.slice(0, count));
}

console.log(slicedList);

const tds = document.querySelectorAll("#table td");

let numOfGuessedCells = 0;

for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function func() {
    if (slicedList.includes(i)) {
      this.classList.add("green");
      numOfGuessedCells++;
      if (numOfGuessedCells === numOfTrueCells) {
        alert("Perfect! You did it.");
        location.reload();
      }
    } else {
      this.classList.add("red");
    }
    this.removeEventListener("click", func);
  });
}
