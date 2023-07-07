import { urls } from "../data/urls";
import HeaderBar from "../components/HeaderBar";
import CookiesPopup from "../components/CookiesPopup";
import RentalPropertyPage from "../pages/RentalPropertyPage";
import {
  gbpPropertyFinanceDetails,
  kwdPropertyFinanceDetails,
} from "../data/propertyFinanceDetails";
import { getNumberFromString } from "../utilities/helpers";

fixture`Rental property finance `.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Validate property finance amount and monthly cost in GBP", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.switchToIframe();

  await rentalPropertyPage.fillPropertyValue({
    propertyFinanceDetails: gbpPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillRentalIncome({
    propertyFinanceDetails: gbpPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillDownPayment({
    propertyFinanceDetails: gbpPropertyFinanceDetails,
  });
  await rentalPropertyPage.selectFixedRate({
    propertyFinanceDetails: gbpPropertyFinanceDetails,
  });

  const actualFinanceAmount = await rentalPropertyPage.getFinanceAmount();
  const actualMonthlyCosts = await rentalPropertyPage.getMonthlyCosts();

  await t
    .expect(getNumberFromString(actualFinanceAmount))
    .eql(gbpPropertyFinanceDetails.financeAmount);

  await t
    .expect(actualFinanceAmount)
    .contains(gbpPropertyFinanceDetails.currency);

  await t
    .expect(getNumberFromString(actualMonthlyCosts))
    .eql(gbpPropertyFinanceDetails.monthlyCosts);

  await t
    .expect(actualMonthlyCosts)
    .contains(gbpPropertyFinanceDetails.currency);
}).meta({
  customTest: "validate-property-finance-amount-and-monthly-cost-in-gbp",
});

test("Validate property finance amount and monthly cost in KWD", async (t) => {
  const cookiesPopup = new CookiesPopup();
  const headerBar = new HeaderBar();
  const rentalPropertyPage = new RentalPropertyPage();

  await cookiesPopup.acceptCookies();

  await headerBar.openRentalProperty();

  await rentalPropertyPage.switchToIframe();

  await rentalPropertyPage.fillPropertyValue({
    propertyFinanceDetails: kwdPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillRentalIncome({
    propertyFinanceDetails: kwdPropertyFinanceDetails,
  });
  await rentalPropertyPage.fillDownPayment({
    propertyFinanceDetails: kwdPropertyFinanceDetails,
  });
  await rentalPropertyPage.selectFixedRate({
    propertyFinanceDetails: kwdPropertyFinanceDetails,
  });

  await rentalPropertyPage.calculateInKwd();

  const actualFinanceAmount = await rentalPropertyPage.getFinanceAmount();
  const actualMonthlyCosts = await rentalPropertyPage.getMonthlyCosts();

  await t
    .expect(getNumberFromString(actualFinanceAmount))
    .eql(kwdPropertyFinanceDetails.financeAmount);

  await t
    .expect(actualFinanceAmount)
    .contains(kwdPropertyFinanceDetails.currency);

  await t
    .expect(getNumberFromString(actualMonthlyCosts))
    .eql(kwdPropertyFinanceDetails.monthlyCosts);

  await t
    .expect(actualMonthlyCosts)
    .contains(kwdPropertyFinanceDetails.currency);
}).meta({
  customTest: "validate-property-finance-amount-and-monthly-cost-in-kwd",
});
