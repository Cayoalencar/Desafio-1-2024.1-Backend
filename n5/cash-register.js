function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = cid.reduce((sum, currency) => sum + currency[1], 0);
  totalCID = parseFloat(totalCID.toFixed(2)); // Avoid floating point precision issues

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let change = [];
  cid = cid.reverse(); // Start from the highest denomination

  for (let currency of cid) {
    let currencyName = currency[0];
    let currencyAmount = currency[1];
    let currencyValue = currencyValues[currencyName];
    let currencyToReturn = 0;

    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = parseFloat(changeDue.toFixed(2)); //Avoid floating point precision issues
      currencyAmount -= currencyValue;
      currencyToReturn += currencyValue;
    }

    if (currencyToReturn > 0) {
      change.push([currencyName, currencyToReturn]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}