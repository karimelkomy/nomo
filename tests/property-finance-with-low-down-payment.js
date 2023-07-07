import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";
import CookiesPopup from "../components/CookiesPopup";
import RentalPropertyPage from "../pages/RentalPropertyPage";
import { lowDownPaymentPropertyFinanceDetails } from "../data/propertyFinanceDetails";

fixture`Rental property finance `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate property finance with low down payment", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.switchToIframe();

  await rentalPropertyPage.fillPropertyValue({
    propertyFinanceDetails: lowDownPaymentPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillRentalIncome({
    propertyFinanceDetails: lowDownPaymentPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillDownPayment({
    propertyFinanceDetails: lowDownPaymentPropertyFinanceDetails,
  });

  await rentalPropertyPage.validateErrorMessage({
    propertyFinanceDetails: lowDownPaymentPropertyFinanceDetails,
  });
}).meta({
  customTest: "validate-property-finance-with-low-down-payment",
});
