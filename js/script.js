let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.1612;
let rateGBP = 5.2452;
let rateEUR = 4.5885;
let rateCHF = 4.6652;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
