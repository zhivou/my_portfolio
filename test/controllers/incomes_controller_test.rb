require 'test_helper'

class IncomesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @income = incomes(:one)
  end

  test "should get index" do
    get incomes_url
    assert_response :success
  end

  test "should get new" do
    get new_income_url
    assert_response :success
  end

  test "should create income" do
    assert_difference('Income.count') do
      post incomes_url, params: { income: { current: @income.current, monthly_income: @income.monthly_income, notes: @income.notes, source_name: @income.source_name, year_income: @income.year_income } }
    end

    assert_redirected_to income_url(Income.last)
  end

  test "should show income" do
    get income_url(@income)
    assert_response :success
  end

  test "should get edit" do
    get edit_income_url(@income)
    assert_response :success
  end

  test "should update income" do
    patch income_url(@income), params: { income: { current: @income.current, monthly_income: @income.monthly_income, notes: @income.notes, source_name: @income.source_name, year_income: @income.year_income } }
    assert_redirected_to income_url(@income)
  end

  test "should destroy income" do
    assert_difference('Income.count', -1) do
      delete income_url(@income)
    end

    assert_redirected_to incomes_url
  end
end
