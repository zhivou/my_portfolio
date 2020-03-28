class FinancialTypesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_financial_type, only: [:show, :edit, :update, :destroy]

  # GET /financial_types
  # GET /financial_types.json
  def index
    @financial_types = FinancialType.all
  end

  # GET /financial_types/1
  # GET /financial_types/1.json
  def show
  end

  # GET /financial_types/new
  def new
    @financial_type = FinancialType.new
  end

  # GET /financial_types/1/edit
  def edit
  end

  # POST /financial_types
  # POST /financial_types.json
  def create
    @financial_type = FinancialType.new(financial_type_params)

    respond_to do |format|
      if @financial_type.save
        format.html { redirect_to @financial_type, notice: 'Financial type was successfully created.' }
        format.json { render :show, status: :created, location: @financial_type }
      else
        format.html { render :new }
        format.json { render json: @financial_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /financial_types/1
  # PATCH/PUT /financial_types/1.json
  def update
    respond_to do |format|
      if @financial_type.update(financial_type_params)
        format.html { redirect_to @financial_type, notice: 'Financial type was successfully updated.' }
        format.json { render :show, status: :ok, location: @financial_type }
      else
        format.html { render :edit }
        format.json { render json: @financial_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /financial_types/1
  # DELETE /financial_types/1.json
  def destroy
    @financial_type.destroy
    respond_to do |format|
      format.html { redirect_to financial_types_url, notice: 'Financial type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_financial_type
      @financial_type = FinancialType.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def financial_type_params
      params.require(:financial_type).permit(:name)
    end
end
