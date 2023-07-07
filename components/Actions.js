import { t } from "testcafe";
import {
  selectorXP,
  getCurrentUrl,
  validateElementVisibility,
} from "../utilities/helpers";

export default class Actions {
  async click(elementXP) {
    try {
      await this.validateElementVisibility(elementXP);

      await t.click(selectorXP(elementXP));
    } catch (e) {
      throw new Error(`
		click failed - "${elementXP}" element does not exist.
		Current URL: ${await getCurrentUrl()}
	    `);
    }
  }

  async hover(elementXP) {
    await this.validateElementVisibility(elementXP);
    await t.hover(selectorXP(elementXP));
  }

  async clear(elementXP) {
    await this.click(elementXP);
    await t.pressKey("ctrl+a delete");
  }

  async fill(elementXP, value) {
    await this.clear(elementXP);
    await t.typeText(selectorXP(elementXP), value.toString());
  }

  async getText(elementXP) {
    await this.validateElementVisibility(elementXP);

    return selectorXP(elementXP).innerText;
  }

  async switchToIframe(iframeXP) {
    await this.validateElementVisibility(iframeXP);
    await t.switchToIframe(selectorXP(iframeXP));
  }

  async validateElementVisibility(elementXP) {
    await validateElementVisibility(elementXP);
  }
}
