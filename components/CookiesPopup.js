import Actions from "./Actions";

const cookiesAcceptButton = '//button[@data-test="cookies-accept"]';

export default class CookiesPopup {
  constructor() {
    this.actions = new Actions();
  }

  async acceptCookies() {
    await this.actions.click(cookiesAcceptButton);
  }
}
