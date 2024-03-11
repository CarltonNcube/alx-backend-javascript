// Function that updates quantities of unique items in the map
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
};

export default updateUniqueItems;
