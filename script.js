function toCase(text) {
  // write your code here
	if (!str.trim()) {
    return '-';
  }

  // Convert the string to lowercase and uppercase
  const lowerCaseStr = str.toLowerCase();
  const upperCaseStr = str.toUpperCase();

  // Join the lowercase and uppercase strings with a hyphen
  const result = `${lowerCaseStr}-${upperCaseStr}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
