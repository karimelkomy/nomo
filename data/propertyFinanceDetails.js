export const gbpPropertyFinanceDetails = {
  propertyValue: 1000000,
  rentalIncome: 1000,
  downpayment: 500000,
  fixedRate: "2 year fixed rate",
  financeAmount: 94229,
  monthlyCosts: 510,
  currency: "GBP",
};

export const kwdPropertyFinanceDetails = {
  propertyValue: 1000000,
  rentalIncome: 1000,
  downpayment: 500000,
  fixedRate: "2 year fixed rate",
  financeAmount: 38633,
  monthlyCosts: 209,
  currency: "KWD",
};

export const lowDownPaymentPropertyFinanceDetails = {
  propertyValue: 1000000,
  rentalIncome: 1000,
  downpayment: 100,
  error: "The down payment needs to be higher",
};

export const highDownPaymentPropertyFinanceDetails = {
  propertyValue: 1000000,
  rentalIncome: 1000,
  downpayment: 800000,
  error: "The minimum finance amount  is 300,000 GBP",
};

export const highFinanceAmountPropertyFinanceDetails = {
  propertyValue: 4000000,
  rentalIncome: 1000,
  downpayment: 2000000,
  error: "The maximum finance amount is 1,500,000 GBP",
};
