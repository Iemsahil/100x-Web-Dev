function createPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
  
      // Adding spaces before the stars
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
  
      // Adding stars
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage:
  const rows = 5;
  createPattern(rows);
  