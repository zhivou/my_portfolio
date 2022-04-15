class MyPositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_positions, only: [:index]
  before_action :set_position, only: [:show]
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
  end

  def create
    type = my_position_params[:crypto]
    p = my_position_params.except(:symbol, :crypto)

    if type
      position_crypto = create_crypto
    else
      position_crypto = create_stock
      position_crypto.positions.build(
        user_id: current_user.id,
        shares: p[:shares],
        average_price: p[:average_price],
        note: p[:notes],
        total_cost: p[:shares].to_i * p[:average_price].to_i,
        current: true
      )
    end

    if position_crypto.save
      render_ok(
        "Positions have been successfully added. This also includes Stocks/Crypto Prices, Dividends, Comany Information",
         position_crypto
       )
    else
      render_bad(position_crypto.errors, position_crypto.positions)
    end
  end

  def update
    render json: "Updating Positions only, the stock data will be updated asynto save credits!", status: :ok
  end

  private
  def set_positions
    @positions = XPosition.current
  end

  def set_position
    @position = XPosition.find(params[:id])
    gon.symbol = @position.x_stock.symbol
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

  def create_stock
    stock = XStock.new(symbol: symbol)
    Household::Stock.create_new(stock)
  end

  def create_crypto
    render json: "Creating new Crypto", status: :ok
  end
end
