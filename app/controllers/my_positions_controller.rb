class MyPositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_positions, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    type = my_position_params[:crypto]

    p = my_position_params.except(:symbol, :crypto)
    stock = XStock.symb(symbol)
    crypto = XCrypto.symb(symbol)

    if stock.exists? || crypto.exists?
      update(my_position_params)
      return
    end

    position = XPosition.new(p)
    create_stock unless type
    create_crypto if type
  end

  private
  def set_positions
    @positions = XPosition.current
  end

  def my_position_params
    params.require(:my_position).permit(
        :symbol,
        :shares,
        :average_price,
        :notes,
        :crypto
      )
  end

  def symbol
    my_position_params[:symbol]
  end

  def update(position_params)
    render json: "Updating Positions only, the stock data will be updated asynto save credits!", status: :ok
  end

  def create_stock
    Household::Stock.create_new(symbol)
    render json: "Creating new Stock", status: :ok
  end

  def create_crypto
    render json: "Creating new Crypto", status: :ok
  end
end
