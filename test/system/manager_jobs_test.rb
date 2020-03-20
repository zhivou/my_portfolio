require "application_system_test_case"

class ManagerJobsTest < ApplicationSystemTestCase
  setup do
    @manager_job = manager_jobs(:one)
  end

  test "visiting the index" do
    visit manager_jobs_url
    assert_selector "h1", text: "Manager Jobs"
  end

  test "creating a Manager job" do
    visit manager_jobs_url
    click_on "New Manager Job"

    fill_in "Address", with: @manager_job.address
    check "Interview" if @manager_job.interview
    fill_in "Notes", with: @manager_job.notes
    fill_in "Organization", with: @manager_job.organization
    check "Replayed" if @manager_job.replayed
    fill_in "Title", with: @manager_job.title
    fill_in "Url", with: @manager_job.url
    click_on "Create Manager job"

    assert_text "Manager job was successfully created"
    click_on "Back"
  end

  test "updating a Manager job" do
    visit manager_jobs_url
    click_on "Edit", match: :first

    fill_in "Address", with: @manager_job.address
    check "Interview" if @manager_job.interview
    fill_in "Notes", with: @manager_job.notes
    fill_in "Organization", with: @manager_job.organization
    check "Replayed" if @manager_job.replayed
    fill_in "Title", with: @manager_job.title
    fill_in "Url", with: @manager_job.url
    click_on "Update Manager job"

    assert_text "Manager job was successfully updated"
    click_on "Back"
  end

  test "destroying a Manager job" do
    visit manager_jobs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Manager job was successfully destroyed"
  end
end
