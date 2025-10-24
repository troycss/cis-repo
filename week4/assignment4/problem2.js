function countLeaves(days) {
  // Each day, leaves fall following this pattern:
  // Day 1: 10 leaves
  // Day 2: 20 leaves (doubles)
  // Day 3: 30 leaves (+10 from day 2)
  // Day 4: 40 leaves (+10 from day 3)
  // Pattern: First day doubles, then +10 each day

  let outputTotal = 0;
  // Use a for loop to calculate total
  for (let i = 1; i <= days; i++) {
    if (i === 2) {
      outputTotal += 20;
    } else if (i > 2) {
      outputTotal += 10 * i;
    } else {
      outputTotal += 10;
    }
  }

  // the return outputTotal will be a string. refer to the example outputs to see the format.
  return outputTotal.toString();
}

function categorizeLeafColors(leaves) {
  // leaves is an array of color strings
  // Count each color and return an object

  let colorCount = {};
  // Loop through array and count colors
  for (let i = 0; i < leaves.length; i++) {
    const color = leaves[i];
    colorCount[color] = (colorCount[color] || 0) + 1;
  }
  return colorCount;
}


/* Test Cases*/
console.log(countLeaves(1)); // "10"
console.log(countLeaves(2)); // "30"
console.log(countLeaves(3)); // "60"
console.log(countLeaves(4)); // "100"
console.log(countLeaves(5)); // "150"
