// Export a constant instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export the function queryAPI
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return queryCount;
}
