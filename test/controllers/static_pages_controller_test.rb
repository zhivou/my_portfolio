require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get blog" do
    get static_pages_blog_url
    assert_response :success
  end

  test "should get project" do
    get static_pages_project_url
    assert_response :success
  end

  test "should get contacts" do
    get static_pages_contact_url
    assert_response :success
  end

end
