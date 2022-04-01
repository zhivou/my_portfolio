class MyPositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_positions, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    stock = XStock.symb(my_position_params[:symbol])

    if stock.exists?
      stock.update(current: false)
      new_stock = XStock.new(my_position_params)
    end

    render json: "#{stock.inspect}", status: :ok
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
end
