class ManagerJobsController < ApplicationController
  before_action :set_manager_job, only: [:show, :edit, :update, :destroy]

  # GET /manager_jobs
  # GET /manager_jobs.json
  def index
    @manager_jobs = ManagerJob.simple_search(params[:job_search]).order(id: :desc).page(params[:page]).per(8)
    gon.jobs = @manager_jobs
    expired = []
    pending = []
    today = Date.today

    @manager_jobs.each do |j|
      expired << j if j.created_at + 30.days < today && !j.interview
      pending << j if j.created_at + 30.days > today && !j.interview
    end

    gon.expiredJob = expired
    gon.pendingJob = pending
  end

  # GET /manager_jobs/1
  # GET /manager_jobs/1.json
  def show
  end

  # GET /manager_jobs/new
  def new
    @manager_job = ManagerJob.new
  end

  # GET /manager_jobs/1/edit
  def edit
  end

  # POST /manager_jobs
  # POST /manager_jobs.json
  def create
    @manager_job = ManagerJob.new(manager_job_params)

    respond_to do |format|
      if @manager_job.save
        format.html { redirect_to @manager_job, notice: 'Manager job was successfully created.' }
        format.json { render :show, status: :created, location: @manager_job }
      else
        format.html { render :new }
        format.json { render json: @manager_job.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manager_jobs/1
  # PATCH/PUT /manager_jobs/1.json
  def update
    respond_to do |format|
      if @manager_job.update(manager_job_params)
        format.html { redirect_to @manager_job, notice: 'Manager job was successfully updated.' }
        format.json { render :show, status: :ok, location: @manager_job }
      else
        format.html { render :edit }
        format.json { render json: @manager_job.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manager_jobs/1
  # DELETE /manager_jobs/1.json
  def destroy
    @manager_job.destroy
    respond_to do |format|
      format.html { redirect_to manager_jobs_url, notice: 'Manager job was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager_job
      @manager_job = ManagerJob.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manager_job_params
      params.require(:manager_job).permit(
          :organization,
          :title,
          :url,
          :interview,
          :replied,
          :notes,
          :address,
          :description,
          :job_search
      )
    end
end
