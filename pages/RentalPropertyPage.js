import { sprintf } from "sprintf-js";
import Actions from "../components/Actions";

const mortgageCalculatorIframe = '//div[@id="mortgage-calculator"]//iframe';
const propertyValueInput = '//input[@name="estimate-property"]';
const rentalIncomeInput = '//input[@name="estimate-rental-income"]';
const downpaymentInput = '//input[@name="down-payment"]';
const fixedRateDropdown = '//div[text()="Select"]';
const fixedRateDropdownItem = '//li[text()="%s"]';
const financeAmountText =
  '//div[text()="Finance amount*"]/following-sibling::h2';
const monthlyCostsText = '//div[text()="Monthly Costs"]/following-sibling::h3';

export default class RentalPropertyPage {
  constructor() {
    this.actions = new Actions();
  }

  async fillPropertyFinance({ propertyFinanceDetails }) {
    await this.actions.switchToIframe(mortgageCalculatorIframe);

    await this.actions.fill(
      propertyValueInput,
      propertyFinanceDetails.propertyValue
    );

    await this.actions.fill(
      rentalIncomeInput,
      propertyFinanceDetails.rentalIncome
    );

    await this.actions.fill(
      downpaymentInput,
      propertyFinanceDetails.downpayment
    );

    await this.actions.click(fixedRateDropdown);
    await this.actions.click(
      sprintf(fixedRateDropdownItem, propertyFinanceDetails.fixedRate)
    );
  }

  async getFinanceAmount() {
    return this.actions.getText(financeAmountText);
  }

  async getMonthlyCosts() {
    return this.actions.getText(monthlyCostsText);
  }
}
