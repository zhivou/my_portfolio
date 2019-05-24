class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters

  include DefaultPageContent
  include ProfileContent

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys:
        [
            :username,
            :first_name,
            :last_name,
            :title,
            :about,
            :avatar_image
        ])
  end
end
