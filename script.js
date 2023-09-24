function calculateAll() {
  const size = document.getElementById("size").value;
  const pages = parseInt(document.getElementById("pages").value);
  const vndCost = parseFloat(document.getElementById("vndCost").value);
  const conversionRate = parseFloat(
    document.getElementById("conversionRate").value
  );
  const margin = parseFloat(document.getElementById("margin").value);

  const weightPer100Pages = {
    "15x20cm": 0.115,
    "15x24cm": 0.14,
    "16x24cm": 0.145,
    "15.5x24cm": 0.145,
  };

  if (
    size in weightPer100Pages &&
    !isNaN(pages) &&
    !isNaN(vndCost) &&
    !isNaN(conversionRate) &&
    !isNaN(margin)
  ) {
    const weightPer100 = weightPer100Pages[size];
    const totalWeight = (pages / 100) * weightPer100;
    const totalPrice = totalWeight * 10 + vndCost / conversionRate;
    const sellingPrice = totalPrice / (1 - margin / 100);
    document.getElementById(
      "result"
    ).innerHTML = `The estimated weight of the book is ${totalWeight.toFixed(
      2
    )} kg. The cost price is ${totalPrice.toFixed(
      2
    )} AUD. The selling price with a ${margin.toFixed(
      2
    )}% margin is: ${sellingPrice.toFixed(2)} AUD.`;
  } else {
    document.getElementById("result").innerHTML =
      "Invalid input. Please enter valid values.";
  }
}
