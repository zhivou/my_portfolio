class BadgetsController < ApplicationController
  before_action :set_badget, only: [:show, :edit, :update, :destroy]

  # GET /badgets
  # GET /badgets.json
  def index
    @badgets = Badget.all
  end

  # GET /badgets/1
  # GET /badgets/1.json
  def show
  end

  # GET /badgets/new
  def new
    @badget = Badget.new
  end

  # GET /badgets/1/edit
  def edit
  end

  # POST /badgets
  # POST /badgets.json
  def create
    @badget = Badget.new(badget_params)

    respond_to do |format|
      if @badget.save
        format.html { redirect_to @badget, notice: 'Badget was successfully created.' }
        format.json { render :show, status: :created, location: @badget }
      else
        format.html { render :new }
        format.json { render json: @badget.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /badgets/1
  # PATCH/PUT /badgets/1.json
  def update
    respond_to do |format|
      if @badget.update(badget_params)
        format.html { redirect_to @badget, notice: 'Badget was successfully updated.' }
        format.json { render :show, status: :ok, location: @badget }
      else
        format.html { render :edit }
        format.json { render json: @badget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /badgets/1
  # DELETE /badgets/1.json
  def destroy
    @badget.destroy
    respond_to do |format|
      format.html { redirect_to badgets_url, notice: 'Badget was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_badget
      @badget = Badget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def badget_params
      params.require(:badget).permit(:name, :monthly_payment, :months_left, :current, :amount, :notes)
    end
end
