function getNeighbors(row, col, matrix) {

  let ans = []

  let height = matrix.length
  let width = matrix[0].length

  // Check top
  if(row-1>=0 && matrix[row-1][col] === 1) ans.push([row-1, col])

  // Check top right
  if(row-1>=0 && col+1<width && matrix[row-1][col+1] === 1) ans.push([row-1, col+1])

  // Check right
  if(col+1<width && matrix[row][col+1] === 1) ans.push([row, col+1])

  // Check bottom right
  if(row+1<height && col+1<width && matrix[row+1][col+1] === 1) ans.push([row+1, col+1])

  // Check bottom
  if(row+1<height && matrix[row+1][col] === 1) ans.push([row+1, col])

  // Check bottom left
  if(row+1<height && col-1>=0 && matrix[row+1][col-1] === 1) ans.push([row+1, col-1])

  // Check left
  if(col-1>=0 && matrix[row][col-1] === 1) ans.push([row, col-1])

  // Check top left
  if(row-1>=0 && col-1>=0 && matrix[row-1][col-1] === 1) ans.push([row-1, col-1])
  // Return neighbors

  return ans

  // Your code here
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set()

  // Initialize count to 0
  let count = 0

  // Iterate through all indices in matrix
  for(let row = 0; row<matrix.length; row++){
    for(let col = 0; col<matrix[0].length; col++){
      // If an index contains a 1 and has not been visited,
      if(matrix[row][col] === 1 && !visited.has(`node-${row}-${col}`)){
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        // Initialize a stack with current index
        count++
        let stack = [[row, col]]

        // Add stringified version of current index to the visited set
        visited.add(`node-${row.toString()}-${col.toString()}`)

        // While stack contains elements
        while(stack.length > 0){
            // Pop element from stack
            let curr = stack.pop()

            // Get valid neighbors of current element
            let ngbs = getNeighbors(curr[0], curr[1], matrix)

            // Iterate over neigbors
            ngbs.forEach((ngb)=>{
              // If neighbor has not been visited
              let stringified = `node-${ngb[0]}-${ngb[1]}`
              if(!visited.has(stringified)){
                // Add neighbor to stack
                stack.push(ngb)
                // Mark neighbor as visited
                visited.add(stringified)
              }

            })

        }
      }
    }
  }
  // Return island count
  return count
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
