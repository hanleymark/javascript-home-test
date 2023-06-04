function assertEquals(expect, actual) {
  // Check that arguments are of the same type
  if (typeof expect !== typeof actual) {
    throw new Error(
      `Expected type ${typeof expect} but found type ${typeof actual}`
    );
  }

  // Expect is a string
  if (typeof expect === 'string') {
    if (expect !== actual) {
      throw new Error(`Expected "${expect}" but found "${actual}"`);
    }
  }

  // Expect is a number
  if (typeof expect === 'number') {
    // Expect is NaN
    if (isNaN(expect) && !isNaN(actual)) {
      throw new Error(`Expected NaN but found ${actual}`);
    }

    // Expect is not NaN
    if (!isNaN(expect) && isNaN(actual)) {
      throw new Error(`Expected ${expect} but found NaN`);
    }

    // Expect and actual are numbers
    if (expect !== actual && !isNaN(expect) && !isNaN(actual)) {
      throw new Error(`Expected ${expect} but found ${actual}`);
    }
  }

  // Arguments are of type array
  if (Array.isArray(expect) && Array.isArray(actual)) {
    // Test expected and actual array lengths are equal
    if (expect.length !== actual.length) {
      throw new Error(
        `Expected array length ${expect.length} but found ${actual.length}`
      );
    }

    // Shallow equality test on array elements
    const MAX_ERRORS = 10;
    let elementsNotEqual = [];
    expect.forEach((element, index) => {
      if (element !== actual[index]) {
        // Add quotes to 'expect' and 'actual' elements that are strings
        const expectedElement =
          typeof element === 'string' ? `"${element}"` : element;
        const actualElement =
          typeof actual[index] === 'string' ? `"${actual[index]}"` : actual[index];

        elementsNotEqual.push(
          `Expected ${expectedElement} but found ${actualElement} at index ${index}`
        );
      }
    });

    // >1 array elements do not match. Throw error with message containing list of errors up to MAX_ERRORS
    if (elementsNotEqual.length > 0) {
      throw new Error(
        elementsNotEqual.length === 1
          ? elementsNotEqual
          : elementsNotEqual.slice(0, MAX_ERRORS).join(', ')
      );
    }
  }

  // Expect is boolean
  if (typeof expect === 'boolean') {
    if (expect !== actual) {
      throw new Error(`Expected ${expect} but found ${actual}`);
    }
  }
}

module.exports = assertEquals;
