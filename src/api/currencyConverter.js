import axios from "axios";

const options = (from = "EUR", to = "UGX") => ({
  method: "GET",
  url: "https://currency-converter5.p.rapidapi.com/currency/convert",
  params: { format: "json", from, to, amount: "3500" },
  headers: {
    "x-rapidapi-key": "a97a553b16mshb88827a8c712780p14e3c2jsnfa573cf2c779",
    "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
  }
});

export const getCurrencyRates = (from, to) => {
  // options(from, to);
  //
  // return true;
  axios
    .request(options(from, to))
    .then(response => response.data.rates.UGX.rate)
    .catch(error => {
      console.error(error);
    });
};
