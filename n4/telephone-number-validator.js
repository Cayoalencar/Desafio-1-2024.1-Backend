function telephoneCheck(str) {
  // Regular expression to match valid US phone number formats
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // Test the string against the regular expression
  return regex.test(str);
}