class ApplicationRecord < ActiveRecord::Base
  validate :only_one

  self.abstract_class = true

  private

  ##
  # Prevents from having several admins in the app
  #
  def only_one
    if User.count >= 1
      errors.add :base, 'There can only be one owner of the Portfolio Website. You can find this settings under models -> application_record.rb'
    end
  end
end
