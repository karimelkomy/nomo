import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";
import CookiesPopup from "../components/CookiesPopup";
import RentalPropertyPage from "../pages/RentalPropertyPage";
import { highDownPaymentPropertyFinanceDetails } from "../data/propertyFinanceDetails";

fixture`Rental property finance `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate property finance with high down payment", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.switchToIframe();

  await rentalPropertyPage.fillPropertyValue({
    propertyFinanceDetails: highDownPaymentPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillRentalIncome({
    propertyFinanceDetails: highDownPaymentPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillDownPayment({
    propertyFinanceDetails: highDownPaymentPropertyFinanceDetails,
  });

  await rentalPropertyPage.validateErrorMessage({
    propertyFinanceDetails: highDownPaymentPropertyFinanceDetails,
  });
}).meta({
  customTest: "validate-property-finance-with-high-down-payment",
});
