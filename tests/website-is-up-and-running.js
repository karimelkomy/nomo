import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";

fixture`Nomo website is running `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate Nomo website is up and running", async (t) => {
  const headerBar = new HeaderBar();

  await headerBar.validateNomoLogo();
}).meta({
  customTest: "validate-nomo-website-up-and-running",
});
