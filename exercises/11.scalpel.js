async function locateScalpel(nest) {
  let current = nest.name;
  let next = await anyStorage(nest, current, "scalpel");
  if (next == current) return current;
}