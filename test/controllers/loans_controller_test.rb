require 'test_helper'

class LoansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @loan = loans(:one)
  end

  test "should get index" do
    get loans_url
    assert_response :success
  end

  test "should get new" do
    get new_loan_url
    assert_response :success
  end

  test "should create loan" do
    assert_difference('Loan.count') do
      post loans_url, params: { loan: { amount: @loan.amount, apr: @loan.apr, current: @loan.current, maturity_amount: @loan.maturity_amount, maturity_date: @loan.maturity_date, monthly_payment: @loan.monthly_payment, months: @loan.months, notes: @loan.notes, org_name: @loan.org_name } }
    end

    assert_redirected_to loan_url(Loan.last)
  end

  test "should show loan" do
    get loan_url(@loan)
    assert_response :success
  end

  test "should get edit" do
    get edit_loan_url(@loan)
    assert_response :success
  end

  test "should update loan" do
    patch loan_url(@loan), params: { loan: { amount: @loan.amount, apr: @loan.apr, current: @loan.current, maturity_amount: @loan.maturity_amount, maturity_date: @loan.maturity_date, monthly_payment: @loan.monthly_payment, months: @loan.months, notes: @loan.notes, org_name: @loan.org_name } }
    assert_redirected_to loan_url(@loan)
  end

  test "should destroy loan" do
    assert_difference('Loan.count', -1) do
      delete loan_url(@loan)
    end

    assert_redirected_to loans_url
  end
end
