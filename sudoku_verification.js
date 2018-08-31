//Sudoku verification
function isValidSudoku(data) {
    function validateSudokuRules(inputArray) {
        // Sort the input array so that we get sorted values like 1,2,3...etc
        // and check for uniqueness. We match the values in the array to the corresponding
        // (index + 1) value. For eg: 1 should be present in the first position of the array and so on.
        
        if (inputArray.length !== 9)  return false;
        var sortedArray = inputArray.sort();
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < 9 ; i++) {
        var rows = [];
        var cols = [];
        var grid = [];
        for (var j = 0; j < 9; j++) {
            rows.push(data[i][j]);
            cols.push(data[j][i]);
            // Fetch each 3 * 3 grid from the input sudoku matrix.
            gridRow = Math.floor(j/3)+(i%3)*3;
            gridCol = j%3+Math.floor(i/3)*3;
            grid.push(data[gridRow][gridCol]);
        }
        if (!validateSudokuRules(rows) || !validateSudokuRules(cols) 
        || !validateSudokuRules(grid)) return false;
    }
        return true;
}

print(isValidSudoku([
  [7, 5, 9, 4, 6, 2, 8, 1, 3],
  [4, 6, 3, 5, 1, 8, 2, 9, 7],
  [1, 2, 8, 9, 7, 3, 6, 4, 5],
  [6, 9, 7, 1, 8, 4, 5, 3, 2],
  [5, 8, 4, 2, 3, 6, 9, 7, 1],
  [2, 3, 1, 7, 9, 5, 4, 8, 6],
  [3, 4, 5, 8, 2, 1, 7, 6, 9],
  [9, 1, 2, 6, 4, 7, 3, 5, 8],
  [8, 7, 6, 3, 5, 9, 1, 2, 4]
]));

