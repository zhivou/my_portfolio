module ApplicationHelper

  ##
  # Here is something to consider:
  # 1. There is no 0 login implemented
  # 2. Add class type for verification like current_user.is_a?(User) then show the logout
  # 3. Add current_user method overwrite which is inherits from User ActiveRecord class
  #
  def login_helper
    if current_user
      link_to destroy_user_session_path, method: :delete do
        "<span>Logout</span>".html_safe
      end
    else
      login_renders + " " + register_renders
    end
  end

  def login_renders
    link_to new_user_session_path do
      "<span>Login</span>".html_safe
    end
  end

  def register_renders
    link_to new_user_registration_path do
      "<span>Register</span>".html_safe
    end
  end

  ##
  # This is just and example how you can use Content tags.
  #
  def source_helper
    content_tag(:p, "Content you want to render", class: "tag_helper")
  end
end
