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
const calculateInKwdButton = '//span[text()="Calculate in KWD"]';
const errorMessageText =
  '//div[contains(@class, "ValidationMsgError") and text()="%s"]';

export default class RentalPropertyPage {
  constructor() {
    this.actions = new Actions();
  }

  async switchToIframe() {
    await this.actions.switchToIframe(mortgageCalculatorIframe);
  }

  async fillPropertyValue({ propertyFinanceDetails }) {
    await this.actions.fill(
      propertyValueInput,
      propertyFinanceDetails.propertyValue
    );
  }

  async fillRentalIncome({ propertyFinanceDetails }) {
    await this.actions.fill(
      rentalIncomeInput,
      propertyFinanceDetails.rentalIncome
    );
  }

  async fillDownPayment({ propertyFinanceDetails }) {
    await this.actions.fill(
      downpaymentInput,
      propertyFinanceDetails.downpayment
    );
  }

  async selectFixedRate({ propertyFinanceDetails }) {
    await this.actions.click(fixedRateDropdown);
    await this.actions.click(
      sprintf(fixedRateDropdownItem, propertyFinanceDetails.fixedRate)
    );
  }

  async calculateInKwd() {
    await this.actions.click(calculateInKwdButton);
  }

  async getFinanceAmount() {
    return this.actions.getText(financeAmountText);
  }

  async getMonthlyCosts() {
    return this.actions.getText(monthlyCostsText);
  }

  async validateErrorMessage({ propertyFinanceDetails }) {
    await this.actions.validateElementVisibility(
      sprintf(errorMessageText, propertyFinanceDetails.error)
    );
  }
}
