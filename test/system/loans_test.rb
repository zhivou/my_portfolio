require "application_system_test_case"

class LoansTest < ApplicationSystemTestCase
  setup do
    @loan = loans(:one)
  end

  test "visiting the index" do
    visit loans_url
    assert_selector "h1", text: "Loans"
  end

  test "creating a Loan" do
    visit loans_url
    click_on "New Loan"

    fill_in "Amount", with: @loan.amount
    fill_in "Apr", with: @loan.apr
    check "Current" if @loan.current
    fill_in "Maturity amount", with: @loan.maturity_amount
    fill_in "Maturity date", with: @loan.maturity_date
    fill_in "Monthly payment", with: @loan.monthly_payment
    fill_in "Months", with: @loan.months
    fill_in "Notes", with: @loan.notes
    fill_in "Org name", with: @loan.org_name
    click_on "Create Loan"

    assert_text "Loan was successfully created"
    click_on "Back"
  end

  test "updating a Loan" do
    visit loans_url
    click_on "Edit", match: :first

    fill_in "Amount", with: @loan.amount
    fill_in "Apr", with: @loan.apr
    check "Current" if @loan.current
    fill_in "Maturity amount", with: @loan.maturity_amount
    fill_in "Maturity date", with: @loan.maturity_date
    fill_in "Monthly payment", with: @loan.monthly_payment
    fill_in "Months", with: @loan.months
    fill_in "Notes", with: @loan.notes
    fill_in "Org name", with: @loan.org_name
    click_on "Update Loan"

    assert_text "Loan was successfully updated"
    click_on "Back"
  end

  test "destroying a Loan" do
    visit loans_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Loan was successfully destroyed"
  end
end
