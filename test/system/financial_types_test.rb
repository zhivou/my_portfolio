require "application_system_test_case"

class FinancialTypesTest < ApplicationSystemTestCase
  setup do
    @financial_type = financial_types(:one)
  end

  test "visiting the index" do
    visit financial_types_url
    assert_selector "h1", text: "Financial Types"
  end

  test "creating a Financial type" do
    visit financial_types_url
    click_on "New Financial Type"

    fill_in "Name", with: @financial_type.name
    click_on "Create Financial type"

    assert_text "Financial type was successfully created"
    click_on "Back"
  end

  test "updating a Financial type" do
    visit financial_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @financial_type.name
    click_on "Update Financial type"

    assert_text "Financial type was successfully updated"
    click_on "Back"
  end

  test "destroying a Financial type" do
    visit financial_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Financial type was successfully destroyed"
  end
end
