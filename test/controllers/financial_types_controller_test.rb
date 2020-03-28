require 'test_helper'

class FinancialTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @financial_type = financial_types(:one)
  end

  test "should get index" do
    get financial_types_url
    assert_response :success
  end

  test "should get new" do
    get new_financial_type_url
    assert_response :success
  end

  test "should create financial_type" do
    assert_difference('FinancialType.count') do
      post financial_types_url, params: { financial_type: { name: @financial_type.name } }
    end

    assert_redirected_to financial_type_url(FinancialType.last)
  end

  test "should show financial_type" do
    get financial_type_url(@financial_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_financial_type_url(@financial_type)
    assert_response :success
  end

  test "should update financial_type" do
    patch financial_type_url(@financial_type), params: { financial_type: { name: @financial_type.name } }
    assert_redirected_to financial_type_url(@financial_type)
  end

  test "should destroy financial_type" do
    assert_difference('FinancialType.count', -1) do
      delete financial_type_url(@financial_type)
    end

    assert_redirected_to financial_types_url
  end
end
