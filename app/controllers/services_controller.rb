class ServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_runners
  before_action :set_find_job, only: [:startJob, :stopJob]

  def index
  end

  def startJob
    job = @job.perform

    if job.valid?
      job.save
      render json: job.inspect.to_json, status: :ok
    else
      payload = {
        error: job.errors,
        status: 400
      }
      render json: payload, status: :bad_request
    end
  end

  def stopJob
    if (@job.status == "Enabled")
      @job.destroy
      render json: "#{@job.name} was successfully removed!", status: :ok
    else
      payload = {
        error: "Job with name: #{@job.name} was not found!",
        status: 400
      }
      render json: payload, status: :bad_request
    end
  end

  private
  def set_find_job
    @runners.each do |r|
      @job = r if r.jid === params[:job_id]
      return
    end
    raise "Job id #{params[:job_id]} was not found!"
  end

  def set_runners
    @runners = Household::Runner.all
  end
end
