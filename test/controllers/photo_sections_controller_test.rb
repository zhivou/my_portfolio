require 'test_helper'

class PhotoSectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @photo_section = photo_sections(:one)
  end

  test "should get index" do
    get photo_sections_url
    assert_response :success
  end

  test "should get new" do
    get new_photo_section_url
    assert_response :success
  end

  test "should create photo_section" do
    assert_difference('PhotoSection.count') do
      post photo_sections_url, params: { photo_section: { name: @photo_section.name } }
    end

    assert_redirected_to photo_section_url(PhotoSection.last)
  end

  test "should show photo_section" do
    get photo_section_url(@photo_section)
    assert_response :success
  end

  test "should get edit" do
    get edit_photo_section_url(@photo_section)
    assert_response :success
  end

  test "should update photo_section" do
    patch photo_section_url(@photo_section), params: { photo_section: { name: @photo_section.name } }
    assert_redirected_to photo_section_url(@photo_section)
  end

  test "should destroy photo_section" do
    assert_difference('PhotoSection.count', -1) do
      delete photo_section_url(@photo_section)
    end

    assert_redirected_to photo_sections_url
  end
end
