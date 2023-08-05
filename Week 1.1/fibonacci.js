function fibonacci(n) {
    if (n <= 0) {
      return "Invalid input. Please provide a positive integer.";
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibSequence = [0, 1];
  
      for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
      }
  
      return fibSequence;
    }
  }
  
  // Example usage:
  const n = 10;
  const fibSequence = fibonacci(n);
  console.log(`The Fibonacci sequence of length ${n}: ${fibSequence.join(", ")}`);
  