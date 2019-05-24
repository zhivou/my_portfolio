class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  include DefaultPageContent
  include ProfileContent

  protected

  ##
  # This is for devise strong parameters
  #
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
        :first_name,
        :last_name,
        :title,
        :about,
        :avatar_image
    ])
  end
end
