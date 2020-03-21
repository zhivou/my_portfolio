require "application_system_test_case"

class StocksTest < ApplicationSystemTestCase
  setup do
    @stock = stocks(:one)
  end

  test "visiting the index" do
    visit stocks_url
    assert_selector "h1", text: "Stocks"
  end

  test "creating a Stock" do
    visit stocks_url
    click_on "New Stock"

    check "Current" if @stock.current
    fill_in "Gain loss", with: @stock.gain_loss
    fill_in "Name", with: @stock.name
    fill_in "Notes", with: @stock.notes
    fill_in "Price", with: @stock.price
    fill_in "Sold date", with: @stock.sold_date
    fill_in "Sold price", with: @stock.sold_price
    click_on "Create Stock"

    assert_text "Stock was successfully created"
    click_on "Back"
  end

  test "updating a Stock" do
    visit stocks_url
    click_on "Edit", match: :first

    check "Current" if @stock.current
    fill_in "Gain loss", with: @stock.gain_loss
    fill_in "Name", with: @stock.name
    fill_in "Notes", with: @stock.notes
    fill_in "Price", with: @stock.price
    fill_in "Sold date", with: @stock.sold_date
    fill_in "Sold price", with: @stock.sold_price
    click_on "Update Stock"

    assert_text "Stock was successfully updated"
    click_on "Back"
  end

  test "destroying a Stock" do
    visit stocks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Stock was successfully destroyed"
  end
end
