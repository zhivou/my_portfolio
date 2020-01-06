require "application_system_test_case"

class PhotoSectionsTest < ApplicationSystemTestCase
  setup do
    @photo_section = photo_sections(:one)
  end

  test "visiting the index" do
    visit photo_sections_url
    assert_selector "h1", text: "Photo Sections"
  end

  test "creating a Photo section" do
    visit photo_sections_url
    click_on "New Photo Section"

    fill_in "Name", with: @photo_section.name
    click_on "Create Photo section"

    assert_text "Photo section was successfully created"
    click_on "Back"
  end

  test "updating a Photo section" do
    visit photo_sections_url
    click_on "Edit", match: :first

    fill_in "Name", with: @photo_section.name
    click_on "Update Photo section"

    assert_text "Photo section was successfully updated"
    click_on "Back"
  end

  test "destroying a Photo section" do
    visit photo_sections_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Photo section was successfully destroyed"
  end
end
