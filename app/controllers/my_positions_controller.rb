class MyPositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_positions, only: [:index]

  def index
  end

  def create
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
        :type,
        :current
      )
  end
end
