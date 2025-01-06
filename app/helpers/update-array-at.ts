export default function updateArrayAt<T>(
  array: T[],
  indexToReplace: number,
  newItem: T,
) {
  return [
    ...array.slice(0, indexToReplace),
    newItem,
    ...array.slice(indexToReplace + 1),
  ];
}
