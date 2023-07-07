import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";
import CookiesPopup from "../components/CookiesPopup";
import RentalPropertyPage from "../pages/RentalPropertyPage";
import { propertyFinanceDetails } from "../data/propertyFinanceDetails";
import { getNumberFromString } from "../utilities/helpers";

fixture`Rental property finance `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate property finance amount and monthly cost", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.fillPropertyFinance({ propertyFinanceDetails });

  const actualFinanceAmount = await rentalPropertyPage.getFinanceAmount();
  const actualMonthlyCosts = await rentalPropertyPage.getMonthlyCosts();

  await t
    .expect(getNumberFromString(actualFinanceAmount))
    .eql(propertyFinanceDetails.financeAmount);

  await t
    .expect(getNumberFromString(actualMonthlyCosts))
    .eql(propertyFinanceDetails.monthlyCosts);
}).meta({
  customTest: "validate-property-finance-amount-and-monthly-cost",
});
