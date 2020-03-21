require "application_system_test_case"

class BadgetsTest < ApplicationSystemTestCase
  setup do
    @badget = badgets(:one)
  end

  test "visiting the index" do
    visit badgets_url
    assert_selector "h1", text: "Badgets"
  end

  test "creating a Badget" do
    visit badgets_url
    click_on "New Badget"

    fill_in "Amount", with: @badget.amount
    check "Current" if @badget.current
    fill_in "Monthly payment", with: @badget.monthly_payment
    fill_in "Months left", with: @badget.months_left
    fill_in "Name", with: @badget.name
    fill_in "Notes", with: @badget.notes
    click_on "Create Badget"

    assert_text "Badget was successfully created"
    click_on "Back"
  end

  test "updating a Badget" do
    visit badgets_url
    click_on "Edit", match: :first

    fill_in "Amount", with: @badget.amount
    check "Current" if @badget.current
    fill_in "Monthly payment", with: @badget.monthly_payment
    fill_in "Months left", with: @badget.months_left
    fill_in "Name", with: @badget.name
    fill_in "Notes", with: @badget.notes
    click_on "Update Badget"

    assert_text "Badget was successfully updated"
    click_on "Back"
  end

  test "destroying a Badget" do
    visit badgets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Badget was successfully destroyed"
  end
end
