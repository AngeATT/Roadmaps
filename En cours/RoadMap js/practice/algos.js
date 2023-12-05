function sudoku(puzzle) {
  //contraintes colonnes
  let puzzle2 = Array.of(puzzle);
  let nums = [1,2,3,4,5,6,7,8,9]
  let cols = []
  let rows= []
  for(let tab of puzzle){
    rows.push(nums.filter(x=>tab.includes(x)));        
  }
  for(let i = 0; i<9;i++){
    let col =[]
    for(let j =0; j<9; j++){
      if(puzzle[j][i] != 0 ){
        col.push(puzzle[j][i]);
      }
    }
    cols.push(nums.filter(x=>col.includes(x)));
  }
  for(let i = 0; i< 9; i++){
    let tab = puzzle[i]
    for (let j = 0; j< 9; j++){
      if(tab[j] == 0){
        let possibles = rows[i].filter(x=>cols[j].includes(x));
        let p = rows.reduce((curr,acc)=>{
          acc.filter(x=>!curr.includes(x));
          return acc;
        }
        ,possibles);
        tab[j] = p[0];
        rows[i].delete(p[0]);
        cols[j].delete(p[0]);
      }
    }
  }
  return puzzle;
}


var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];

  console.log(sudoku(puzzle));