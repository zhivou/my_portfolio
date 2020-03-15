require 'test_helper'

class ManagerJobsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manager_job = manager_jobs(:one)
  end

  test "should get index" do
    get manager_jobs_url
    assert_response :success
  end

  test "should get new" do
    get new_manager_job_url
    assert_response :success
  end

  test "should create manager_job" do
    assert_difference('ManagerJob.count') do
      post manager_jobs_url, params: { manager_job: { address: @manager_job.address, interview: @manager_job.interview, notes: @manager_job.notes, organization: @manager_job.organization, replayed: @manager_job.replayed, title: @manager_job.title, url: @manager_job.url } }
    end

    assert_redirected_to manager_job_url(ManagerJob.last)
  end

  test "should show manager_job" do
    get manager_job_url(@manager_job)
    assert_response :success
  end

  test "should get edit" do
    get edit_manager_job_url(@manager_job)
    assert_response :success
  end

  test "should update manager_job" do
    patch manager_job_url(@manager_job), params: { manager_job: { address: @manager_job.address, interview: @manager_job.interview, notes: @manager_job.notes, organization: @manager_job.organization, replayed: @manager_job.replayed, title: @manager_job.title, url: @manager_job.url } }
    assert_redirected_to manager_job_url(@manager_job)
  end

  test "should destroy manager_job" do
    assert_difference('ManagerJob.count', -1) do
      delete manager_job_url(@manager_job)
    end

    assert_redirected_to manager_jobs_url
  end
end
