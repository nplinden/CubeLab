/**
 * Cycles the elements of an array
 *  @example
 * // returns [2, 3, 4, 1]
 * cycleThrough([1, 2, 3, 4], 1);
 *  @example
 * // returns [4, 1, 2, 3]
 * cycleThrough([1, 2, 3, 4], -1);
 *
 * @param {Array} array
 * @param {number} increment
 * @returns {Array} A cycled array
 */
export function cycleThrough(array, increment) {
  return array
    .slice(increment % array.length)
    .concat(array.slice(0, increment % array.length));
}

/**
 * Randomly choose and element from an array.
 *
 * @template Item
 * @param {Array<Item>} array
 * @returns {Item} A randomly selected element
 */
export function choose(array) {
  return array[Math.floor(Math.random() * array.length)];
}
