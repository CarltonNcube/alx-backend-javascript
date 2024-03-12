// Define a WeakMap instance to track the number of queries for each endpoint
const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
    if (count >= 4) {
      throw new Error('Endpoint load is high');
    }
  }
};

export { weakMap, queryAPI };
