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
    else
      unless type
        position_crypto = create_stock
        position_crypto.positions.build(
          user_id: current_user.id,
          shares: p[:shares],
          average_price: p[:average_price],
          note: p[:notes],
          total_cost: p[:shares].to_i * p[:average_price].to_i
        )
      end

      if type
        position_crypto = create_crypto
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
    stock = XStock.new(symbol: symbol)
    Household::Stock.create_new(stock)
  end

  def create_crypto
    render json: "Creating new Crypto", status: :ok
  end
end
