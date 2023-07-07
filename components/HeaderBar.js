import Actions from "./Actions";

const nomoLogoImage =
  '//div[contains(@class, "Mobile")]//a[@data-track-label="nomo-logo"]';
const propertyFinanceDropdown = '//div[@data-track-value="Property Finance"]';
const rentalPropertyDropdownItem =
  '//a[@data-track-category="header" and @data-track-value="Rental Property"]';

export default class HeaderBar {
  constructor() {
    this.actions = new Actions();
  }

  async validateNomoLogo() {
    await this.actions.validateElementVisibility(nomoLogoImage);
  }

  async openRentalProperty() {
    await this.actions.hover(propertyFinanceDropdown);
    await this.actions.click(rentalPropertyDropdownItem);
  }
}
