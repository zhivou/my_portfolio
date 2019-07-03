class RegistrationsController < Devise::RegistrationsController

  before_action :one_user_registered?, only: [:new, :create]

  def edit
    super
    @main_skills = MainSkill.all
  end

  protected

  def one_user_registered?
    if User.count >= 1
      if user_signed_in?
        redirect_to root_path
      else
        redirect_to new_user_session_path
      end
    end
  end
end