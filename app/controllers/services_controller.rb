class ServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_find_job, only: [:startJob, :stopJob]

  RUNNERS = [
    Household::XStock::Job::StockJob.new
  ]

  def index
    @runners = RUNNERS
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
      Sidekiq::Cron::Job.destroy(job_name)
      render json: "#{job_name} was successfully removed!", status: :ok
    else
      payload = {
        error: "Job with name: #{job_name} was not found!",
        status: 400
      }
      render json: payload, status: :bad_request
    end
  end

  private
  def set_find_job
    RUNNERS.each do |r|
      @job = r if r.jid === params[:job_id]
      return
    end
    raise "Job id #{params[:job_id]} was not found!"
  end
end
