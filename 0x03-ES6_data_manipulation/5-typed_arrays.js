export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the valid range
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create a DataView for the ArrayBuffer with the specified length
  const res = new DataView(new ArrayBuffer(length));

  // Set the Int8 value at the specified position
  res.setInt8(position, value);

  // Return the DataView
  return res;
}
