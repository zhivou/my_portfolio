class ServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_find_job, only: [:stopJob]

  def index
  end

  def startJob
    job = Sidekiq::Cron::Job.new(name: 'Xstocks', cron: '* * * * *', class: 'XStocks::Stock::PricesJob')

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

  # NOTE: Default methods won't work with fount job objects.
  # Use (job.find(job_name).name == job_name) to see if
  # job is in the queue.
  def stopJob
    job_name = params[:job_name]
    if (@job.name == job_name)
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
  def stop_job_params
    params.require(:services).permit(:job_name, :cron, :klass)
  end

  def set_find_job
    @job = Sidekiq::Cron::Job.find(params[:job_name])
  end
end
