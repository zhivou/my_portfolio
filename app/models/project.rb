class Project < ApplicationRecord

  ##
  # USed for Project sorting
  #
  def self.by_position
    order("position ASC")
  end
end
