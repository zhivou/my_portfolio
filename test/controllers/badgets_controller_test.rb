require 'test_helper'

class BadgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @badget = badgets(:one)
  end

  test "should get index" do
    get badgets_url
    assert_response :success
  end

  test "should get new" do
    get new_badget_url
    assert_response :success
  end

  test "should create badget" do
    assert_difference('Badget.count') do
      post badgets_url, params: { badget: { amount: @badget.amount, current: @badget.current, monthly_payment: @badget.monthly_payment, months_left: @badget.months_left, name: @badget.name, notes: @badget.notes } }
    end

    assert_redirected_to badget_url(Badget.last)
  end

  test "should show badget" do
    get badget_url(@badget)
    assert_response :success
  end

  test "should get edit" do
    get edit_badget_url(@badget)
    assert_response :success
  end

  test "should update badget" do
    patch badget_url(@badget), params: { badget: { amount: @badget.amount, current: @badget.current, monthly_payment: @badget.monthly_payment, months_left: @badget.months_left, name: @badget.name, notes: @badget.notes } }
    assert_redirected_to badget_url(@badget)
  end

  test "should destroy badget" do
    assert_difference('Badget.count', -1) do
      delete badget_url(@badget)
    end

    assert_redirected_to badgets_url
  end
end
