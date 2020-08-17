const rows = 3;
const cols = 3;

window.onload = () => {
  //   createMap("011010011");
  nextIteration(createMap("010010010"));
};

function createMap(string) {
  let count = 0;
  let array = string.split("");

  let newArray = [];
  for (var i = 0; i < rows; i++) {
    newArray[i] = [];
    for (var j = 0; j < cols; j++) {
      newArray[i][j] = parseInt(array[count + j], 10);
    }
    count = count + cols;
  }

  return newArray;
}

// Creates two-dimensional arrays

function getNeighborCount(map, x, y) {
  let count = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x, i + cols) % cols;
      let row = (y, j + rows) % rows;

      count += map[col][row];
    }
  }
  count -= map[x][y];

  return count;
}

function nextIteration(map) {
  let nextIter = map;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let currentNode = map[i][j];
      //Borders;
      if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
        nextIter[i][j] = currentNode;
      } else {
        let sum = 0;
        let neighbors = getNeighborCount(map, i, j);
        if (currentNode == 0 && neighbors == 3) {
          nextIter[i][j] = 1;
        } else if (currentNode == 1 && (neighbors < 2 || neighbors > 3)) {
          nextIter[i][j] = 0;
        } else {
          nextIter[i][j] = currentNode;
        }
      }
    }
  }
  console.log(nextIter);
  return nextIter;
}
