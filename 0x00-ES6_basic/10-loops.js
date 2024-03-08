// Creates an iterator object from the provided report object.
export default function appendToEachArrayValue(array, appendString) {
    const arrayEnd = [];
    for (const idx of array) {
      arrayEnd.push(`${appendString}${idx}`);
    }
  
    return arrayEnd;
  }
