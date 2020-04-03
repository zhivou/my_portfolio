class StocksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_stock, only: [:show, :edit, :update, :destroy]

  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.includes(:financial_type).all
  end

  # GET /stocks/1
  # GET /stocks/1.json
  def show
  end

  # GET /stocks/new
  def new
    @stock = Stock.new
  end

  # GET /stocks/1/edit
  def edit
  end

  # POST /stocks
  # POST /stocks.json
  def create
    params = stock_params
    errors = []
    success = []

    params[:count].to_i.times do
      @stock = Stock.new(params.except(:count))

      if @stock.save
        success << "#{@stock.id} Stock was successfully created."
      else
        errors << "#{@stock.errors}"
      end
    end

    respond_to do |format|
      if errors.length <= 0
        format.html { redirect_to stocks_path, notice: "Total: #{success.length} created. #{success.inspect}" }
        format.json { render stocks_path, status: :created}
      else
        format.html { redirect_to stocks_path }
        format.json { render json: errors.inspect , status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    respond_to do |format|
      if @stock.update(stock_params.except(:count))
        format.html { redirect_to @stock, notice: 'Stock was successfully updated.' }
        format.json { render :show, status: :ok, location: @stock }
      else
        format.html { render :edit }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  def sell_index
    @names = Stock.where(current: true).select(:name).group(:name).pluck(:name)
  end

  def sell
    params = stock_params
    success = []
    errors = []
    count = params[:count].to_i
    stocks = Stock.where(name: params[:name], current: true)

    stocks.limit(count).each do |s|
      if stocks.count < count
        errors << "You are trying to sell #{count} shares but there are only #{stocks.count} currently available shares for sell"
        break
      end

      if s.update(sold_date: params[:sold_date], sold_price: params[:sold_price], current: false)
        success << "#{s.id} Stock was successfully sold for #{params[:sold_price]}."
      else
        errors << "#{s.errors}"
      end
    end

    respond_to do |format|
      if errors.length <= 0
        format.html { redirect_to stocks_path, notice: "Total: #{success.length} sold. #{success.inspect}" }
        format.json { render stocks_path, status: :created}
      else
        format.html { redirect_to stocks_path, notice: errors.inspect }
        format.json { render json: errors.inspect , status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    respond_to do |format|
      format.html { redirect_to stocks_url, notice: 'Stock was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock
      @stock = Stock.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stock_params
      params.require(:stock).permit(
          :name,
          :price,
          :current,
          :notes,
          :sold_date,
          :sold_price,
          :gain_loss,
          :financial_type_id,
          :purchase_date,
          :count,
          financial_types_attributes: [:id, :name, :_destroy]
      )
    end
end
