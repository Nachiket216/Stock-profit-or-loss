var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (
    initialPrice.value == "" ||
    stockQuantity.value == "" ||
    currentPrice.value == ""
  ) {
    outputBox.style.color = "red";
    showOutput("Enter all the fields properly");
  } else if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    outputBox.style.color = "red";
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
    );
    outputBox.style.color = "green";
  } else {
    outputBox.innerText = "No pain no gain and no gain no pain";
  }
}

function showOutput(message) {
  // switch (status) {
  //     case "PROFIT":
  //         outputBox.innerHTML = message;
  //         break;
  //     case "LOSS":
  //         outputBox.innerHTML = message;
  //         break;
  //     case "":
  //         outputBox.innerHTML = message;
  //         break;

  //     default:
  //         break;
  // }

  outputBox.innerHTML = message;
}
