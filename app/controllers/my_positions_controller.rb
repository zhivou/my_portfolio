class MyPositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_positions, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    render json: my_position_params, status: :ok
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
        :crypto,
        :current
      )
  end
end
