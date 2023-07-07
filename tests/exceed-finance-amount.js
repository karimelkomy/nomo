import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";
import CookiesPopup from "../components/CookiesPopup";
import RentalPropertyPage from "../pages/RentalPropertyPage";
import { highFinanceAmountPropertyFinanceDetails } from "../data/propertyFinanceDetails";

fixture`Rental property finance `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate exceeding finance amount", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.switchToIframe();

  await rentalPropertyPage.fillPropertyValue({
    propertyFinanceDetails: highFinanceAmountPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillRentalIncome({
    propertyFinanceDetails: highFinanceAmountPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillDownPayment({
    propertyFinanceDetails: highFinanceAmountPropertyFinanceDetails,
  });

  await rentalPropertyPage.validateErrorMessage({
    propertyFinanceDetails: highFinanceAmountPropertyFinanceDetails,
  });
}).meta({
  customTest: "validate-exceeding-finance-amount",
});
