class AvatarController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end
end
