// Use Uint8Array to accept the binary equivilant <-- spelling shit '
// anyway use binary to write out HTML symbols write an entire 
// web page with only binary using binary and bitwise operations to 
// make printing the symols to index.html more efficiently
// make it accept a JSON file loaded with 1's and 0's ;)

const arr = new Uint8Array([0b00111100, 0b01101000, 0b01110100, 
    0b01101101, 0b01101100, 0b00111110, 0b00111100, 0b00101111,
    0b01101000, 0b01110100, 0b01101101, 0b01101100, 0b00111110]);
    const decoder = new TextDecoder();
    const str = decoder.decode(arr)
  
    console.log(str);