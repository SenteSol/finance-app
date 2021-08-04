import axios from "axios";

const options = (from = "EUR", to = "UGX") => ({
  method: "GET",
  url: "https://currency-converter5.p.rapidapi.com/currency/convert",
  params: { format: "json", from, to, amount: "3500" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST
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
