class ServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_runners, only: [:index, :startJob, :stopJob]
  before_action :set_find_job, only: [:startJob, :stopJob]

  def index
  end

  def startJob
    if (@job.status == "Enabled")
      render_ok("#{@job.name} is already running.", @job.inspect.to_s)
      return
    end

    job = @job.perform

    if job.valid?
      job.save
      render_ok("Starting #{@job.name}", job.inspect.to_s)
    else
      render_bad(job.errors, job.inspect.to_s)
    end
  end

  def stopJob
    if (@job.status == "Enabled")
      @job.destroy
      render_ok("#{@job.name} was successfully removed!", @job.inspect.to_s)
    else
      render_bad("Job with name: #{@job.name} was not found!", @job.inspect.to_s)
    end
  end

  private
  def set_find_job
    @runners.each do |r|
      if r.jid === params[:job_id]
        @job = r
        return
      end
    end
    raise "Job id #{params[:job_id]} was not found!"
  end

  def set_runners
    @runners = Household::Runner.all
  end

  def render_ok(message, job)
    payload = {
      message: message,
      status: 200,
      job: job
    }
    render json: payload, status: :ok
  end

  def render_bad(message, job)
    payload = {
      error: message,
      status: 400,
      job: job
    }
    render json: payload, status: :bad_request
  end
end
