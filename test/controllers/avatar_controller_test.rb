require 'test_helper'

class AvatarControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get avatar_new_url
    assert_response :success
  end

end
