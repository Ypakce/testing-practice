export function analyzeArray(str) {
  return {
    average: str.reduce((a, b) => a + b, 0) / str.length,
    min: Math.min(...str),
    max: Math.max(...str),
    length: str.length,
  };
}
