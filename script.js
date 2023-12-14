function toCase(text) {
  // write your code here
	// Check if the input string is empty
  if (!text.trim()) {
    return '-';
  }

  // Convert the string to lowercase and uppercase
  const lowerCaseStr = text.toLowerCase();
  const upperCaseStr = text.toUpperCase();

  // Join the lowercase and uppercase strings with a hyphen
  const result = `${lowerCaseStr}-${upperCaseStr}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
